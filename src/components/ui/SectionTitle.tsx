interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className={`font-body text-xs font-bold uppercase tracking-[0.18em] mb-3 ${
          light ? 'text-white/50' : 'text-primary'
        }`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-4xl md:text-5xl font-bold tracking-tight leading-tight text-balance mb-3 ${
          light ? 'text-white' : 'text-secondary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-lg max-w-xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/75' : 'text-fg-muted'}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 w-10 h-0.5 ${light ? 'bg-white/40' : 'bg-primary-light'} ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  )
}
