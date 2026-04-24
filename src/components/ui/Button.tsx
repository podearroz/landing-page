type ButtonVariant = 'primary' | 'secondary' | 'ghost-white'

interface ButtonProps {
  variant?: ButtonVariant
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  target?: string
  rel?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
  secondary:
    'border border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary',
  'ghost-white':
    'border border-white text-white hover:bg-white hover:text-primary focus-visible:ring-white',
}

export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  onClick,
  target,
  rel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm font-body font-700 text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer'

  const classes = `${base} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
