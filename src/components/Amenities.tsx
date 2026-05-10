import styles from './Amenities.module.css'

const amenities = [
  { icon: '📶', name: 'High-Speed WiFi',      desc: 'Unlimited internet, 24/7' },
  { icon: '🍱', name: '3-Time Meals',         desc: 'Breakfast, lunch & dinner daily (Sat & Sun)' },
  { icon: '👗', name: 'Washing Machine',      desc: 'Free laundry access' },
  { icon: '🔒', name: 'CCTV Security',        desc: '24/7 surveillance' },
  { icon: '🚗', name: 'Parking',              desc: 'Bike & car space available' },
  { icon: '🍳', name: 'Common Kitchen',       desc: 'Cook your own meals too' },
  { icon: '💧', name: '24/7 Water',           desc: 'Continuous water supply' },
  { icon: '⚡', name: '24/7 Electricity',     desc: 'Power backup available' },
  { icon: '🧹', name: 'Daily Cleaning',       desc: 'Housekeeping every morning' },
  { icon: '🛁', name: 'Attached Bathroom',    desc: 'Private bath per room' },
  { icon: '❄️', name: 'AC / Non-AC / Cooler', desc: 'Choose your comfort level' },
  { icon: '🏥', name: 'First Aid',            desc: 'Medical kit on premises' },
]

export default function Amenities() {
  return (
    <section id="amenities" className={styles.section}>
      <div className="container">
        <div className={styles.header} data-aos="fade-right">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Everything You Need,<br />Under One Roof</h2>
          <p className="section-sub">
            We believe a comfortable stay starts with the right facilities.
            Here's what every resident at RK PG enjoys.
          </p>
        </div>
        <div className={styles.grid}>
          {amenities.map((a, i) => (
            <div key={a.name} className={styles.card}
              data-aos="fade-up" data-aos-delay={`${(i % 4) * 70}`}>
              <div className={styles.iconWrap}>{a.icon}</div>
              <div className={styles.name}>{a.name}</div>
              <div className={styles.desc}>{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
