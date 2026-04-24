import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { PROFESSIONAL } from '../../constants/content'
import logoPng from '../../assets/logo.png'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-bg-page border-b border-ui-border transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" aria-label="Voltar ao início">
          <img
            src={logoPng}
            alt={`${PROFESSIONAL.name} — ${PROFESSIONAL.title}`}
            className="h-12 md:h-14 w-auto object-contain"
          />
        </a>

        {/* CTA */}
        <Button
          href={PROFESSIONAL.whatsappUrl}
          variant="primary"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:text-sm"
        >
          Agendar consulta
        </Button>
      </div>
    </header>
  )
}
