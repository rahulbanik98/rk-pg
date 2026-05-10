import styles from './Rules.module.css'

const rules = [
  { icon: '🕙', text: "Entry timings strictly followed for everyone's safety" },
  { icon: '🚭', text: 'Strictly no smoking or alcohol on premises' },
  { icon: '🔕', text: 'Quiet hours maintained after 10:30 PM' },
  { icon: '🧹', text: 'Keep your room and shared spaces clean' },
  { icon: '🔐', text: 'Report any issues to the caretaker promptly' },
  { icon: '💡', text: 'Save electricity — switch off when not in use' },
  { icon: '🤝', text: 'Respect fellow residents at all times' },
]

const schedule = [
  { label: '🌅 Breakfast', time: '7:30 AM – 9:30 AM' },
  { label: '🍛 Lunch',     time: '12:30 PM – 2:30 PM' },
  { label: '🌙 Dinner',    time: '7:30 PM – 9:30 PM' },
  { label: '🚪 Gate Open', time: '24*7' },
  { label: '🧹 Cleaning',  time: '9:00 AM – 12:00 PM' },
  { label: '📞 Office',    time: '24*7' },
]

export default function Rules() {
  return (
    <section id="rules" className={styles.section}>
      <div className="container">
        <div className={styles.topHeader} data-aos="fade-right">
          <div className="section-label">House Rules</div>
          <h2 className="section-title">Our Policies</h2>
          <p className="section-sub">We maintain a respectful and peaceful environment for all residents.</p>
        </div>
        <div className={styles.grid}>
          <ul className={styles.rulesList} data-aos="fade-right">
            {rules.map(r => (
              <li key={r.text} className={styles.ruleItem}>
                <span className={styles.ruleIcon}>{r.icon}</span>
                <span>{r.text}</span>
              </li>
            ))}
          </ul>
          <div data-aos="fade-left">
            <div className={styles.scheduleCard}>
              <h3 className={styles.scheduleTitle}>🕐 Daily Schedule</h3>
              {schedule.map(s => (
                <div key={s.label} className={styles.row}>
                  <span className={styles.rowLabel}>{s.label}</span>
                  <span className={styles.rowTime}>{s.time}</span>
                </div>
              ))}
            </div>
            <div className={styles.note}>
              <strong>📌 Note:</strong> All rules ensure a safe, clean, and peaceful environment.
              We treat all residents as family and expect the same respect in return.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
