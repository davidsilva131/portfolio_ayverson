# Reporte de revisión de diseño UI/UX — VFX Ayverson

> Auditoría hecha con las skills de taste (`design-taste-frontend`, `high-end-visual-design`) sobre el código y el sitio renderizado (build + preview, viewport 1264×625). **Sin cambios de código** — este es solo el diagnóstico.

## Design Read

> Portfolio de editor de video para creadores de contenido y colaboradores, con lenguaje **dark tech + glassmorphism** y base violeta. Estado actual: buena estructura y motion, pero **deriva hacia arcoíris de acentos y AI-tells** que diluyen la identidad.

Diales actuales (inferidos): `VARIANCE 6` · `MOTION 5` · `DENSITY 3` — razonables, **no hay que tocarlos**; el problema está en color, tipografía y copy.

---

## P0 — Credibilidad y coherencia (corregir sí o sí)

### 1. Falsa prueba social y estados inventados
- `StarRating` muestra **"Reseñas 5/5"** sin que exista ninguna reseña (`src/components/atoms/StarRating.astro`).
- El VideoCard muestra **dot verde "En vivo"** sobre un embed de YouTube que NO está en vivo (`VideoCard.astro:56-59`).
- Los Badge llevan **dots de color decorativos** (verde en el hero, rojo en "DESTACADO", violeta en secciones) que no comunican ningún estado real (`Badge.astro`).

**Recomendación:** eliminar reseñas/estados falsos (o reemplazarlos por datos reales: testimonios verificables, métricas reales de YouTube/Twitch). Los dots solo cuando haya estado semántico real.

### 2. Arcoíris de acentos (viola el Color Consistency Lock)
Contados en el render: **8 textos con gradiente** y al menos **10 tonos distintos** compitiendo:
- Sistema base: violeta (botones, navbar, modal, scroll-top) ✓
- CTA primario del hero: **emerald→teal con glow verde** (choca con toda la identidad violeta, `HeroSection.astro:70`)
- Titular hero con **5 gradientes diferentes** en 3 líneas: violeta / cyan / indigo-violeta / fucsia-rosa / esmeralda-teal
- Titulares de sección: violeta→fucsia→cyan (clientes), violeta→fucsia→rosa (videos), violeta→fucsia→cyan (contacto)
- PlatformBadge: cyan TikTok / purple Twitch / red YouTube; stars amber; tabs cyan/red

**Recomendación:** **un solo acento (violeta)** + como mucho un acento secundario discreto para el CTA primario (ej. cyan/teal aplicado con moderación, o violeta directo). Los colores de plataforma solo en los iconos de plataforma, nunca en el sistema general. Gradiente de texto: **máximo 1 por página** (el del hero), de 2 colores (violeta→cyan), y titulares de sección en blanco con una sola palabra acentuada.

### 3. Copy en mayúsculas gritón en el hero
`HeroSection.astro:59-63`: un `<h2>` que grita `¿QUE ESPERAS? ¡LLEVEMOS TU CONTENIDO AL SIGUIENTE NIVEL!` (sin acento en QUÉ). Dos titulares compitiendo + register agresivo = hero de "venta", no de portfolio.

**Recomendación:** un solo titular (h1) claro + un subtexto calmo de ≤20 palabras como `<p>`. Si se quiere punch, una línea corta tipo "Edición que engancha" en el badge, no un grito en el cuerpo.

---

## P1 — Impacto visual y accesibilidad

### 4. Sin tipografía de marca (medido)
`font-family` computado: `ui-sans-serif, system-ui, sans-serif` (Segoe UI). No hay ninguna fuente cargada (`global.css`, head sin font links). Un portfolio de video con la fuente del sistema se ve genérico.

**Recomendación:** fuente display auto-hospedada (Satoshi, Clash Display, Outfit o Geist) + opcional mono para metadatos, con `font-display: swap`. Primer lever de calidad percibida (Section 11.D del skill).

### 5. H1 demasiado pequeño (medido)
En viewport 1264px el h1 mide **25.6px** (1.6rem); en mobile **18px** (`text-lg`). La jerarquía se apoya en `font-black` en vez de escala.

**Recomendación:** `text-3xl sm:text-4xl lg:text-5xl` mínimo; con tipografía display nueva el impacto sube sin inflar el layout.

### 6. Secciones con el mismo layout family + eyebrow en todas
Clients, Videos y Contacto usan exactamente el mismo patrón: **badge centrado + h2 gradiente centrado + contenido centrado** — 3 secciones seguidas idénticas, y 4 eyebrows en 4 secciones (la regla es máx. 1 cada 3 secciones). Además el dot-grid de fondo se repite en las 4 secciones.

**Recomendación:** variar los layout families (Section-Layout-Repetition Ban):
- **Clientes** → fila horizontal / lista tipo marquee o lista compacta con logos, sin tarjetas repetidas.
- **Videos** → grid asimétrico (1 featured grande + reels), no 3 columnas iguales.
- **Contacto** → bloque ancho alineado a la izquierda (cerrar con fuerza, no con otro centro).
- Quitar badges de 2-3 secciones; dejar máximo 1-2 en toda la página.

### 7. Contraste insuficiente (medido — falla WCAG AA)
Sobre fondo negro:
| Texto | Uso | Ratio medido | AA 4.5:1 |
|---|---|---|---|
| white/35 | subtítulos Clientes/Videos | **3.0:1** | ✗ |
| white/40 | handles @vfxayverson, meta reels, EN | **3.7:1** | ✗ |
| white/25 | "En vivo", clientes en reels | **2.0:1** | ✗ |
| white/30 | copyright footer | **2.5:1** | ✗ |
| white/20 | "Desarrollado por" | **1.7:1** | ✗ |

**Recomendación:** textos informativos a white/55–70 mínimo; footer a white/50+. Los white/15 (separadores) sí pueden quedarse decorativos.

### 8. Modal sin gestión de foco (verificado)
Al abrir el modal el foco queda en `<body>`: no hay focus trap, ni foco inicial, ni retorno de foco al cerrar, ni `inert` en el fondo (`ContactModal.astro`). Teclado: tras abrir con Enter, Tab se va detrás del modal.

**Recomendación:** al abrir → enfocar el panel (o el close); Tab/Shift+Tab confinados al modal; al cerrar → restaurar foco al botón que lo abrió. Añadir `inert`/`aria-hidden` al `main`.

### 9. Sin focus-visible en controles
Hamburguesa, tabs, CTAs, pills de contacto y logo no tienen anillo de foco (solo ScrollToTop lo tiene). Navegación por teclado invisible.

**Recomendación:** `focus-visible:ring-2 ring-violet-400` en todos los interactivos.

### 10. Partículas sin respeto a reduced-motion
`ParticleBackground` anima 60 estrellas infinitas (`drift-*`, `will-change`) sin gate de `prefers-reduced-motion` — el único sistema del sitio que lo ignora (los reveals sí lo respetan, bien).

**Recomendación:** desactivar/pausar la animación bajo `@media (prefers-reduced-motion: reduce)` (mantenerlas estáticas), y considerar bajar de 60 elementos.

---

## P2 — Pulido

### 11. Contacto duplicado
Modal (desde nav "Contáctame" y CTA hero) y sección Contacto ofrecen **exactamente los mismos 3 métodos**. Además 3 labels distintos para la misma intención: "Contáctame" / "¡Trabajemos Juntos!" / "Contacto" (No Duplicate CTA Intent).

**Recomendación:** una sola label de contacto en toda la página. Diferenciar los canales: redes + email en el modal; la sección de cierre con algo más (formulario simple, disponibilidad, o testimonio).

### 12. Datos incorrectos/repetitivos
- El avatar/banner de **iSBreath apunta a `badbunny_logo.avif` / `badbunny_banner.avif`** (archivos verificados en `public/creators/`).
- Naming inconsistente: `iSBreath` (Clientes) vs `iSbreath` (reels).
- 4 de 6 reels titulados "Gameplay" — cartera monótona a la vista.

**Recomendación:** corregir assets, unificar nombre, títulos descriptivos por video.

### 13. Halos neon y glows
VideoCard con doble halo `blur-3xl` violeta (`-inset-6`/`-inset-3`), botones con `shadow-[0_0_18px_...]` glow, hover glow del CTA emerald. Es el patrón "AI purple glow" (sección 9.A).

**Recomendación:** sustituir glows por bordes internos + sombras tintadas sutiles (`inset 0 1px 0 white/10`), manteniendo el carácter glass.

### 14. Meta/SEO ausentes
Sin `meta description`, OG tags ni `theme-color`; favicon `.avif` (soporte parcial — Safari no lo renderiza).

**Recomendación:** OG tags completos (crítico para compartir en X/IG, que son sus canales) + favicon PNG/ICO + theme-color `#000`.

### 15. Detalles técnicos de diseño
- `min-h-screen` en hero → `min-h-[100dvh]` (iOS Safari).
- Navbar fijo edge-to-edge con `border-b` → opción premium: pill flotante centrada (high-end skill), o mantenerla pero sin borde inferior tan marcado.
- Flex-math en reels (`w-[calc(...)]`) → grid (`grid-cols-2 sm:grid-cols-3`).

---

## Lo que está bien (preservar)

- **Hero split asimétrico con video real** embebido (no fake screenshot) ✓
- **Scroll reveal con Motion** — transform/opacity, `prefers-reduced-motion` respetado, sin listener de scroll para animar ✓
- **Sistema glass consistente**: `bg-black/40 + backdrop-blur + border-white/5` ✓
- **i18n es/en completa** y funcional, incluyendo aria-labels ✓
- **ScrollToTop accesible** (aria-hidden/tabindex, reduced-motion) — patrón a copiar ✓
- **Aire generoso** (`py-28`) y jerarquía clara por secciones ✓
- Tabs funcionales, tarjetas con hover sutil (translate) ✓

---

## Prioridad de implementación propuesta (cuando autorices)

1. **Quick wins** (una sesión): contrastes de texto, focus-visible + modal focus, datos (avatar iSBreath, títulos de reels), quitar "En vivo"/"Reseñas 5/5", CTA emerald → violeta, `min-h-[100dvh]`, reduced-motion en estrellas.
2. **Tipografía + hero**: fuente display auto-hospedada, escala del h1, copy del hero (1 titular + subtexto calmo, sin gritos).
3. **Consolidación de color**: 1 acento violeta, gradientes máx. 1 por página, halos → bordes internos.
4. **Variación de secciones**: layout distinto para Clientes/Videos/Contacto, quitar badges sobrantes, dot-grid variado.
5. **Meta/OG + favicon** y pulido final.

---

## Estado de implementación (2026-08-12)

Todas las fases aplicadas y verificadas (build OK + QA en navegador). Pendientes deliberados:

| Ítem | Estado |
|---|---|
| 1. Falsa prueba social / estados inventados | ✅ Eliminados: StarRating (archivo borrado), "En vivo", dots de Badge |
| 2. Arcoíris de acentos | ✅ 1 gradiente por página (hero, violeta→cyan); CTA emerald → violeta sólido; plataformas monocromo en iconos; halos/glows eliminados |
| 3. Copy gritón del hero | ✅ h2 → `<p>` calmo (12 palabras), "¡Trabajemos Juntos!" → "Contáctame" (label única) |
| 4. Tipografía | ✅ Outfit Variable auto-hospedada (`@fontsource-variable/outfit`) |
| 5. Escala h1 | ✅ 18px→32px mobile, 25.6px→48px desktop |
| 6. Layout de secciones | ✅ Sin badges (solo 1 eyebrow en el hero), dot-grid solo en hero/videos; Clients, Videos y Contacto centrados |
| 7. Contraste AA | ✅ white/35→60, white/40→60, footer white/30→50, white/20→45 (medido: todos ≥4.5:1) |
| 8. Modal focus | ✅ Focus inicial al panel, trap Tab/Shift+Tab, `inert` en header/main/footer, restauración de foco (verificado con click real) |
| 9. focus-visible | ✅ Regla global `outline: 2px solid #a78bfa` para todos los interactivos |
| 10. reduced-motion estrellas | ✅ `@media (prefers-reduced-motion: reduce)` pausa la animación |
| 11. Contacto duplicado | ⏸ Parcial: label única ("Contáctame"); modal y sección mantienen los 3 métodos (diferenciación pendiente si se quiere) |
| 12. Datos | ✅ iSBreath unificado; títulos de reels: "Competitivo es divertido" (real por filename); **pendiente**: títulos reales de los 3 "Gameplay" y assets de iSBreath si no son los `badbunny_*` |
| 13. Halos neon | ✅ Sustituidos por sombra violeta tintada + bordes internos |
| 14. Meta/OG | ✅ meta description, OG tags, twitter:card, theme-color #050505, favicon PNG (logo convertido con PIL) |
| 15. Técnicos | ✅ `min-h-[100dvh]`, reels con `grid` (sin flex-math) |
| Navbar pill flotante | ⏸ Opcional (no aplicado — el navbar actual se mantiene) |
