import { motion } from 'framer-motion'
import { RiCheckLine } from 'react-icons/ri'
import { Button } from '../ui/Button'
import { HERO, PROFESSIONAL } from '../../constants/content'
import { fadeInUp, fadeInLeft, fadeInRight, stagger } from '../../hooks/useScrollAnimation'

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
            <ProfilePlaceholder />
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

export function ProfilePlaceholder({ size = 'large' }: { size?: 'large' | 'medium' }) {
  const dim =
    size === 'large'
      ? 'w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80'
      : 'w-48 h-48 sm:w-56 sm:h-56'

  return (
    <div className={`relative ${dim}`}>
      <div className="absolute inset-0 rounded-full border border-ui-floral translate-x-2.5 translate-y-2.5" />
      <div
        className="relative w-full h-full rounded-full border border-ui-border flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #FAF7F4 0%, #F5EFE9 60%, #E8D5C4 100%)' }}
      >
        <div className="text-center select-none">
          <span className="block font-heading text-5xl font-semibold text-primary-light" aria-hidden="true">
            DD
          </span>
          <span className="block font-body text-[10px] text-fg-muted tracking-widest uppercase mt-1">
            Foto
          </span>
        </div>
      </div>
    </div>
  )
}
