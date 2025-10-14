export function PencilDecoration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 80L30 20L35 18L40 20L50 80L45 82L40 80L35 82L30 80L25 82L20 80Z"
        fill="oklch(0.85 0.12 85)"
        stroke="oklch(0.15 0.02 60)"
        strokeWidth="2"
      />
      <path d="M30 20L35 10L40 20" fill="oklch(0.95 0.15 45)" stroke="oklch(0.15 0.02 60)" strokeWidth="2" />
      <rect x="32" y="25" width="6" height="15" fill="oklch(0.45 0.08 280)" />
      <circle cx="35" cy="70" r="3" fill="oklch(0.15 0.02 60)" />
    </svg>
  )
}

export function RulerDecoration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="5"
        width="190"
        height="30"
        fill="oklch(0.92 0.08 85)"
        stroke="oklch(0.15 0.02 60)"
        strokeWidth="2"
        rx="3"
      />
      {[...Array(19)].map((_, i) => (
        <line
          key={i}
          x1={15 + i * 10}
          y1={i % 5 === 0 ? 10 : 15}
          x2={15 + i * 10}
          y2="30"
          stroke="oklch(0.15 0.02 60)"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  )
}

export function CompassDecoration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="3" fill="oklch(0.45 0.08 280)" />
      <path d="M50 50L30 85" stroke="oklch(0.45 0.08 280)" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 50L70 85" stroke="oklch(0.45 0.08 280)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="30" cy="85" r="4" fill="oklch(0.15 0.02 60)" />
      <path d="M70 85L70 88" stroke="oklch(0.15 0.02 60)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function NotebookDecoration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="15"
        y="10"
        width="70"
        height="100"
        fill="oklch(0.98 0.01 85)"
        stroke="oklch(0.15 0.02 60)"
        strokeWidth="2"
        rx="2"
      />
      <line x1="30" y1="10" x2="30" y2="110" stroke="oklch(0.75 0.08 280 / 0.3)" strokeWidth="2" />
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1="35"
          y1={25 + i * 12}
          x2="80"
          y2={25 + i * 12}
          stroke="oklch(0.75 0.08 280 / 0.2)"
          strokeWidth="1"
        />
      ))}
    </svg>
  )
}

export function EraserDecoration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="10"
        y="20"
        width="60"
        height="25"
        fill="oklch(0.95 0.15 45)"
        stroke="oklch(0.15 0.02 60)"
        strokeWidth="2"
        rx="3"
      />
      <rect x="10" y="35" width="60" height="10" fill="oklch(0.45 0.08 280 / 0.3)" />
    </svg>
  )
}
