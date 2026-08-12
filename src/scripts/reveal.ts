// Scroll-reveal setup powered by Motion One (`motion`).
// `inView` wraps IntersectionObserver and animates each element
// once it enters the viewport. Stagger via data-reveal-delay (ms).
//
// Motion's inView() reports elements as "in view" on mount using
// the rootMargin — if you pass a negative bottom margin like
// "0px 0px -40px 0px", elements whose top is below the viewport
// still register as visible, which causes everything to reveal
// immediately. We pre-filter: only mount inView() on elements
// that are NOT yet in viewport, and reveal the ones that are.

import { inView, animate } from "motion"

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches
const DEFAULT_DURATION = 0.7
const DEFAULT_EASE = [0.16, 1, 0.3, 1]

function setupReveal() {
  const targets = document.querySelectorAll<HTMLElement>(".reveal")
  if (!targets.length) return

  if (REDUCED_MOTION || !("IntersectionObserver" in window)) {
    animate(targets, { opacity: 1, transform: "translateY(0px)" }, { duration: 0 })
    return
  }

  const vh = window.innerHeight
  for (const el of targets) {
    const delay = Number(el.dataset.revealDelay ?? 0) / 1000
    const r = el.getBoundingClientRect()
    const alreadyInView = r.top < vh && r.bottom > 0

    if (alreadyInView) {
      // Element is already visible on mount (e.g. hero) — reveal without animation
      animate(el, { opacity: 1, transform: "translateY(0px)" }, { duration: 0, delay })
    } else {
      // Element is below the fold — let inView() take over for scroll-triggered reveal
      inView(
        el,
        () => {
          animate(
            el,
            { opacity: 1, transform: "translateY(0px)" },
            { duration: DEFAULT_DURATION, ease: DEFAULT_EASE, delay },
          )
          return () => {
            // No teardown: once revealed, stay revealed.
          }
        },
        { amount: 0.15 },
      )
    }
  }
}

// Gate hidden state on JS availability — see global.css `:not(.js)` fallback.
document.documentElement.classList.add("js")
setupReveal()