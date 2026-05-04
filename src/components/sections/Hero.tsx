import { motion } from 'framer-motion'
import { RiCheckLine } from 'react-icons/ri'
import { Button } from '../ui/Button'
import { HERO, PROFESSIONAL } from '../../constants/content'
import { fadeInUp, fadeInLeft, fadeInRight, stagger } from '../../hooks/useScrollAnimation'
import deboraHero from '../../assets/debora-hero.png'

export function Hero() {
  return (
    <section
      id="inicio"
      className="pt-24 pb-14 md:pt-32 md:pb-20 bg-bg-page overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo — first on mobile */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl border border-ui-floral translate-x-2.5 translate-y-2.5" />
              <img
                src={deboraHero}
                alt="Débora Dias — Psicóloga"
                className="relative w-56 sm:w-64 md:w-80 rounded-2xl object-cover shadow-md"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            <motion.p
              variants={fadeInLeft}
              className="font-body text-xs font-bold text-primary uppercase tracking-widest mb-3"
            >
              Psicóloga · TCC · Online
            </motion.p>

            <motion.h1
              variants={fadeInLeft}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary leading-tight text-balance mb-2"
            >
              {HERO.headline}
            </motion.h1>

            <motion.p
              variants={fadeInLeft}
              className="font-heading text-xl sm:text-2xl text-primary-light font-normal mb-5"
            >
              {HERO.subheadline}
            </motion.p>

            <motion.p
              variants={fadeInLeft}
              className="font-body text-sm text-fg-muted leading-relaxed mb-7"
            >
              {HERO.subtitle}
            </motion.p>

            <motion.ul variants={stagger} className="space-y-2 mb-8">
              {HERO.credentials.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeInUp}
                  className="flex items-center gap-2.5 font-body text-sm text-secondary"
                >
                  <RiCheckLine
                    className="text-primary shrink-0"
                    size={16}
                    aria-hidden="true"
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <Button
                href={PROFESSIONAL.whatsappUrl}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {HERO.ctaText}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
