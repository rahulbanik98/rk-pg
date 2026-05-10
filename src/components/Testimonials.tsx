import { useEffect } from 'react'
import styles from './Testimonials.module.css'

export default function Testimonials() {

  // =========================
  // Elfsight Script Loader
  // =========================
  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://elfsightcdn.com/platform.js'
      script.async = true

      document.body.appendChild(script)
    }
  }, [])

  const stats = [
    { num: '100+', label: 'Happy Residents' },
    { num: '4.9/5', label: 'Average Rating' },
    { num: '98%', label: 'Would Recommend' },
  ]

  return (
    <section id="testimonials" className={styles.section}>
      {/* Background orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div
        className="container"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <div className={styles.headerRow}>
          <div data-aos="fade-right">
            <div className="section-label">What Residents Say</div>

            <h2 className="section-title">
              Real Stories,
              <br />
              Real Smiles 😊
            </h2>

            <p className="section-sub">
              Don't just take our word for it — hear directly from the people
              who call RK PG home.
            </p>
          </div>

          {/* Stats */}
          <div className={styles.statsRow} data-aos="fade-left">
            {stats.map(s => (
              <div key={s.label} className={styles.statBox}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================= */}
        {/* Elfsight Google Reviews */}
        {/* ========================= */}

        <div
          className={styles.googleReviewsWrapper}
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div
            className="elfsight-app-ea440941-ba5d-4385-884a-b11d2e3e8fcc"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  )
}