import type { Ref } from 'react'
import { motion } from 'framer-motion'
import { RiStarFill, RiDoubleQuotesL } from 'react-icons/ri'
import { SectionTitle } from '../ui/SectionTitle'
import { TESTIMONIALS } from '../../constants/content'
import { stagger, staggerItem, useScrollAnimation } from '../../hooks/useScrollAnimation'

export function Testimonials() {
  const { ref: sectionRef, isInView } = useScrollAnimation()

  return (
    <section
      id="depoimentos"
      ref={sectionRef as Ref<HTMLElement>}
      className="py-14 md:py-24 bg-bg-warm"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionTitle title={TESTIMONIALS.title} subtitle={TESTIMONIALS.subtitle} />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-5 sm:grid-cols-3"
        >
          {TESTIMONIALS.items.map((item) => (
            <motion.div
              key={item.author}
              variants={staggerItem}
              className="bg-bg-page border border-ui-border rounded-sm p-6 flex flex-col gap-4 hover:shadow-md hover:shadow-ui-border/50 transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label={`${item.stars} estrelas`}>
                {Array.from({ length: item.stars }).map((_, i) => (
                  <RiStarFill key={i} size={13} className="text-primary" aria-hidden="true" />
                ))}
              </div>

              {/* Quote */}
              <div className="flex-1">
                <RiDoubleQuotesL size={20} className="text-ui-floral mb-2" aria-hidden="true" />
                <blockquote className="font-body text-sm text-fg-muted leading-relaxed">
                  {item.quote}
                </blockquote>
              </div>

              {/* Author */}
              <div className="border-t border-ui-border pt-3">
                <p className="font-body font-bold text-sm text-secondary">{item.author}</p>
                <p className="font-body text-xs text-fg-subtle">{item.context}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center font-body text-xs text-fg-subtle mt-8">
          * Depoimentos anonimizados com autorização dos pacientes.
        </p>
      </div>
    </section>
  )
}
