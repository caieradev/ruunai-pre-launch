import { cn } from '@/lib/utils'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export default function Input({ error, className, ...props }: InputProps) {
  return (
    <div className="w-full">
      <input
        className={cn(
          'w-full rounded-lg border bg-dark-surface px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors',
          'focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-dark-bg',
          error ? 'border-red-500' : 'border-dark-border',
          className
        )}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  )
}
