import styles from './Footer.module.css'

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.mark}>RK PG</span>
              <div>
                <span className={styles.name}>Boys & Girls PG</span>
                <span className={styles.sub}>Kalyani Nagar · Pune</span>
              </div>
            </div>
            <p className={styles.desc}>
              Your home away from home in Kalyani Nagar, Pune. Safe, clean, and comfortable
              accommodation for students and working professionals.
            </p>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/rahul.banik.9469/" className={styles.social} target="_blank" rel="noreferrer" aria-label="Facebook">📘</a>
              <a href="https://www.instagram.com/rahulbanik5/" className={styles.social} target="_blank" rel="noreferrer" aria-label="Instagram">📸</a>
              <a href="https://www.linkedin.com/in/rahulbanik5/" className={styles.social} target="_blank" rel="noreferrer" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
              {[
                { id: 'amenities', label: 'Amenities' },
                { id: 'rooms', label: 'Rooms & Pricing' },
                { id: 'why', label: 'Why Choose Us' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'rules', label: 'House Rules' },
                { id: 'testimonials', label: 'Reviews' },
                { id: 'contact', label: 'Contact Us' },
              ].map(l => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className={styles.footerLink}>{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+919876543210">📞 +91 98765 43210</a></li>
              <li><a href="mailto:info@rkpg.in">✉️ info@rkpg.in</a></li>
              <li><a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">💬 WhatsApp Us</a></li>
              <li><a href="https://maps.app.goo.gl/HBbm9ky6p2aHHfeo7" target="_blank" rel="noreferrer">📍 Get Directions</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Rahul Banik, India. All rights reserved.</p>
          <div className={styles.bottomSocials}>
            <a href="https://www.linkedin.com/in/rahulbanik5/" target="_blank" rel="noreferrer" className={styles.socialLink}>
              LinkedIn
            </a>
            <span className={styles.bullet}>·</span>
            <a href="https://www.instagram.com/rahulbanik5/" target="_blank" rel="noreferrer" className={styles.socialLink}>
              Instagram
            </a>
            <span className={styles.bullet}>·</span>
            <a href="https://www.facebook.com/rahul.banik.9469/" target="_blank" rel="noreferrer" className={styles.socialLink}>
              Facebook
            </a>
          </div>
          <p className={styles.byline}>Safe · Clean · Comfortable</p>
        </div>
      </div>
    </footer>
  )
}
