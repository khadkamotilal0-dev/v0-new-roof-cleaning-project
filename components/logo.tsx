type LogoProps = {
  className?: string
  showText?: boolean
}

/**
 * EverBright Pressure Washing logo.
 * Recreated as an inline SVG so the background is fully transparent
 * and the mark scales crisply. Uses currentColor, so set text color
 * on a parent (e.g. text-background for white, text-navy for navy).
 */
export function Logo({ className, showText = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <RoofMark className="h-9 w-auto flex-shrink-0" />
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className="text-2xl font-extrabold tracking-tight"
            style={{ fontFamily: '"Arial Narrow", Impact, sans-serif' }}
          >
            EverBright
          </span>
          <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.35em] opacity-90">
            Pressure Washing
          </span>
        </span>
      )}
    </span>
  )
}

export function RoofMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 96"
      className={className}
      fill="currentColor"
      role="img"
      aria-label="EverBright roof icon"
    >
      {/* long sweeping roof line rising to the right peak */}
      <path d="M2 78 L70 24 L96 44 L130 14 L137 22 L96 56 L70 36 L10 84 Z" />
      {/* center house gable + roof */}
      <path d="M38 40 L72 40 L84 56 L26 56 Z" />
      <rect x="33" y="56" width="44" height="2" />
      {/* chimney on center house */}
      <rect x="44" y="34" width="10" height="12" />
      {/* center house window — 4 panes with transparent dividers */}
      <rect x="50" y="22" width="7" height="7" rx="0.5" />
      <rect x="59" y="22" width="7" height="7" rx="0.5" />
      <rect x="50" y="31" width="7" height="7" rx="0.5" />
      <rect x="59" y="31" width="7" height="7" rx="0.5" />
      {/* small left house window — 4 panes with transparent dividers */}
      <rect x="16" y="64" width="6" height="6" rx="0.5" />
      <rect x="24" y="64" width="6" height="6" rx="0.5" />
      <rect x="16" y="72" width="6" height="6" rx="0.5" />
      <rect x="24" y="72" width="6" height="6" rx="0.5" />
    </svg>
  )
}
