import type { Ref } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { SectionTitle } from '../ui/SectionTitle'
import { ProfilePlaceholder } from './Hero'
import { ABOUT, PROFESSIONAL } from '../../constants/content'
import { fadeInLeft, stagger, staggerItem, useScrollAnimation } from '../../hooks/useScrollAnimation'
import logoWatermark from '../../assets/logo-var3.png'

export function About() {
  const { ref: sectionRef, isInView } = useScrollAnimation()

  return (
    <section
      id="sobre"
      ref={sectionRef as Ref<HTMLElement>}
      className="relative py-20 md:py-28 bg-bg-warm overflow-hidden"
    >
      {/* Decorative watermark — logo bege clarinho */}
      <img
        src={logoWatermark}
        alt=""
        aria-hidden="true"
        className="absolute -top-6 -right-10 w-72 h-auto opacity-30 pointer-events-none select-none"
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex justify-center"
          >
            <ProfilePlaceholder size="medium" />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={staggerItem}>
              <SectionTitle
                title={ABOUT.title}
                subtitle={ABOUT.subtitle}
                centered={false}
              />
            </motion.div>

            <div className="space-y-5">
              {ABOUT.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={staggerItem}
                  className="font-body text-fg-muted leading-relaxed text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div variants={staggerItem} className="mt-8">
              <Button
                href={PROFESSIONAL.whatsappUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ABOUT.ctaText}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
