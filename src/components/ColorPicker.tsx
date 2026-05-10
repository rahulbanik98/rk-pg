import { useState, useRef, useEffect } from 'react'
import { useTheme, COLOR_PRESETS } from '../ThemeContext'
import styles from './ColorPicker.module.css'

export default function ColorPicker() {
  const { preset, setPreset } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        className={styles.trigger}
        onClick={() => setOpen(o => !o)}
        aria-label="Colour theme picker"
        title="Change colour theme"
      >
        <span
          className={styles.dot}
          style={{ background: preset.accent }}
        />
        <span className={styles.triggerLabel}>Theme</span>
        <span className={`${styles.arrow} ${open ? styles.arrowOpen : ''}`}>▾</span>
      </button>

      {open && (
        <div className={styles.panel}>
          <div className={styles.panelTitle}>Choose a colour theme</div>
          <div className={styles.swatches}>
            {COLOR_PRESETS.map(p => (
              <button
                key={p.id}
                className={`${styles.swatch} ${preset.id === p.id ? styles.active : ''}`}
                style={{ background: p.accent }}
                onClick={() => { setPreset(p); setOpen(false) }}
                title={p.name}
                aria-label={p.name}
              >
                {preset.id === p.id && <span className={styles.check}>✓</span>}
              </button>
            ))}
          </div>
          <div className={styles.names}>
            {COLOR_PRESETS.map(p => (
              <span
                key={p.id}
                className={`${styles.name} ${preset.id === p.id ? styles.nameActive : ''}`}
                style={preset.id === p.id ? { color: p.accent } : {}}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
