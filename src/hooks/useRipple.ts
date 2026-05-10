import { useCallback, useRef } from 'react'

export function useRipple() {
  const hostRef = useRef<HTMLElement | null>(null)

  const trigger = useCallback((e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    const ripple = document.createElement('span')
    ripple.className = 'ripple-circle'
    ripple.style.cssText = `
      width:${size}px;height:${size}px;
      left:${x}px;top:${y}px;
    `
    el.appendChild(ripple)
    ripple.addEventListener('animationend', () => ripple.remove())
  }, [])

  return { ref: hostRef, trigger }
}
