'use client'

import Container from '@/components/ui/Container'
import Logo from '@/components/Logo'
import { SITE_CONFIG } from '@/lib/constants'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-dark-border bg-dark-bg py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Left: Logo + Slogan */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Logo size="sm" />
            <p className="text-sm text-text-muted">{t.site.slogan}</p>
          </div>

          {/* Right: Twitter Link */}
          <div className="flex flex-col items-center gap-4 sm:items-end">
            <a
              href={SITE_CONFIG.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-accent-primary focus-ring rounded"
            >
              {t.footer.follow} {SITE_CONFIG.twitterHandle}
            </a>
            <p className="text-xs text-text-muted">{t.footer.tagline}</p>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-8 border-t border-dark-border pt-8 text-center">
          <p className="text-xs text-text-muted">{t.footer.copyright}</p>
        </div>
      </Container>
    </footer>
  )
}
