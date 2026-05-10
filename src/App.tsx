import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider } from './ThemeContext'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Amenities from './components/Amenities'
import Rooms from './components/Rooms'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Rules from './components/Rules'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function AppInner() {
  useEffect(() => {
    AOS.init({ duration: 680, easing: 'ease-out-cubic', once: true, offset: 55 })
  }, [])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Amenities />
        <Rooms />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Rules />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
