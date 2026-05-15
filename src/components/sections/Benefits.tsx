import type { Ref } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { BENEFITS } from '../../constants/content'
import { stagger, staggerItem, useScrollAnimation } from '../../hooks/useScrollAnimation'

export function Benefits() {
  const { ref: sectionRef, isInView } = useScrollAnimation()

  return (
    <section
      id="beneficios"
      ref={sectionRef as Ref<HTMLElement>}
      className="py-20 md:py-28 bg-bg-page"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionTitle eyebrow="Por que a terapia?" title={BENEFITS.title} subtitle={BENEFITS.subtitle} />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9"
        >
          {BENEFITS.items.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="flex gap-4 pl-5 border-l-2 border-primary"
              >
                <Icon size={26} className="text-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-2xl font-bold text-secondary mb-1.5">
                    {item.title}
                  </h3>
                  <p className="font-body text-base text-fg-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
