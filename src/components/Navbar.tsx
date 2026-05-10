import { useState, useEffect } from 'react'
import { useTheme } from '../ThemeContext'
import ColorPicker from './ColorPicker'
import styles from './Navbar.module.css'

const links = [
  { id: 'amenities', label: 'Amenities' },
  { id: 'rooms',     label: 'Rooms'     },
  { id: 'why',       label: 'Why Us'    },
  { id: 'gallery',   label: 'Gallery'   },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'contact',   label: 'Contact'   },
]

export default function Navbar() {
  const { mode, toggleMode } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <button className={styles.logo} onClick={() => scrollTo('hero')} aria-label="Home">
          <span className={styles.mark}>RK PG</span>
          <div className={styles.logoText}>
            <span className={styles.logoName}>Boys & Girls PG</span>
            <span className={styles.logoSub}>Kalyani Nagar · Pune</span>
          </div>
        </button>

        {/* Desktop nav links */}
        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.id}>
              <button className={styles.link} onClick={() => scrollTo(l.id)}>{l.label}</button>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className={styles.actions}>
          {/* Colour picker — always visible in navbar */}
          <ColorPicker />

          {/* Dark/light toggle */}
          <button onClick={toggleMode} className={styles.themeBtn} aria-label="Toggle theme">
            {mode === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Contact CTA */}
          <button className={styles.cta} onClick={() => scrollTo('contact')}>
            Contact Now
          </button>

          {/* Hamburger */}
          <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            <span className={open ? styles.b1o : styles.b1} />
            <span className={open ? styles.b2o : styles.b2} />
            <span className={open ? styles.b3o : styles.b3} />
          </button>
        </div>

      </div>
    </nav>
  )
}
