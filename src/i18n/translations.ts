export type Lang = "es" | "en"

export type Translations = Record<string, Record<Lang, string>>

const translations: Translations = {
  // ── Nav ──
  "nav.inicio":           { es: "Inicio",         en: "Home" },
  "nav.sobre-mi":         { es: "Sobre mí",       en: "About Me" },
  "nav.clientes":         { es: "Clientes",       en: "Clients" },
  "nav.videos":           { es: "Videos",         en: "Videos" },
  "nav.preguntas":        { es: "Preguntas",      en: "FAQ" },
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
  "hero.cta_esperas":     { es: "¿QUE ESPERAS?",  en: "WHAT ARE YOU WAITING FOR?" },
  "hero.cta_nivel":       { es: "¡LLEVEMOS TU CONTENIDO AL SIGUIENTE NIVEL!", en: "LET'S TAKE YOUR CONTENT TO THE NEXT LEVEL!" },
  "hero.btn_trabajemos":  { es: "¡Trabajemos Juntos!", en: "Let's Work Together!" },
  "hero.btn_ver_trabajo": { es: "Ver mi trabajo", en: "See My Work" },
  "hero.video_destacado": { es: "Video destacado por el editor", en: "Editor's featured video" },

  // ── About ──
  "about.badge":          { es: "Sobre Mí",       en: "About Me" },
  "about.title_el":       { es: "El ",            en: "The " },
  "about.title_editor":   { es: "editor",         en: "editor" },
  "about.title_detras":   { es: " detrás del contenido", en: " behind the content" },
  "about.subtitle":       { es: "Conoce quién se encarga de llevar tus ideas a la pantalla.", en: "Meet the person who brings your ideas to the screen." },
  "about.p1_intro":       { es: "¡Hola! mi nombre es", en: "Hi! My name is" },
  "about.p1_soy":         { es: "soy un", en: "I'm a" },
  "about.p1_editor":      { es: " editor de videos", en: " video editor" },
  "about.p1_especializado": { es: " especializado en el contenido vertical para ", en: " specialized in vertical content for " },
  "about.p2_dominando":   { es: "Lo rápido y lo vertical están dominando las redes sociales y los videos cortos son la mejor estrategia para atraer público a tu", en: "Short-form vertical content is dominating social media and short videos are the best strategy to attract an audience to your" },
  "about.p2_principal":   { es: " contenido principal", en: " main content" },
  "about.p2_bien":        { es: ", ya bien sea a streams o videos horizontales.", en: ", whether that's streams or horizontal videos." },
  "about.p3_especializo": { es: "Me especializo en", en: "I specialize in" },
  "about.p3_impactantes": { es: " ediciones impactantes", en: " impactful edits" },
  "about.p3_cortes":      { es: ", con cortes precisos y efectos llamativos que puedan retener al espectador desde el primer segundo.", en: ", with precise cuts and eye-catching effects that hook viewers from the very first second." },
  "about.p4_aunque":      { es: "Aunque mi mayor experiencia es el contenido", en: "Although my main experience is in" },
  "about.p4_gaming":      { es: " Gaming", en: " Gaming" },
  "about.p4_especificamente": { es: ", específicamente", en: ", specifically" },
  "about.p4_adaptar":     { es: ", me puedo adaptar a cualquier tipo de contenido.", en: ", I can adapt to any type of content." },

  // About right panel
  "about.role":           { es: "Editor · Diseñador · Animador", en: "Editor · Designer · Animator" },
  "about.tag_editor":     { es: "Editor de Videos", en: "Video Editor" },
  "about.tag_disenador":  { es: "Diseñador Gráfico", en: "Graphic Designer" },
  "about.tag_animador":   { es: "Animador",         en: "Animator" },
  "about.tools_title":    { es: "Herramientas",     en: "Tools" },
  "about.tool_edicion":   { es: "edición",          en: "editing" },
  "about.tool_animacion": { es: "animación",        en: "animation" },
  "about.tool_diseno":    { es: "diseño",           en: "design" },
  "about.tool_vectores":  { es: "vectores",         en: "vector art" },
  "about.specs_title":    { es: "Especialidades",   en: "Specialties" },
  "about.spec_gaming_sub":{ es: "Valorant y más",   en: "Valorant and more" },
  "about.spec_irl_sub":   { es: "Vida real y vlogs", en: "Real life and vlogs" },
  "about.spec_blogs_sub": { es: "Contenido informativo", en: "Informative content" },

  // ── Clients ──
  "clients.badge":        { es: "Clientes",         en: "Clients" },
  "clients.title_creadores": { es: "Creadores que ", en: "Creators who " },
  "clients.title_confian":   { es: "confían",       en: "trust" },
  "clients.title_en_mi":     { es: " en mí",        en: " me" },
  "clients.subtitle":     { es: "Algunos de los creadores para quienes he editado contenido de alto impacto.", en: "Some of the creators I've edited high-impact content for." },

  // ── Videos ──
  "videos.badge":         { es: "Portafolio",       en: "Portfolio" },
  "videos.title_mi":      { es: "Mi ",              en: "My " },
  "videos.title_trabajo": { es: "trabajo",          en: "work" },
  "videos.title_accion":  { es: " en acción",       en: " in action" },
  "videos.subtitle":      { es: "Desde montajes cinematográficos hasta reels con ganchos impactantes. Cada frame editado con intención.", en: "From cinematic montages to reels with impactful hooks. Every frame edited with intention." },
  "videos.tab_reels":     { es: "Reels & Shorts",   en: "Reels & Shorts" },
  "videos.tab_youtube":   { es: "YouTube",          en: "YouTube" },

  // ── FAQ ──
  "faq.badge":            { es: "FAQ",              en: "FAQ" },
  "faq.title_preguntas":  { es: "Preguntas ",       en: "Frequently " },
  "faq.title_frecuentes": { es: "frecuentes",       en: "asked questions" },
  "faq.subtitle":         { es: "Todo lo que necesitas saber antes de empezar a trabajar conmigo.", en: "Everything you need to know before working with me." },
  "faq.q1":               { es: "¿Por qué debería confiar en ti?", en: "Why should I trust you?" },
  "faq.a1":               { es: "Llevo más de 4 años editando contenido para creadores en TikTok, YouTube y Twitch. Cada proyecto lo trato con la misma dedicación y atención al detalle, y siempre estoy disponible para ajustar el resultado hasta que quedes 100% satisfecho.", en: "I have over 4 years of experience editing content for creators on TikTok, YouTube, and Twitch. I treat every project with the same dedication and attention to detail, and I'm always available to adjust the result until you're 100% satisfied." },
  "faq.q2":               { es: "¿Qué tipo de contenido editas?", en: "What type of content do you edit?" },
  "faq.a2":               { es: "Edito contenido vertical y horizontal: Shorts, Reels, TikToks, highlights de Twitch, podcasts editados y vlogs. Si tienes un formato específico en mente, cuéntame y lo evaluamos.", en: "I edit vertical and horizontal content: Shorts, Reels, TikToks, Twitch highlights, edited podcasts, and vlogs. If you have a specific format in mind, let me know and we'll figure it out." },
  "faq.q3":               { es: "¿Cuáles son tus métodos de pago?", en: "What are your payment methods?" },
  "faq.a3":               { es: "Acepto pagos vía Binance, PayPal y Zelle, antes de realizar la edición.", en: "I accept payments via Binance, PayPal, and Zelle, before starting the edit." },
  "faq.q4":               { es: "¿Puedo elegir los clips o tú los seleccionas?", en: "Can I choose the clips or do you select them?" },
  "faq.a4":               { es: "Tú eliges: puedes mandarme el archivo crudo o me encargo de buscar los mejores momentos.", en: "You choose: you can send me the raw file or I can find the best moments." },
  "faq.q5":               { es: "¿Cuánto tiempo tardas en entregar?", en: "How long does delivery take?" },
  "faq.a5":               { es: "Dependiendo del paquete, la entrega es de 24 a 72 horas después que se realice el pago correspondiente.", en: "Depending on the package, delivery is within 24 to 72 hours after payment is made." },
  "faq.q6":               { es: "¿Puedo pedir ajustes después de la entrega?", en: "Can I request revisions after delivery?" },
  "faq.a6":               { es: "Sí, incluyo 3 revisiones gratuitas para asegurarme de que quedes satisfecho. Revisiones adicionales contienen un costo.", en: "Yes, I include 3 free revisions to make sure you're satisfied. Additional revisions have a cost." },
  "faq.q7":               { es: "¿Puedo tener un paquete personalizado para mi contenido?", en: "Can I get a custom package for my content?" },
  "faq.a7":               { es: "Sí, puedes crear tu propio paquete para tu contenido.", en: "Yes, you can create your own custom content package." },

  // ── Footer ──
  "footer.copyright":     { es: `© ${new Date().getFullYear()} Ayverson. Todos los derechos reservados.`, en: `© ${new Date().getFullYear()} Ayverson. All rights reserved.` },
  "footer.desarrollado":  { es: "Desarrollado por", en: "Developed by" },
  "footer.redes":         { es: "Redes sociales",   en: "Social media" },

  // ── Contact Modal ──
  "contact.title":        { es: "¡Hablemos!",       en: "Let's Talk!" },
  "contact.subtitle":     { es: "Elige por dónde quieres contactarme", en: "Choose how you want to reach me" },
  "contact.close":        { es: "Cerrar modal",     en: "Close modal" },
  "contact.correo":       { es: "Correo Electrónico", en: "Email" },

  // ── Video Card ──
  "videocard.featured":   { es: "DESTACADO",        en: "FEATURED" },
  "videocard.mirar":      { es: "Mirar en YouTube", en: "Watch on YouTube" },
  "videocard.en_vivo":    { es: "En vivo",          en: "Live" },

  // ── Platform Badge ──
  "platform.suscriptores":{ es: "suscriptores",     en: "subscribers" },

  // ── Star Rating ──
  "stars.label":          { es: "Reseñas 5/5",      en: "Reviews 5/5" },
  "stars.aria":           { es: "{rating} de {max} estrellas", en: "{rating} out of {max} stars" },
}

export default translations
