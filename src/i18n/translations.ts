export type Lang = "es" | "en"

export type Translations = Record<string, Record<Lang, string>>

const translations: Translations = {
  // ── Nav ──
  "nav.inicio":           { es: "Inicio",         en: "Home" },
  "nav.clientes":         { es: "Clientes",       en: "Clients" },
  "nav.videos":           { es: "Videos",         en: "Videos" },
  "nav.contacto":         { es: "Contacto",       en: "Contact" },
  "nav.contactame":       { es: "Contáctame",     en: "Contact Me" },
  "nav.abrir-menu":       { es: "Abrir menú",     en: "Open menu" },
  "nav.navegacion":       { es: "Navegación principal", en: "Main navigation" },
  "footer.navegacion":    { es: "Footer navigation",    en: "Footer navigation" },
  "nav.volver-arriba":    { es: "Volver arriba",        en: "Back to top" },

  // ── Hero ──
  "hero.badge":           { es: "Editor Profesional de Videos", en: "Professional Video Editor" },
  "hero.line1_potencia":  { es: "Potencia",      en: "Boost" },
  "hero.line1_tu":        { es: " tu ",           en: " your " },
  "hero.line1_contenido": { es: "contenido",      en: "content" },
  "hero.line2_con":       { es: "con ",           en: "with " },
  "hero.line2_ediciones": { es: "ediciones",      en: "edits" },
  "hero.line2_creativas": { es: " creativas, ",    en: " creative, " },
  "hero.line3_efectos":   { es: "efectos",        en: "effects" },
  "hero.line3_y":         { es: " y ",            en: " and " },
  "hero.line3_animaciones": { es: "animaciones",  en: "animations" },
  "hero.line3_unicas":    { es: " únicas",        en: " unique" },
  "hero.subtitle":        { es: "Edición con ritmo, efectos y motion para creadores que quieren destacar.", en: "Video editing with rhythm, effects and motion for creators who want to stand out." },
  "hero.btn_contactame":  { es: "Contáctame",    en: "Contact Me" },
  "hero.btn_ver_trabajo": { es: "Ver mi trabajo", en: "See My Work" },
  "hero.video_destacado": { es: "Video destacado por el editor", en: "Editor's featured video" },

  // ── Clients ──
  "clients.title_creadores": { es: "Creadores que ", en: "Creators who " },
  "clients.title_confian":   { es: "confían",       en: "trust" },
  "clients.title_en_mi":     { es: " en mí",        en: " me" },
  "clients.subtitle":     { es: "Algunos de los creadores para quienes he editado contenido de alto impacto.", en: "Some of the creators I've edited high-impact content for." },

  // ── Videos ──
  "videos.title_mi":      { es: "Mi ",              en: "My " },
  "videos.title_trabajo": { es: "trabajo",          en: "work" },
  "videos.title_accion":  { es: " en acción",       en: " in action" },
  "videos.subtitle":      { es: "Desde montajes cinematográficos hasta reels con ganchos impactantes. Cada frame editado con intención.", en: "From cinematic montages to reels with impactful hooks. Every frame edited with intention." },
  "videos.tab_reels":     { es: "Reels & Shorts",   en: "Reels & Shorts" },
  "videos.tab_youtube":   { es: "YouTube",          en: "YouTube" },

  // ── Footer ──
  "footer.copyright":     { es: `© ${new Date().getFullYear()} Ayverson. Todos los derechos reservados.`, en: `© ${new Date().getFullYear()} Ayverson. All rights reserved.` },
  "footer.desarrollado":  { es: "Desarrollado por", en: "Developed by" },
  "footer.redes":         { es: "Redes sociales",   en: "Social media" },

  // ── Contact Modal ──
  "contact.title":        { es: "¡Hablemos!",       en: "Let's Talk!" },
  "contact.subtitle":     { es: "Elige por dónde quieres contactarme", en: "Choose how you want to reach me" },
  "contact.close":        { es: "Cerrar modal",     en: "Close modal" },
  "contact.correo":       { es: "Correo Electrónico", en: "Email" },
  "contact.subtitle_section": { es: "Disponible para nuevos proyectos. Elige tu canal favorito.", en: "Available for new projects. Pick your favorite channel." },
  "contact.line1":        { es: "Tu próximo video", en: "Your next video" },
  "contact.line2":        { es: "comienza aquí",    en: "starts here" },
  "contact.x_name":       { es: "X (Twitter)",      en: "X (Twitter)" },
  "contact.ig_name":      { es: "Instagram",        en: "Instagram" },

  // ── Video Card ──
  "videocard.featured":   { es: "DESTACADO",        en: "FEATURED" },
  "videocard.mirar":      { es: "Mirar en YouTube", en: "Watch on YouTube" },

  // ── Platform Badge ──
  "platform.suscriptores":{ es: "suscriptores",     en: "subscribers" },
}

export default translations
