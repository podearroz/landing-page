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
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`font-heading text-4xl md:text-5xl font-semibold leading-tight text-balance mb-4 ${
          light ? 'text-white' : 'text-secondary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/80' : 'text-fg-muted'}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 mx-auto w-12 h-0.5 ${
          light ? 'bg-white/50' : 'bg-primary-light'
        } ${centered ? '' : 'ml-0'}`}
      />
    </div>
  )
}
