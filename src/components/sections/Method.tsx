import type { Ref } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { METHOD } from '../../constants/content'
import { stagger, staggerItem, fadeInRight, useScrollAnimation } from '../../hooks/useScrollAnimation'

export function Method() {
  const { ref: sectionRef, isInView } = useScrollAnimation()

  return (
    <section
      id="como-funciona"
      ref={sectionRef as Ref<HTMLElement>}
      className="py-20 md:py-28 bg-bg-section"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionTitle title={METHOD.title} subtitle={METHOD.subtitle} />

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Steps */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-10"
          >
            {METHOD.steps.map((step) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="flex gap-6"
              >
                {/* Number badge */}
                <div className="shrink-0">
                  <span className="block font-heading text-4xl font-semibold text-primary leading-none">
                    {step.number}
                  </span>
                  <div className="w-6 h-0.5 bg-primary-light mt-1" />
                </div>
                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-heading text-2xl font-semibold text-secondary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-fg-muted leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="hidden md:flex justify-center"
          >
            <div className="w-72 h-80 rounded-sm bg-gradient-to-br from-bg-warm to-ui-floral border border-ui-border flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full opacity-20"
                  aria-hidden="true"
                >
                  <circle cx="100" cy="80" r="30" stroke="#963C1E" strokeWidth="1.5" fill="none" />
                  <path d="M100 110 Q80 140 60 160 Q100 150 140 160 Q120 140 100 110Z" stroke="#963C1E" strokeWidth="1.5" fill="none" />
                  <path d="M70 80 Q50 60 40 40" stroke="#963C1E" strokeWidth="1" fill="none" strokeLinecap="round" />
                  <path d="M130 80 Q150 60 160 40" stroke="#963C1E" strokeWidth="1" fill="none" strokeLinecap="round" />
                  <ellipse cx="40" cy="38" rx="10" ry="6" fill="#963C1E" transform="rotate(-20 40 38)" />
                  <ellipse cx="160" cy="38" rx="10" ry="6" fill="#963C1E" transform="rotate(20 160 38)" />
                </svg>
              </div>
              <p className="relative font-body text-xs text-fg-muted tracking-widest uppercase text-center px-4">
                Ambiente acolhedor<br />e seguro
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
