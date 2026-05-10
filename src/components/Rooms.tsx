import RippleBtn from './RippleBtn'
import styles from './Rooms.module.css'

const rooms = [
  {
    type: 'Single Occupancy', tagline: 'Your private sanctuary',
    emoji: '🛏️', gradient: 'linear-gradient(135deg,#0ea5e9,#06b6d4)',
    features: ['Private attached bathroom','Choice of AC / Non-AC / Air Cooler','Study table & wardrobe','24/7 water & electricity','Daily housekeeping','High-speed WiFi'],
    popular: false,
  },
  {
    type: 'Double Sharing', tagline: 'Comfort with a companion',
    emoji: '🛏️🛏️', gradient: 'linear-gradient(135deg,#0284c7,#0ea5e9)',
    features: ['Shared with 1 person','Attached bathroom','AC / Non-AC / Air Cooler','2 study tables & wardrobes','Daily housekeeping','High-speed WiFi'],
    popular: true,
  },
  {
    type: 'Triple Sharing', tagline: 'Budget-friendly & social',
    emoji: '🛏️🛏️🛏️', gradient: 'linear-gradient(135deg,#0369a1,#0284c7)',
    features: ['Shared with 2 people','Attached bathroom','AC / Non-AC / Air Cooler','Study tables & wardrobes','Daily housekeeping','High-speed WiFi'],
    popular: false,
  },
  {
    type: '4-Person Sharing', tagline: 'Most affordable option',
    emoji: '🏘️', gradient: 'linear-gradient(135deg,#075985,#0369a1)',
    features: ['Shared with 3 people','Attached bathroom','Air Cooler','Storage & wardrobes','Daily housekeeping','High-speed WiFi'],
    popular: false,
  },
]

export default function Rooms() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="rooms" className={styles.section}>
      <div className="container">
        <div className={styles.header} data-aos="fade-right">
          <div className="section-label">Accommodation</div>
          <h2 className="section-title">Choose Your Perfect Room</h2>
          <p className="section-sub">
            All rooms include attached bath, AC/Non-AC/Cooler options, and daily cleaning.
            Pricing is flexible — enquire for the best deal.
          </p>
        </div>
        <div className={styles.grid}>
          {rooms.map((r, i) => (
            <div key={r.type}
              className={`${styles.card} ${r.popular ? styles.featured : ''}`}
              data-aos="fade-up" data-aos-delay={`${i * 90}`}>
              {r.popular && <div className={styles.badge}>⭐ Most Popular</div>}
              <div className={styles.imgWrap} style={{ background: r.gradient }}>
                <span className={styles.roomEmoji}>{r.emoji}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.roomType}>{r.type}</h3>
                <p className={styles.roomTag}>{r.tagline}</p>
                <ul className={styles.features}>
                  {r.features.map(f => (
                    <li key={f}><span className={styles.check}>✓</span>{f}</li>
                  ))}
                </ul>
                <div className={styles.priceRow}>
                  <span className={styles.price}>Flexible</span>
                  <span className={styles.priceNote}>/ month</span>
                </div>
                <RippleBtn variant="ghost" style={{ width: '100%', borderRadius: '10px', padding: '0.65rem' }}
                  onClick={() => scrollTo('contact')}>
                  Enquire for Pricing
                </RippleBtn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
