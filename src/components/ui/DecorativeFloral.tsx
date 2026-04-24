interface DecorativeFloraltProps {
  className?: string
  opacity?: string
}

export function DecorativeFloral({
  className = '',
  opacity = 'opacity-[0.12]',
}: DecorativeFloraltProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      className={`absolute pointer-events-none select-none ${opacity} ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      {/* Central stem */}
      <path
        d="M200 380 Q200 280 200 200"
        stroke="#963C1E"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Main branches */}
      <path
        d="M200 280 Q160 240 120 220"
        stroke="#963C1E"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M200 280 Q240 240 280 220"
        stroke="#963C1E"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M200 240 Q155 200 110 190"
        stroke="#963C1E"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M200 240 Q245 200 290 190"
        stroke="#963C1E"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      {/* Leaves on left branch */}
      <ellipse cx="120" cy="220" rx="18" ry="9" fill="#963C1E" transform="rotate(-30 120 220)" />
      <ellipse cx="110" cy="190" rx="16" ry="8" fill="#963C1E" transform="rotate(-20 110 190)" />
      <ellipse cx="148" cy="234" rx="12" ry="6" fill="#963C1E" transform="rotate(-40 148 234)" />
      {/* Leaves on right branch */}
      <ellipse cx="280" cy="220" rx="18" ry="9" fill="#963C1E" transform="rotate(30 280 220)" />
      <ellipse cx="290" cy="190" rx="16" ry="8" fill="#963C1E" transform="rotate(20 290 190)" />
      <ellipse cx="252" cy="234" rx="12" ry="6" fill="#963C1E" transform="rotate(40 252 234)" />
      {/* Top flower -->
      <circle cx="200" cy="200" r="6" fill="#963C1E" />
      <ellipse cx="200" cy="188" rx="5" ry="9" fill="#963C1E" opacity="0.8" />
      <ellipse cx="200" cy="212" rx="5" ry="9" fill="#963C1E" opacity="0.8" />
      <ellipse cx="188" cy="200" rx="9" ry="5" fill="#963C1E" opacity="0.8" />
      <ellipse cx="212" cy="200" rx="9" ry="5" fill="#963C1E" opacity="0.8" />
      {/* Small flowers at branch ends */}
      <circle cx="120" cy="218" r="4" fill="#963C1E" />
      <circle cx="280" cy="218" r="4" fill="#963C1E" />
      <circle cx="110" cy="188" r="3" fill="#963C1E" />
      <circle cx="290" cy="188" r="3" fill="#963C1E" />
      {/* Extra small leaves */}
      <path d="M200 320 Q190 310 185 318 Q190 322 200 320Z" fill="#963C1E" />
      <path d="M200 320 Q210 310 215 318 Q210 322 200 320Z" fill="#963C1E" />
      <path d="M200 300 Q190 290 186 298 Q191 302 200 300Z" fill="#963C1E" />
      <path d="M200 300 Q210 290 214 298 Q209 302 200 300Z" fill="#963C1E" />
    </svg>
  )
}
