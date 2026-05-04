import type { Ref } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { METHOD } from '../../constants/content'
import { stagger, staggerItem, useScrollAnimation } from '../../hooks/useScrollAnimation'

export function Method() {
  const { ref: sectionRef, isInView } = useScrollAnimation()

  return (
    <section
      id="como-funciona"
      ref={sectionRef as Ref<HTMLElement>}
      className="py-14 md:py-24 bg-bg-section"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionTitle title={METHOD.title} subtitle={METHOD.subtitle} />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6 sm:grid-cols-3"
        >
          {METHOD.steps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="bg-bg-page rounded-2xl border border-ui-border p-6 md:p-8"
            >
              <span className="block font-heading text-4xl font-semibold text-primary mb-3 leading-none">
                {step.number}
              </span>
              <div className="w-6 h-0.5 bg-primary-light mb-4" />
              <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-fg-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
