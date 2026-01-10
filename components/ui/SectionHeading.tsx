import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', 'mb-12', className)}>
      <h2
        className={cn(
          'text-3xl font-bold font-display sm:text-4xl lg:text-5xl',
          align === 'center' && 'mx-auto max-w-3xl'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg text-text-secondary sm:text-xl',
            align === 'center' && 'mx-auto max-w-2xl'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
