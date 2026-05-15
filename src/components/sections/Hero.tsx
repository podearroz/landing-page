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
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-none mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-2xl border border-ui-floral translate-x-3 translate-y-3" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={deboraHero}
                  alt="Débora Dias — Psicóloga"
                  className="w-full h-full object-cover object-top"
                />
              </div>
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
              className="font-body text-sm font-bold text-primary uppercase tracking-widest mb-4"
            >
              Psicóloga · TCC · Online
            </motion.p>

            <motion.h1
              variants={fadeInLeft}
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-secondary leading-[1.05] text-balance mb-4"
            >
              {HERO.headline}
            </motion.h1>

            <motion.p
              variants={fadeInLeft}
              className="font-heading text-2xl sm:text-3xl text-primary italic font-normal mb-6"
            >
              {HERO.subheadline}
            </motion.p>

            <motion.p
              variants={fadeInLeft}
              className="font-body text-base text-fg-muted leading-relaxed mb-7"
            >
              {HERO.subtitle}
            </motion.p>

            <motion.div variants={stagger} className="flex flex-wrap gap-2 mb-8">
              {HERO.credentials.map((item) => (
                <motion.span
                  key={item}
                  variants={fadeInUp}
                  className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-secondary bg-bg-warm border border-ui-border rounded-full px-4 py-1.5"
                >
                  <RiCheckLine className="text-primary shrink-0" size={13} aria-hidden="true" />
                  {item}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-start gap-3">
              <Button
                href={PROFESSIONAL.whatsappUrl}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {HERO.ctaText}
              </Button>
              <p className="font-body text-sm text-fg-subtle">
                Atendimento 100% online · Resposta rápida pelo WhatsApp
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
