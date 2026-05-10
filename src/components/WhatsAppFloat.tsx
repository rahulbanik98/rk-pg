import styles from './WhatsAppFloat.module.css'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919527954346"
      target="_blank"
      rel="noreferrer"
      className={styles.btn}
      aria-label="Chat on WhatsApp"
    >
      💬
      <span className={styles.tooltip}>Chat on WhatsApp</span>
    </a>
  )
}
