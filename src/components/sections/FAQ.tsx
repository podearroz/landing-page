import { useState } from 'react'
import type { Ref } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiAddLine, RiSubtractLine } from 'react-icons/ri'
import { SectionTitle } from '../ui/SectionTitle'
import { FAQ as FAQ_DATA } from '../../constants/content'
import { stagger, staggerItem, useScrollAnimation } from '../../hooks/useScrollAnimation'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const { ref: sectionRef, isInView } = useScrollAnimation()

  return (
    <section
      id="faq"
      ref={sectionRef as Ref<HTMLElement>}
      className="py-14 md:py-24 bg-bg-page"
    >
      <div className="max-w-2xl mx-auto px-5 md:px-8">
        <SectionTitle title={FAQ_DATA.title} />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="border-t border-ui-border divide-y divide-ui-border"
        >
          {FAQ_DATA.items.map((item, index) => (
            <motion.div key={index} variants={staggerItem}>
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
                aria-expanded={open === index}
              >
                <span className="font-body text-sm font-bold text-secondary group-hover:text-primary transition-colors duration-150">
                  {item.question}
                </span>
                <span className="shrink-0 text-primary" aria-hidden="true">
                  {open === index
                    ? <RiSubtractLine size={18} />
                    : <RiAddLine size={18} />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-sm text-fg-muted leading-relaxed pb-5 pr-8">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
