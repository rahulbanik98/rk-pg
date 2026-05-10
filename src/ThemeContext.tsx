import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type ThemeMode = 'light' | 'dark'

export interface ColorPreset {
  id: string
  name: string
  label: string
  // light mode
  accent: string
  accent2: string
  cyan: string
  bg: string
  bg2: string
  bg3: string
  border: string
  navBg: string
  whyBg: string
  // dark mode overrides
  dAccent: string
  dAccent2: string
  dCyan: string
  dBg: string
  dBg2: string
  dBg3: string
  dBorder: string
  dNavBg: string
  dWhyBg: string
}

export const COLOR_PRESETS: ColorPreset[] = [
  {
    id: 'sky',
    name: 'Sky Blue',
    label: '🩵',
    accent: '#0ea5e9', accent2: '#0284c7', cyan: '#06b6d4',
    bg: '#f0f9ff', bg2: '#e0f2fe', bg3: '#bae6fd', border: '#bae6fd',
    navBg: 'rgba(240,249,255,0.93)',
    whyBg: 'linear-gradient(135deg,#0c2a47 0%,#0a3d62 55%,#0e4d7a 100%)',
    dAccent: '#38bdf8', dAccent2: '#7dd3fc', dCyan: '#22d3ee',
    dBg: '#020f1c', dBg2: '#041525', dBg3: '#062038', dBorder: '#0e3a5c',
    dNavBg: 'rgba(2,15,28,0.93)',
    dWhyBg: 'linear-gradient(135deg,#020f1c 0%,#041525 55%,#062038 100%)',
  },
  {
    id: 'emerald',
    name: 'Emerald',
    label: '💚',
    accent: '#10b981', accent2: '#059669', cyan: '#34d399',
    bg: '#f0fdf4', bg2: '#dcfce7', bg3: '#bbf7d0', border: '#bbf7d0',
    navBg: 'rgba(240,253,244,0.93)',
    whyBg: 'linear-gradient(135deg,#052e16 0%,#064e3b 55%,#065f46 100%)',
    dAccent: '#34d399', dAccent2: '#6ee7b7', dCyan: '#6ee7b7',
    dBg: '#021208', dBg2: '#041c0f', dBg3: '#06291a', dBorder: '#064e3b',
    dNavBg: 'rgba(2,18,8,0.93)',
    dWhyBg: 'linear-gradient(135deg,#021208 0%,#041c0f 55%,#06291a 100%)',
  },
  {
    id: 'violet',
    name: 'Violet',
    label: '💜',
    accent: '#8b5cf6', accent2: '#7c3aed', cyan: '#a78bfa',
    bg: '#f5f3ff', bg2: '#ede9fe', bg3: '#ddd6fe', border: '#ddd6fe',
    navBg: 'rgba(245,243,255,0.93)',
    whyBg: 'linear-gradient(135deg,#1e0a3c 0%,#2e1065 55%,#3b0764 100%)',
    dAccent: '#a78bfa', dAccent2: '#c4b5fd', dCyan: '#c4b5fd',
    dBg: '#0d0520', dBg2: '#130730', dBg3: '#1a0840', dBorder: '#3b0764',
    dNavBg: 'rgba(13,5,32,0.93)',
    dWhyBg: 'linear-gradient(135deg,#0d0520 0%,#130730 55%,#1a0840 100%)',
  },
  {
    id: 'rose',
    name: 'Rose',
    label: '🌹',
    accent: '#f43f5e', accent2: '#e11d48', cyan: '#fb7185',
    bg: '#fff1f2', bg2: '#ffe4e6', bg3: '#fecdd3', border: '#fecdd3',
    navBg: 'rgba(255,241,242,0.93)',
    whyBg: 'linear-gradient(135deg,#3b0016 0%,#4c0519 55%,#600824 100%)',
    dAccent: '#fb7185', dAccent2: '#fda4af', dCyan: '#fda4af',
    dBg: '#1a0008', dBg2: '#250010', dBg3: '#30001a', dBorder: '#600824',
    dNavBg: 'rgba(26,0,8,0.93)',
    dWhyBg: 'linear-gradient(135deg,#1a0008 0%,#250010 55%,#30001a 100%)',
  },
  {
    id: 'amber',
    name: 'Amber',
    label: '🟡',
    accent: '#f59e0b', accent2: '#d97706', cyan: '#fbbf24',
    bg: '#fffbeb', bg2: '#fef3c7', bg3: '#fde68a', border: '#fde68a',
    navBg: 'rgba(255,251,235,0.93)',
    whyBg: 'linear-gradient(135deg,#1c0d00 0%,#2e1800 55%,#3d2000 100%)',
    dAccent: '#fbbf24', dAccent2: '#fcd34d', dCyan: '#fcd34d',
    dBg: '#130a00', dBg2: '#1c1000', dBg3: '#261500', dBorder: '#3d2000',
    dNavBg: 'rgba(19,10,0,0.93)',
    dWhyBg: 'linear-gradient(135deg,#130a00 0%,#1c1000 55%,#261500 100%)',
  },
  {
    id: 'slate',
    name: 'Slate',
    label: '🩶',
    accent: '#64748b', accent2: '#475569', cyan: '#94a3b8',
    bg: '#f8fafc', bg2: '#f1f5f9', bg3: '#e2e8f0', border: '#e2e8f0',
    navBg: 'rgba(248,250,252,0.93)',
    whyBg: 'linear-gradient(135deg,#0f172a 0%,#1e293b 55%,#293548 100%)',
    dAccent: '#94a3b8', dAccent2: '#cbd5e1', dCyan: '#cbd5e1',
    dBg: '#020617', dBg2: '#0a0f1e', dBg3: '#0f172a', dBorder: '#1e293b',
    dNavBg: 'rgba(2,6,23,0.93)',
    dWhyBg: 'linear-gradient(135deg,#020617 0%,#0a0f1e 55%,#0f172a 100%)',
  },
]

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}

function applyTheme(preset: ColorPreset, mode: ThemeMode) {
  const root = document.documentElement
  const isDark = mode === 'dark'

  const accent  = isDark ? preset.dAccent  : preset.accent
  const accent2 = isDark ? preset.dAccent2 : preset.accent2
  const cyan    = isDark ? preset.dCyan    : preset.cyan
  const bg      = isDark ? preset.dBg      : preset.bg
  const bg2     = isDark ? preset.dBg2     : preset.bg2
  const bg3     = isDark ? preset.dBg3     : preset.bg3
  const border  = isDark ? preset.dBorder  : preset.border
  const navBg   = isDark ? preset.dNavBg   : preset.navBg
  const whyBg   = isDark ? preset.dWhyBg   : preset.whyBg

  root.style.setProperty('--accent', accent)
  root.style.setProperty('--accent2', accent2)
  root.style.setProperty('--accent3', isDark ? preset.dAccent : preset.accent2)
  root.style.setProperty('--cyan', cyan)
  root.style.setProperty('--cyan2', isDark ? preset.dCyan : preset.accent2)
  root.style.setProperty('--bg', bg)
  root.style.setProperty('--bg2', bg2)
  root.style.setProperty('--bg3', bg3)
  root.style.setProperty('--border', border)
  root.style.setProperty('--border2', isDark ? preset.dBorder : preset.border)
  root.style.setProperty('--nav-bg', navBg)
  root.style.setProperty('--why-bg', whyBg)
  root.style.setProperty('--accent-glow', `rgba(${hexToRgb(accent)},${isDark ? '0.18' : '0.22'})`)
  root.style.setProperty('--card-shadow', `0 4px 24px rgba(${hexToRgb(accent)},${isDark ? '0.07' : '0.10'})`)
  root.style.setProperty('--card-hover',  `0 14px 44px rgba(${hexToRgb(accent)},${isDark ? '0.18' : '0.22'})`)

  if (isDark) {
    root.style.setProperty('--surface',  preset.dBg2)
    root.style.setProperty('--surface2', preset.dBg3)
    root.style.setProperty('--text',     '#e0f2fe')
    root.style.setProperty('--text2',    '#bae6fd')
    root.style.setProperty('--muted',    preset.dAccent)
    root.style.setProperty('--subtle',   preset.dAccent2)
  } else {
    root.style.setProperty('--surface',  '#ffffff')
    root.style.setProperty('--surface2', bg2)
    root.style.setProperty('--text',     '#0c1a2e')
    root.style.setProperty('--text2',    '#1e3a5f')
    root.style.setProperty('--muted',    '#4a7fa5')
    root.style.setProperty('--subtle',   '#64aac8')
  }
}

interface ThemeContextValue {
  mode: ThemeMode
  preset: ColorPreset
  toggleMode: () => void
  setPreset: (p: ColorPreset) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light')
  const [preset, setPresetState] = useState<ColorPreset>(COLOR_PRESETS[0])

  useEffect(() => {
    const savedMode   = (localStorage.getItem('rkpg-mode')   ?? 'light') as ThemeMode
    const savedPreset = localStorage.getItem('rkpg-preset') ?? 'sky'
    const p = COLOR_PRESETS.find(c => c.id === savedPreset) ?? COLOR_PRESETS[0]
    setMode(savedMode)
    setPresetState(p)
    document.documentElement.setAttribute('data-theme', savedMode)
    applyTheme(p, savedMode)
  }, [])

  const toggleMode = () => {
    const next = mode === 'light' ? 'dark' : 'light'
    setMode(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('rkpg-mode', next)
    applyTheme(preset, next)
  }

  const setPreset = (p: ColorPreset) => {
    setPresetState(p)
    localStorage.setItem('rkpg-preset', p.id)
    applyTheme(p, mode)
  }

  return (
    <ThemeContext.Provider value={{ mode, preset, toggleMode, setPreset }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
