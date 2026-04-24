import { HelmetProvider } from 'react-helmet-async'
import { Header } from './components/sections/Header'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Benefits } from './components/sections/Benefits'
import { Method } from './components/sections/Method'
import { Testimonials } from './components/sections/Testimonials'
import { FAQ } from './components/sections/FAQ'
import { CtaFinal } from './components/sections/CtaFinal'
import { Footer } from './components/sections/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-bg-page">
        <Header />
        <main>
          <Hero />
          <About />
          <Benefits />
          <Method />
          <Testimonials />
          <FAQ />
          <CtaFinal />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </HelmetProvider>
  )
}
