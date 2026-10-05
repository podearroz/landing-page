import { useEffect, useState } from 'react'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
import { Button } from '../ui/Button'
import { PROFESSIONAL } from '../../constants/content'
import logoPng from '../../assets/logo.png'

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

        {/* Nav — desktop */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-fg-muted hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
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

          {/* Hamburger — mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-secondary"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-ui-border bg-bg-page px-5 pb-4" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-body text-sm text-fg-muted hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
