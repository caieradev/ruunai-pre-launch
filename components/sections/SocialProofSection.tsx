'use client'

import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'
import { useLanguage } from '@/contexts/LanguageContext'

export default function SocialProofSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-dark-surface py-20 sm:py-28">
      <Container size="sm">
        <SectionHeading
          title={t.socialProof.heading}
          subtitle={t.socialProof.subheading}
        />

        <Card className="relative">
          {/* Quote mark decoration */}
          <div className="absolute -top-4 left-8 text-6xl text-accent-primary/20 font-serif">"</div>

          <blockquote className="relative">
            <p className="text-lg text-text-secondary italic sm:text-xl leading-relaxed">
              {t.socialProof.founderQuote}
            </p>

            <footer className="mt-6 flex items-center gap-4">
              {/* Initials avatar */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary/10 border border-accent-primary/30">
                <span className="text-sm font-bold text-accent-primary">
                  {t.socialProof.founderName
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)}
                </span>
              </div>

              <div>
                <p className="font-semibold text-text-primary">{t.socialProof.founderName}</p>
                <p className="text-sm text-text-muted">Founder, RuunAI</p>
              </div>
            </footer>
          </blockquote>
        </Card>

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => window.open(SITE_CONFIG.twitter, '_blank', 'noopener,noreferrer')}
          >
            {t.socialProof.ctaText}
          </Button>
        </div>
      </Container>
    </section>
  )
}
