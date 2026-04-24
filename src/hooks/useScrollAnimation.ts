import { useRef } from 'react'
import { useInView, Variants } from 'framer-motion'

const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

const noAnimation: Variants = {
  hidden: {},
  visible: {},
}

export const fadeInUp: Variants = prefersReducedMotion
  ? noAnimation
  : {
      hidden: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      },
    }

export const fadeInLeft: Variants = prefersReducedMotion
  ? noAnimation
  : {
      hidden: { opacity: 0, x: -36 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      },
    }

export const fadeInRight: Variants = prefersReducedMotion
  ? noAnimation
  : {
      hidden: { opacity: 0, x: 36 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      },
    }

export const stagger: Variants = prefersReducedMotion
  ? noAnimation
  : {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.18, delayChildren: 0.1 },
      },
    }

export const staggerItem: Variants = prefersReducedMotion
  ? noAnimation
  : {
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      },
    }

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })
  return { ref, isInView }
}
