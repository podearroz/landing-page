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
        <SectionTitle title={BENEFITS.title} subtitle={BENEFITS.subtitle} />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BENEFITS.items.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group p-7 rounded-sm border border-ui-border bg-bg-page hover:shadow-lg hover:shadow-ui-border/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 w-12 h-12 rounded-full bg-bg-section flex items-center justify-center">
                  <Icon
                    size={24}
                    className="text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-fg-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
