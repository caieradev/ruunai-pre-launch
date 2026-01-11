'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Logo from '@/components/Logo'
import { COPY } from '@/lib/constants'

export default function HeroSection() {
  // Training calendar data - simulates a week of training with different intensities
  const trainingWeeks = [
    ['easy', 'medium', 'rest', 'hard', 'medium', 'long', 'rest'],
    ['medium', 'hard', 'easy', 'rest', 'hard', 'long', 'rest'],
    ['easy', 'medium', 'hard', 'medium', 'rest', 'long', 'easy'],
    ['medium', 'easy', 'hard', 'rest', 'medium', 'long', 'rest'],
  ]

  const intensityColors = {
    easy: 'bg-accent-secondary/30',
    medium: 'bg-accent-secondary/60',
    hard: 'bg-accent-primary/70',
    long: 'bg-accent-primary',
    rest: 'bg-dark-border',
  }

  const handleScrollToEarlyAccess = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-dark-bg py-16 sm:py-24 lg:py-32 overflow-hidden">
      <Container size="lg">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in">
            {/* Logo */}
            <div className="mb-8">
              <Logo size="md" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold font-display text-text-primary sm:text-5xl lg:text-6xl leading-tight">
              {COPY.hero.headline.split('Actually').map((part, i) =>
                i === 0 ? (
                  <span key={i}>{part}</span>
                ) : (
                  <span key={i}>
                    <span className="gradient-text">Actually</span>
                    {part}
                  </span>
                )
              )}
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-text-secondary sm:text-xl leading-relaxed">
              {COPY.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" onClick={handleScrollToEarlyAccess}>
                {COPY.hero.ctaPrimary}
              </Button>
              <Button variant="outline" size="lg" onClick={handleScrollToHowItWorks}>
                {COPY.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Right: Training Calendar Visual */}
          <div className="animate-slide-in-right">
            <div className="relative rounded-2xl border border-dark-border bg-dark-surface p-6 sm:p-8">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Your Personalized Plan
                </h3>
                <p className="text-sm text-text-muted">Adapts to your progress every week</p>
              </div>

              {/* Days of week labels */}
              <div className="mb-4 grid grid-cols-7 gap-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <div key={i} className="text-center text-xs font-medium text-text-muted">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="space-y-3">
                {trainingWeeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-cols-7 gap-2">
                    {week.map((intensity, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`aspect-square rounded-lg ${
                          intensityColors[intensity as keyof typeof intensityColors]
                        } transition-all hover:scale-110 hover:shadow-lg cursor-pointer`}
                        title={intensity.charAt(0).toUpperCase() + intensity.slice(1)}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-accent-primary" />
                  <span className="text-text-muted">Long run</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-accent-primary/70" />
                  <span className="text-text-muted">Hard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-accent-secondary/60" />
                  <span className="text-text-muted">Medium</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-accent-secondary/30" />
                  <span className="text-text-muted">Easy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-dark-border" />
                  <span className="text-text-muted">Rest</span>
                </div>
              </div>

              {/* Accent glow effect */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent-primary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </Container>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-accent-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-secondary/5 blur-3xl" />
      </div>
    </section>
  )
}
