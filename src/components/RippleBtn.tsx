import { useRef, type ReactNode, type ButtonHTMLAttributes } from 'react'
import styles from './RippleBtn.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
}

export default function RippleBtn({ children, className = '', variant = 'primary', onClick, ...rest }: Props) {
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current
    if (!btn) return

    // Remove old ripples
    const old = btn.querySelector(`.${styles.ripple}`)
    if (old) old.remove()

    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top  - size / 2

    const ripple = document.createElement('span')
    ripple.className = styles.ripple
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`
    btn.appendChild(ripple)

    // scale-press gesture
    btn.style.transform = 'scale(0.96)'
    setTimeout(() => { btn.style.transform = '' }, 150)

    setTimeout(() => ripple.remove(), 600)
    onClick?.(e)
  }

  return (
    <button
      ref={btnRef}
      className={`${styles.btn} ${styles[variant]} ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  )
}
