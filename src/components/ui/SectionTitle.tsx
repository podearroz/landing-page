interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`font-heading text-3xl md:text-4xl font-semibold tracking-tight leading-snug text-balance mb-3 ${
          light ? 'text-white' : 'text-secondary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-base max-w-xl leading-relaxed ${
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
