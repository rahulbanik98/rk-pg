import styles from './WhyUs.module.css'

type Landmark = { icon: string; text: string }
interface Reason {
  icon: string; title: string; desc: string;
  highlight?: boolean; landmarks?: Landmark[]
}

const reasons: Reason[] = [
  { icon: '🛡️', title: 'Safe & Secure', desc: 'CCTV surveillance, secure entry, and responsible caretakers ensure your safety round the clock, every day.' },
  {
    icon: '📍', title: 'Prime Location',
    desc: 'Located in Kalyani Nagar, Wadgaon Sheri — close to IT hubs, colleges, hospitals, and public transport.',
    highlight: true,
    landmarks: [
      { icon: '💼', text: '15 min from Eon IT Park' },
      { icon: '✈️', text: '15 min from Pune Airport' },
      { icon: '🚇', text: '5 min from Kalyani Nagar Metro' },
    ],
  },
  { icon: '🍽️', title: 'Home-Cooked Meals', desc: 'Fresh, hygienic, and tasty meals served three times a day — no more worrying about eating right.' },
  { icon: '✨', title: 'Spotless Cleanliness', desc: 'Daily housekeeping for every room and common area. We maintain hygiene standards that feel like home.' },
  { icon: '💰', title: 'Flexible Pricing', desc: 'Transparent rent plans with no hidden charges. We work with your budget to find the best fit.' },
  { icon: '👨‍👩‍👧', title: 'Family Atmosphere', desc: 'Our caretakers treat every resident with warmth and respect. Feel supported, never alone.' },
  { icon: '⚡', title: 'Zero Downtime', desc: '24/7 electricity with backup and continuous water supply — no disruptions to your routine, ever.' },
  { icon: '🎓', title: 'Student & Pro Friendly', desc: 'Quiet study hours, fast WiFi, and a focused environment — ideal for students and working professionals.' },
  { icon: '🌿', title: 'Peaceful Environment', desc: 'A calm, well-managed space away from the city chaos — perfect to recharge after a long day.' },
]

export default function WhyUs() {
  return (
    <section id="why" className={styles.section}>
      <div className={styles.bg} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.header} data-aos="fade-right">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Why RK PG</div>
          <h2 className="section-title" style={{ color: '#fff' }}>
            More Than a Room —<br />A Place You'll Call Home
          </h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We go beyond four walls. Here's why hundreds choose RK PG.
          </p>
        </div>
        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <div key={r.title}
              className={`${styles.card} ${r.highlight ? styles.highlight : ''}`}
              data-aos="fade-up" data-aos-delay={`${(i % 3) * 90}`}>
              <div className={styles.iconBox}>{r.icon}</div>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
              {r.landmarks && (
                <div className={styles.landmarks}>
                  {r.landmarks.map(l => (
                    <div key={l.text} className={styles.landmark}>
                      <span>{l.icon}</span><span>{l.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
