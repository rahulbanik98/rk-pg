import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import RippleBtn from './RippleBtn'
import styles from './Contact.module.css'

interface EnquiryFormData {
  name: string
  phone: string
  email: string
  roomType: string
  gender: string
  moveInDate: string
  message: string
}

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EnquiryFormData>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      roomType: '',
      gender: '',
      moveInDate: '',
      message: ''
    }
  })

  const onSubmit = async (data: EnquiryFormData) => {
    setErrorMsg(null)
    setLoading(true)

    // Get environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // If env variables are not set, fall back to simulation for local testing
    if (!serviceId || !templateId || !publicKey) {
      console.warn(
        'EmailJS credentials are not configured in your .env file.\n' +
        'Please define VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.\n' +
        'Simulating email sending...'
      )
      
      // Simulate API call
      setTimeout(() => {
        setLoading(false)
        setSent(true)
        reset()
      }, 1500)
      return
    }

    try {
      const templateParams = {
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: data.email.trim(),
        roomType: data.roomType || 'Not specified',
        gender: data.gender || 'Not specified',
        moveInDate: data.moveInDate || 'Not specified',
        message: data.message.trim() || 'No message provided'
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      if (response.status === 200) {
        setSent(true)
        reset()
      } else {
        throw new Error(`EmailJS responded with status: ${response.status}`)
      }
    } catch (err: any) {
      console.error('Failed to send email:', err)
      setErrorMsg(err.text || err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

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
                src="https://maps.google.com/maps?q=R.+K+PG+Kalyani+Nagar+Pune&output=embed"
                title="RK PG Location"
                allowFullScreen loading="lazy"
              />
            </div>
          </div>

          {/* Enquiry form */}
          <form className={styles.formCard} onSubmit={handleSubmit(onSubmit)} data-aos="fade-left" noValidate>
            <h3 className={styles.formTitle}>Send an Enquiry</h3>
            {sent ? (
              <div className={styles.success}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎉</div>
                <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Thank You!</div>
                <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.92rem', opacity: 0.9 }}>
                  Your enquiry has been sent. We'll contact you within 24 hours.
                </p>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={() => setSent(false)}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                {errorMsg && <div className={styles.error}>{errorMsg}</div>}
                
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name-input">Your Name *</label>
                    <input
                      id="name-input"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      {...register('name', { required: 'Please enter your name.' })}
                    />
                    {errors.name && <span className={styles.fieldError}>{errors.name.message}</span>}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone-input">Phone Number *</label>
                    <input
                      id="phone-input"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      {...register('phone', {
                        required: 'Please enter your phone number.',
                        pattern: {
                          value: /^[0-9+\s-]{8,15}$/,
                          message: 'Please enter a valid phone number.'
                        }
                      })}
                    />
                    {errors.phone && <span className={styles.fieldError}>{errors.phone.message}</span>}
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="email-input">Email Address *</label>
                  <input
                    id="email-input"
                    type="email"
                    placeholder="you@email.com"
                    {...register('email', {
                      required: 'Please enter your email address.',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Please enter a valid email address.'
                      }
                    })}
                  />
                  {errors.email && <span className={styles.fieldError}>{errors.email.message}</span>}
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="room-type-select">Room Type *</label>
                    <select
                      id="room-type-select"
                      {...register('roomType', { required: 'Please select a room type.' })}
                    >
                      <option value="">Select</option>
                      <option>Single Occupancy</option>
                      <option>Double Sharing</option>
                      <option>Triple Sharing</option>
                      <option>4-Person Sharing</option>
                    </select>
                    {errors.roomType && <span className={styles.fieldError}>{errors.roomType.message}</span>}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="gender-select">Gender *</label>
                    <select
                      id="gender-select"
                      {...register('gender', { required: 'Please select your gender.' })}
                    >
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    {errors.gender && <span className={styles.fieldError}>{errors.gender.message}</span>}
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="move-in-date">Expected Move-in Date *</label>
                  <input
                    id="move-in-date"
                    type="date"
                    {...register('moveInDate', { required: 'Please select a move-in date.' })}
                  />
                  {errors.moveInDate && <span className={styles.fieldError}>{errors.moveInDate.message}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="message-input">Message (optional)</label>
                  <textarea
                    id="message-input"
                    rows={3}
                    placeholder="Any questions or specific requirements?"
                    {...register('message')}
                  />
                </div>
                <RippleBtn
                  variant="primary"
                  type="submit"
                  disabled={loading}
                  style={{ width: '100%', borderRadius: '12px', padding: '0.9rem', fontSize: '0.95rem' }}
                >
                  {loading ? 'Submitting Enquiry...' : 'Submit Enquiry →'}
                </RippleBtn>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
