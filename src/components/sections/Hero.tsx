import { motion } from 'framer-motion'
import { RiCheckLine } from 'react-icons/ri'
import { Button } from '../ui/Button'
import { HERO, PROFESSIONAL } from '../../constants/content'
import { fadeInUp, fadeInLeft, fadeInRight, stagger } from '../../hooks/useScrollAnimation'

export function Hero() {
  return (
    <section
      id="inicio"
      className="pt-28 md:pt-36 pb-20 md:pb-28 bg-bg-page overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            <motion.h1
              variants={fadeInLeft}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary leading-tight text-balance mb-6"
            >
              {HERO.headline}
            </motion.h1>

            <motion.p
              variants={fadeInLeft}
              className="font-body text-lg text-fg-muted leading-relaxed mb-8"
            >
              {HERO.subtitle}
            </motion.p>

            {/* Credentials */}
            <motion.ul variants={stagger} className="space-y-3 mb-10">
              {HERO.credentials.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeInUp}
                  className="flex items-start gap-3 font-body text-secondary"
                >
                  <RiCheckLine
                    className="text-primary mt-0.5 shrink-0"
                    size={20}
                    aria-hidden="true"
                  />
                  <span className="text-sm md:text-base leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <Button
                href={PROFESSIONAL.whatsappUrl}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base px-8 py-4"
              >
                {HERO.ctaText}
              </Button>
            </motion.div>
          </motion.div>

          {/* Photo column — placeholder elegante */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <ProfilePlaceholder size="large" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProfilePlaceholder({ size }: { size: 'large' | 'medium' }) {
  const dimension =
    size === 'large'
      ? 'w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96'
      : 'w-56 h-56 md:w-64 md:h-64'

  return (
    <div className={`relative ${dimension}`}>
      {/* Decorative ring */}
      <div className="absolute inset-0 rounded-full border-2 border-ui-floral translate-x-3 translate-y-3" />
      {/* Main container */}
      <div
        className={`relative w-full h-full rounded-full overflow-hidden border border-ui-border flex items-center justify-center`}
        style={{
          background: 'linear-gradient(135deg, #FAF7F4 0%, #F5EFE9 50%, #E8D5C4 100%)',
        }}
      >
        <div className="text-center select-none">
          <span
            className="block font-heading text-5xl md:text-6xl font-semibold text-primary-light"
            aria-hidden="true"
          >
            DD
          </span>
          <span className="block font-body text-xs text-fg-muted tracking-widest uppercase mt-1">
            Foto
          </span>
        </div>
      </div>
    </div>
  )
}

export { ProfilePlaceholder }
