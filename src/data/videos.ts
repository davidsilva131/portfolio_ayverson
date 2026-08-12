// Central video data — single source of truth for the Videos section AND the
// ItemList structured data in index.astro (keep both in sync automatically).

export interface VideoItem {
  videoId?: string
  localSrc?: string
  title: string
  client: string
  category: string
}

export interface ReelItem {
  videoId?: string
  localSrc?: string
  title: string
  platform: 'tiktok' | 'youtube-shorts' | 'local'
  client?: string
}

// YouTube panel — use videoId or localSrc (files in public/videos/)
export const youtubeVideos: VideoItem[] = [
  { videoId: 'JroZMa8zbcc',  title: 'SI PARPADEO EN LA VIDA REAL, ¡MUERO!',     client: 'Botti',    category: 'Gaming' },
  { videoId: '--1KlgRCRqI',  title: 'En esta partida sacaron lo peor de mi — JustVisa', client: 'JustVisa', category: 'Gaming' },
  // Local examples — uncomment and set the correct filename:
  // { localSrc: '/videos/BA BA BAD JUSTVISA.mp4',          title: 'BA BA BAD',             client: 'JustVisa', category: 'Edit'   },
  // { localSrc: '/videos/JaviHero.mp4',                    title: 'JaviHero',              client: 'Personal', category: 'Edit'   },
  // { localSrc: '/videos/JustVisa Video Auto-tune.mp4',    title: 'Auto-tune Edit',        client: 'JustVisa', category: 'Edit'   },
  // { localSrc: '/videos/KRÜ.mp4',                         title: 'KRÜ',                   client: 'KRÜ',      category: 'Edit'   },
  // { localSrc: '/videos/que mas quieren de miiiii.mp4',   title: 'Que Más Quieren',       client: 'Personal', category: 'Edit'   },
  // { localSrc: '/videos/Sbreath.mp4',                     title: 'Sbreath',               client: 'Sbreath',  category: 'Edit'   },
  // { localSrc: '/videos/TIMING PERFECTO.mp4',             title: 'Timing Perfecto',       client: 'Personal', category: 'Edit'   },
  // { localSrc: '/videos/Unitiled 1.mp4',                  title: 'Untitled 1',            client: 'Personal', category: 'Edit'   },
]

// Reels & Shorts panel
export const reels: ReelItem[] = [
  { localSrc: 'https://res.cloudinary.com/tehospedo/video/upload/v1783625443/Mrjoshua_2_ivuol6.mp4',  title: 'Gameplay',            platform: 'youtube-shorts' as const, client: 'MrJoshua_' },
  // { localSrc: 'https://files.catbox.moe/r7ms2z.mp4',  title: 'Gameplay', platform: 'youtube-shorts' as const, client: 'TvBotti' },
  // { localSrc: 'https://files.catbox.moe/einfqn.mp4',  title: 'Gameplay', platform: 'youtube-shorts' as const, client: 'JustVisa' },
  { localSrc: 'https://res.cloudinary.com/tehospedo/video/upload/v1783625456/Sbreath_rvkzdk.mp4',  title: 'Gameplay',            platform: 'youtube-shorts' as const, client: 'iSBreath' },
  { localSrc: 'https://res.cloudinary.com/tehospedo/video/upload/v1783625456/JaviHero_e1usq9.mp4',  title: 'Gameplay',            platform: 'youtube-shorts' as const, client: 'JaviHero' },
  { localSrc: 'https://res.cloudinary.com/tehospedo/video/upload/v1783625457/Justvisa_3_hfzhqx.mp4',  title: 'Just Chatting',       platform: 'youtube-shorts' as const, client: 'JustVisa' },
  { localSrc: 'https://res.cloudinary.com/tehospedo/video/upload/v1783625448/justvisa_4_halri3.mp4',  title: 'Vlog',                platform: 'youtube-shorts' as const, client: 'JustVisa' },
  { localSrc: 'https://res.cloudinary.com/tehospedo/video/upload/v1783625450/competitivo_es_divertido_2_kp9qe9.mp4',  title: 'Competitivo es divertido',  platform: 'youtube-shorts' as const, client: 'MrJoshua_' },
]
