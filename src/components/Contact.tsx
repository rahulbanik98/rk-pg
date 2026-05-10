import { useState } from 'react'
import RippleBtn from './RippleBtn'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className={styles.section}>
      <div className="container">

        {/* LEFT-ALIGNED header */}
        <div className={styles.header} data-aos="fade-right">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Ready to Move In?</h2>
          <p className="section-sub">
            Reach out for availability, pricing, or to schedule a visit. We'd love to show you around!
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact info + map */}
          <div data-aos="fade-right">
            {[
              { icon: '📍', label: 'Address', val: 'Holy Cross Road, Trimbakeshwar Society, Sr. Kalyani Nagar, Wadgaon Sheri Ext., Pune – 411014' },
              { icon: '📞', label: 'Phone', val: '+91 9527954346', href: 'tel:+919527954346' },
              { icon: '✉️', label: 'Email', val: 'info@rkpg.in', href: 'mailto:info@rkpg.in' },
              { icon: '💬', label: 'WhatsApp', val: 'Chat on WhatsApp', href: 'https://wa.me/919527954346' },
            ].map(c => (
              <div key={c.label} className={styles.cItem}>
                <span className={styles.cIcon}>{c.icon}</span>
                <div>
                  <div className={styles.cLabel}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} className={styles.cLink} target={c.href.startsWith('https') ? '_blank' : undefined} rel="noreferrer">{c.val}</a>
                    : <div className={styles.cVal}>{c.val}</div>
                  }
                </div>
              </div>
            ))}
            <div className={styles.mapWrap}>
              <iframe
                src="https://maps.google.com/maps?q=Kalyani+Nagar+Wadgaon+Sheri+Pune+411014&output=embed"
                title="RK PG Location"
                allowFullScreen loading="lazy"
              />
            </div>
          </div>

          {/* Enquiry form */}
          <div className={styles.formCard} data-aos="fade-left">
            <h3 className={styles.formTitle}>Send an Enquiry</h3>
            {sent ? (
              <div className={styles.success}>
                🎉 Thank you! We'll contact you within 24 hours.
              </div>
            ) : (
              <>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Your Name</label>
                    <input type="text" placeholder="e.g. Rahul Sharma" />
                  </div>
                  <div className={styles.field}>
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Email Address</label>
                  <input type="email" placeholder="you@email.com" />
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Room Type</label>
                    <select>
                      <option value="">Select</option>
                      <option>Single Occupancy</option>
                      <option>Double Sharing</option>
                      <option>Triple Sharing</option>
                      <option>4-Person Sharing</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>Gender</label>
                    <select>
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Expected Move-in Date</label>
                  <input type="date" />
                </div>
                <div className={styles.field}>
                  <label>Message (optional)</label>
                  <textarea rows={3} placeholder="Any questions or specific requirements?" />
                </div>
                <RippleBtn
                  variant="primary"
                  style={{ width: '100%', borderRadius: '12px', padding: '0.9rem', fontSize: '0.95rem' }}
                  onClick={() => setSent(true)}
                >
                  Submit Enquiry →
                </RippleBtn>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
