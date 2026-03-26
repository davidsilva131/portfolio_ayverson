// scripts/upload-videos.mjs
// Sube todos los videos de public/videos/ a Cloudinary en la carpeta "portfolio"
// Los videos > 90 MB se comprimen automáticamente con ffmpeg antes de subir.
// Uso: node scripts/upload-videos.mjs
//
// Variables de entorno requeridas en .env.local:
//   CLOUDINARY_CLOUD_NAME
//   CLOUDINARY_API_KEY
//   CLOUDINARY_API_SECRET

import { v2 as cloudinary } from 'cloudinary'
import { readdirSync, statSync, unlinkSync, existsSync, mkdirSync } from 'fs'
import { join, basename, extname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'
import { config } from 'dotenv'

config({ path: '.env.local' })

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
const API_KEY    = process.env.CLOUDINARY_API_KEY
const API_SECRET = process.env.CLOUDINARY_API_SECRET

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error('\n❌ Faltan variables de entorno en .env.local:\n')
  console.error('   CLOUDINARY_CLOUD_NAME')
  console.error('   CLOUDINARY_API_KEY')
  console.error('   CLOUDINARY_API_SECRET\n')
  process.exit(1)
}

cloudinary.config({ cloud_name: CLOUD_NAME, api_key: API_KEY, api_secret: API_SECRET })

const MAX_MB     = 90          // límite seguro del plan free
const TARGET_MB  = 80          // target de compresión
const videosDir  = join(fileURLToPath(import.meta.url), '../../public/videos')

// Ruta absoluta a ffmpeg/ffprobe (winget los instala fuera del PATH en terminales abiertos antes de la instalación)
const FFMPEG_BIN = 'C:\\Users\\david\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.1-full_build\\bin'
const FFMPEG     = `"${FFMPEG_BIN}\\ffmpeg.exe"`
const FFPROBE    = `"${FFMPEG_BIN}\\ffprobe.exe"`
const tmpDir     = join(fileURLToPath(import.meta.url), '../../public/videos/_tmp')

const files = readdirSync(videosDir).filter(f => ['.mp4','.mov','.webm'].includes(extname(f).toLowerCase()))

if (files.length === 0) {
  console.log('No se encontraron videos en public/videos/')
  process.exit(0)
}

console.log(`\n🎬 Procesando ${files.length} video(s)...\n`)

/**
 * Comprime un video con ffmpeg para que quede bajo TARGET_MB.
 * Calcula el bitrate necesario en base a la duración real del archivo.
 */
function compressVideo(inputPath, outputPath) {
  // Obtiene duración en segundos con ffprobe
  const duration = parseFloat(
    execSync(
      `${FFPROBE} -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${inputPath}"`,
      { encoding: 'utf8' }
    ).trim()
  )

  // Bitrate total para alcanzar TARGET_MB
  const targetBits   = TARGET_MB * 1024 * 1024 * 8
  const totalBitrate = Math.floor(targetBits / duration)
  const audioBitrate = 128_000
  const videoBitrate = totalBitrate - audioBitrate

  console.log(`   🔧 Comprimiendo (duración: ${duration.toFixed(1)}s → bitrate video: ${Math.round(videoBitrate/1000)}k)...`)

  execSync(
    `${FFMPEG} -y -i "${inputPath}" -c:v libx264 -b:v ${videoBitrate} -c:a aac -b:a 128k -movflags +faststart "${outputPath}"`,
    { stdio: 'pipe' }
  )
}

if (!existsSync(tmpDir)) mkdirSync(tmpDir)

for (const file of files) {
  const filePath = join(videosDir, file)
  const sizeMB   = statSync(filePath).size / 1024 / 1024
  const publicId = `portfolio/${basename(file, extname(file))}`

  console.log(`⬆  ${file} (${sizeMB.toFixed(1)} MB) → ${publicId}`)

  let uploadPath = filePath
  let tmpFile    = null

  if (sizeMB > MAX_MB) {
    tmpFile    = join(tmpDir, file)
    uploadPath = tmpFile
    try {
      compressVideo(filePath, tmpFile)
      const newMB = (statSync(tmpFile).size / 1024 / 1024).toFixed(1)
      console.log(`   ✅ Comprimido a ${newMB} MB`)
    } catch (err) {
      console.error(`   ❌ Error al comprimir: ${err.message}\n`)
      continue
    }
  }

  try {
    const result = await cloudinary.uploader.upload(uploadPath, {
      resource_type: 'video',
      public_id:     publicId,
      overwrite:     false,
      chunk_size:    20_000_000,
    })
    console.log(`   ✅ URL: ${result.secure_url}\n`)
  } catch (err) {
    console.error(`   ❌ Error al subir: ${err.message}\n`)
  }

  if (tmpFile && existsSync(tmpFile)) unlinkSync(tmpFile)
}

// Limpia carpeta temporal si quedó vacía
try { unlinkSync(tmpDir) } catch {}

console.log('¡Listo! Copia las URLs de arriba y pégalas en VideosSection.astro como localSrc.\n')
