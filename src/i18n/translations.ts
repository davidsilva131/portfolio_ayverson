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
  "hero.badge":           { es: "Editor de Video & Motion Designer", en: "Video Editor and Motion Designer" },
  "hero.line1":           { es: "El detalle está", en: "The detail is" },
  "hero.line2":           { es: "en cada corte.",   en: "in every cut." },
  "hero.subtitle":        { es: "Potenciando tu contenido con ediciones creativas y efectos únicos.", en: "Elevating your content with creative editing and unique effects." },
  "hero.btn_contactame":  { es: "Contáctame",    en: "Contact Me" },
  "hero.btn_ver_trabajo": { es: "Ver mi trabajo", en: "See My Work" },

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

  // ── Platform Badge ──
  "platform.suscriptores":{ es: "suscriptores",     en: "subscribers" },
}

export default translations
