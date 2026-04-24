import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { PROFESSIONAL, FOOTER } from '../../constants/content'
import logoFooter from '../../assets/logo-var4.png'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-10">
          {/* Brand column */}
          <div>
            <img
              src={logoFooter}
              alt={`${PROFESSIONAL.name} — ${PROFESSIONAL.title}`}
              className="h-16 w-auto object-contain mb-3 filter brightness-0 invert"
            />
            <p className="font-body text-sm text-white/60">{PROFESSIONAL.crp}</p>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-body text-xs font-700 text-white/40 uppercase tracking-widest mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href={PROFESSIONAL.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
                aria-label="WhatsApp"
              >
                <FaWhatsapp
                  size={18}
                  className="text-whatsapp shrink-0"
                  aria-hidden="true"
                />
                <span className="font-body text-sm group-hover:underline">
                  {PROFESSIONAL.phone}
                </span>
              </a>

              <a
                href={PROFESSIONAL.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
                aria-label="Instagram"
              >
                <FaInstagram
                  size={18}
                  className="text-white/70 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-body text-sm group-hover:underline">
                  {PROFESSIONAL.instagram}
                </span>
              </a>
            </div>
          </div>

          {/* Modality column */}
          <div>
            <h3 className="font-body text-xs font-700 text-white/40 uppercase tracking-widest mb-4">
              Atendimento
            </h3>
            <p className="font-body text-sm text-white/70">{PROFESSIONAL.modality}</p>
            <p className="font-body text-xs text-white/40 mt-4 leading-relaxed">
              Atendimento individual para adultos.<br />
              Sessões com duração de 50 minutos.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/30 text-center md:text-left">
            © {currentYear} {PROFESSIONAL.name} Psicóloga. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-white/20">
            {FOOTER.credits}
          </p>
        </div>
      </div>
    </footer>
  )
}
