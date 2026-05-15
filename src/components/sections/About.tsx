import type { Ref } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { SectionTitle } from '../ui/SectionTitle'
import { ABOUT, PROFESSIONAL } from '../../constants/content'
import { fadeInLeft, stagger, staggerItem, useScrollAnimation } from '../../hooks/useScrollAnimation'
import logoWatermark from '../../assets/logo-var3.png'
import deboraAbout from '../../assets/debora-about.png'

export function About() {
  const { ref: sectionRef, isInView } = useScrollAnimation()

  return (
    <section
      id="sobre"
      ref={sectionRef as Ref<HTMLElement>}
      className="relative py-14 md:py-24 bg-bg-warm overflow-hidden"
    >
      <img
        src={logoWatermark}
        alt=""
        aria-hidden="true"
        className="absolute -top-4 -right-8 w-56 md:w-72 h-auto opacity-25 pointer-events-none select-none"
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-sm mx-auto">
              <div className="absolute inset-0 rounded-2xl border border-ui-floral translate-x-3 translate-y-3" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={deboraAbout}
                  alt="Débora Dias — Psicóloga"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={staggerItem}>
              <SectionTitle eyebrow="Conheça a psicóloga" title={ABOUT.title} subtitle={ABOUT.subtitle} centered={false} />
            </motion.div>

            <div className="space-y-4">
              {ABOUT.paragraphs.map((paragraph, index) => (
                index === 1 ? (
                  <motion.blockquote
                    key={index}
                    variants={staggerItem}
                    className="pl-5 border-l-4 border-primary bg-bg-section rounded-r-xl py-4 pr-5 font-body text-base md:text-lg text-fg-muted leading-relaxed italic"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ) : (
                  <motion.p
                    key={index}
                    variants={staggerItem}
                    className="font-body text-base md:text-lg text-fg-muted leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                )
              ))}
            </div>

            <motion.div variants={staggerItem} className="mt-7">
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
