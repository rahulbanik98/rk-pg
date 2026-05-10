import { useState, useEffect, useRef } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer',
    company: 'Infosys, Pune',
    avatar: 'PS',
    color: '#0ea5e9',
    rating: 5,
    text: 'RK PG is hands down the best decision I made when I moved to Pune. The rooms are spotless, the food is amazing — exactly like home-cooked meals. I feel completely safe here, especially with 24/7 CCTV and the caring staff.',
    stay: 'Staying since Jan 2024',
    tag: 'Working Professional',
  },
  {
    name: 'Rahul Mehta',
    role: 'B.Tech Final Year',
    company: 'MIT-WPU, Pune',
    avatar: 'RM',
    color: '#8b5cf6',
    rating: 5,
    text: 'Perfect place for students! High-speed WiFi, quiet study hours, and very reasonable rent. The caretaker Uncle is super helpful and responsive. The location near Kalyani Nagar makes everything accessible.',
    stay: 'Staying since Aug 2023',
    tag: 'Student',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Data Analyst',
    company: 'TCS, Pune',
    avatar: 'SK',
    color: '#ec4899',
    rating: 5,
    text: 'As a girl staying alone in a new city, safety was my top concern. RK PG gave me a safe, friendly environment that I could call my own. The daily cleaning, attached bathroom, and AC are just bonuses — the community feeling is priceless.',
    stay: 'Staying since Mar 2024',
    tag: 'Working Professional',
  },
  {
    name: 'Arjun Patil',
    role: 'MBA Student',
    company: 'Symbiosis, Pune',
    avatar: 'AP',
    color: '#f59e0b',
    rating: 5,
    text: 'The double sharing room is incredibly spacious and comfortable. 3 meals a day, fast internet, and it\'s just 15 minutes from my college. I\'ve recommended RK PG to at least 5 of my friends — all of them love it!',
    stay: 'Staying since Jun 2023',
    tag: 'Student',
  },
  {
    name: 'Divya Nair',
    role: 'UI/UX Designer',
    company: 'Accenture, Pune',
    avatar: 'DN',
    color: '#10b981',
    rating: 5,
    text: 'The thing that impressed me most is how they genuinely care about residents. When I had a maintenance issue, it was fixed within hours. Clean, modern, and exactly what the listing shows. No hidden charges, great value for money.',
    stay: 'Staying since Nov 2023',
    tag: 'Working Professional',
  },
  {
    name: 'Vikram Singh',
    role: 'CA Intern',
    company: 'Deloitte, Pune',
    avatar: 'VS',
    color: '#06b6d4',
    rating: 5,
    text: 'Moved from Delhi and was worried about adjusting. But RK PG felt like home from day one. The food is authentic, the water and electricity never goes out, and parking for my bike is very convenient.',
    stay: 'Staying since Feb 2024',
    tag: 'Working Professional',
  },
]

const CARDS_VISIBLE = 3
const AUTO_PLAY_MS = 4500

function StarRating({ n }: { n: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < n ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent]   = useState(0)
  const [paused, setPaused]     = useState(false)
  const intervalRef             = useRef<ReturnType<typeof setInterval> | null>(null)
  const total                   = testimonials.length

  const goTo   = (i: number) => setCurrent((i + total) % total)
  const goPrev = () => goTo(current - 1)
  const goNext = () => goTo(current + 1)

  // Auto-play
  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % total), AUTO_PLAY_MS)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused, total])

  // Which indices to show (sliding window of 3)
  const visible = Array.from({ length: CARDS_VISIBLE }, (_, i) => (current + i) % total)

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

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className={styles.headerRow}>
          <div data-aos="fade-right">
            <div className="section-label">What Residents Say</div>
            <h2 className="section-title">Real Stories,<br />Real Smiles 😊</h2>
            <p className="section-sub">
              Don't just take our word for it — hear directly from the people who call RK PG home.
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

        {/* Carousel */}
        <div
          className={styles.carousel}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {visible.map((idx, pos) => {
            const t = testimonials[idx]
            return (
              <div
                key={`${idx}-${pos}`}
                className={`${styles.card} ${pos === 1 ? styles.cardCenter : styles.cardSide}`}
                onClick={() => pos !== 1 && goTo(idx)}
              >
                {/* Quote mark */}
                <div className={styles.quoteMark}>"</div>

                {/* Rating */}
                <StarRating n={t.rating} />

                {/* Text */}
                <p className={styles.reviewText}>{t.text}</p>

                {/* Tag */}
                <span className={styles.tag}>{t.tag}</span>

                {/* Reviewer */}
                <div className={styles.reviewer}>
                  <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}>
                    {t.avatar}
                  </div>
                  <div className={styles.reviewerInfo}>
                    <div className={styles.reviewerName}>{t.name}</div>
                    <div className={styles.reviewerRole}>{t.role} · {t.company}</div>
                    <div className={styles.stayDuration}>{t.stay}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Controls */}
        <div className={styles.controls} data-aos="fade-up" data-aos-delay="200">
          <button className={styles.navBtn} onClick={goPrev} aria-label="Previous review">‹</button>

          {/* Dots */}
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button className={styles.navBtn} onClick={goNext} aria-label="Next review">›</button>
        </div>

        {/* Google badge */}
        <div className={styles.googleBadge} data-aos="fade-up" data-aos-delay="250">
          <div className={styles.googleIcon}>G</div>
          <div>
            <div className={styles.googleTitle}>Rated 4.9 on Google</div>
            <div className={styles.googleStars}>★★★★★ <span>100+ reviews</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
