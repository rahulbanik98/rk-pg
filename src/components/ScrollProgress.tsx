import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setPct(total > 0 ? (el.scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, zIndex: 9999,
      height: '3px', width: `${pct}%`,
      background: 'linear-gradient(90deg, var(--accent), var(--cyan))',
      transition: 'width 0.1s linear',
      boxShadow: '0 0 8px var(--accent-glow)',
      borderRadius: '0 2px 2px 0',
    }} />
  )
}
