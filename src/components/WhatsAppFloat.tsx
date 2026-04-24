import { FaWhatsapp } from 'react-icons/fa'
import { PROFESSIONAL } from '../constants/content'

export function WhatsAppFloat() {
  return (
    <a
      href={PROFESSIONAL.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar via WhatsApp"
      className="md:hidden fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-whatsapp text-white px-4 py-3 rounded-full shadow-lg hover:brightness-95 transition-all duration-200 animate-pulse"
    >
      <FaWhatsapp size={22} aria-hidden="true" />
      <span className="font-body text-sm font-bold hidden min-[360px]:inline">
        Agendar
      </span>
    </a>
  )
}
