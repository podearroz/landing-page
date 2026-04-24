import type { Ref } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { CTA_FINAL, PROFESSIONAL } from '../../constants/content'
import { fadeInUp, stagger, useScrollAnimation } from '../../hooks/useScrollAnimation'

export function CtaFinal() {
  const { ref: sectionRef, isInView } = useScrollAnimation()

  return (
    <section
      id="contato"
      ref={sectionRef as Ref<HTMLElement>}
      className="relative py-24 md:py-36 bg-primary overflow-hidden"
    >
      {/* Decorative floral watermark (white) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        className="absolute -bottom-16 -right-16 w-80 h-80 pointer-events-none select-none opacity-[0.08]"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="50" stroke="white" strokeWidth="1.5" fill="none" />
        <ellipse cx="200" cy="150" rx="18" ry="40" stroke="white" strokeWidth="1.2" fill="none" />
        <ellipse cx="200" cy="250" rx="18" ry="40" stroke="white" strokeWidth="1.2" fill="none" />
        <ellipse cx="150" cy="200" rx="40" ry="18" stroke="white" strokeWidth="1.2" fill="none" />
        <ellipse cx="250" cy="200" rx="40" ry="18" stroke="white" strokeWidth="1.2" fill="none" />
        <ellipse cx="164" cy="164" rx="14" ry="30" stroke="white" strokeWidth="1" fill="none" transform="rotate(-45 164 164)" />
        <ellipse cx="236" cy="164" rx="14" ry="30" stroke="white" strokeWidth="1" fill="none" transform="rotate(45 236 164)" />
        <ellipse cx="164" cy="236" rx="14" ry="30" stroke="white" strokeWidth="1" fill="none" transform="rotate(45 164 236)" />
        <ellipse cx="236" cy="236" rx="14" ry="30" stroke="white" strokeWidth="1" fill="none" transform="rotate(-45 236 236)" />
      </svg>

      {/* Secondary decorative (top-left) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="absolute -top-8 -left-8 w-48 h-48 pointer-events-none select-none opacity-[0.06]"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="1.5" fill="none" />
        <ellipse cx="100" cy="70" rx="10" ry="22" stroke="white" strokeWidth="1" fill="none" />
        <ellipse cx="100" cy="130" rx="10" ry="22" stroke="white" strokeWidth="1" fill="none" />
        <ellipse cx="70" cy="100" rx="22" ry="10" stroke="white" strokeWidth="1" fill="none" />
        <ellipse cx="130" cy="100" rx="22" ry="10" stroke="white" strokeWidth="1" fill="none" />
      </svg>

      <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6"
          >
            {CTA_FINAL.headline}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-body text-xl text-white/80 leading-relaxed mb-10"
          >
            {CTA_FINAL.subtitle}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button
              href={PROFESSIONAL.whatsappUrl}
              variant="ghost-white"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base px-10 py-4"
            >
              {CTA_FINAL.ctaText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
