'use client'

import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WhyDifferentSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-dark-bg py-20 sm:py-28">
      <Container>
        <SectionHeading title={t.whyDifferent.heading} />

        {/* Desktop: Table view */}
        <div className="hidden overflow-hidden rounded-xl border border-dark-border lg:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-border bg-dark-surface">
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                  {t.whyDifferent.tableHeaders.feature}
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-muted">
                  {t.whyDifferent.tableHeaders.traditional}
                </th>
                <th className="bg-accent-primary/5 px-6 py-4 text-left text-sm font-semibold text-accent-primary">
                  {t.whyDifferent.tableHeaders.ruunai}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.whyDifferent.comparison.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-dark-border last:border-b-0 hover:bg-dark-surface/50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-text-primary">{row.feature}</td>
                  <td className="px-6 py-4 text-text-muted">
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-red-500/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      {row.traditional}
                    </span>
                  </td>
                  <td className="bg-accent-primary/5 px-6 py-4 text-text-primary">
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-accent-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {row.ruunai}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: Card view */}
        <div className="space-y-6 lg:hidden">
          {t.whyDifferent.comparison.map((row, index) => (
            <div
              key={index}
              className="rounded-xl border border-dark-border bg-dark-surface p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-text-primary">{row.feature}</h3>

              <div className="space-y-3">
                {/* Traditional */}
                <div className="flex gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div>
                    <p className="text-xs font-medium text-text-muted mb-1">{t.whyDifferent.tableHeaders.traditional}</p>
                    <p className="text-text-muted">{row.traditional}</p>
                  </div>
                </div>

                {/* RuunAI */}
                <div className="flex gap-3 rounded-lg bg-accent-primary/5 p-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <p className="text-xs font-medium text-accent-primary mb-1">{t.whyDifferent.tableHeaders.ruunai}</p>
                    <p className="text-text-primary">{row.ruunai}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
