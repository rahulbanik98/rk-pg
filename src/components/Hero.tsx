import RippleBtn from './RippleBtn'
import styles from './Hero.module.css'

const landmarks = [
  { icon: '💼', text: '15 min from Eon IT Park' },
  { icon: '✈️', text: '15 min from Pune Airport' },
  { icon: '🚇', text: '5 min from Kalyani Nagar Metro' },
]

const stats = [
  { num: '100+', lbl: 'Happy Residents' },
  { num: '5 ★', lbl: 'Google Rating' },
  { num: '24/7', lbl: 'Security' },
  { num: '3×', lbl: 'Meals Daily' },
]

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bannerWrap}>
        <img
          // src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1600&q=80"
          src="https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778401900/home_vqhv9a.png"
          alt="RK PG Hostel"
          className={styles.bannerImg}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`${styles.content} container`}>
        <div className={styles.badge} data-aos="fade-right" data-aos-delay="100">
          <span className={styles.pulse} />
          🏠 Pune's Most Trusted PG — Kalyani Nagar
        </div>

        <h1 className={styles.title} data-aos="fade-up" data-aos-delay="200">
          Your Home,<br />
          <em className={styles.em}>Away From Home.</em>
        </h1>

        <p className={styles.tagline} data-aos="fade-up" data-aos-delay="280">
          Safe, clean &amp; comfortable PG for girls and boys in Kalyani Nagar,
          Pune — where every resident is treated like family.
        </p>

        <div className={styles.landmarks} data-aos="fade-up" data-aos-delay="360">
          {landmarks.map(l => (
            <div key={l.text} className={styles.landmark}>
              <span className={styles.lIcon}>{l.icon}</span>
              <span>{l.text}</span>
            </div>
          ))}
        </div>

        <div className={styles.actions} data-aos="fade-up" data-aos-delay="440">
          <RippleBtn variant="primary" onClick={() => scrollTo('rooms')}>
            Explore Rooms
          </RippleBtn>
          <RippleBtn variant="outline" onClick={() => scrollTo('contact')}>
            Contact Now
          </RippleBtn>
        </div>

        <div className={styles.stats} data-aos="fade-up" data-aos-delay="520">
          {stats.map(s => (
            <div key={s.lbl} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLbl}>{s.lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
