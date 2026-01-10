import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { COPY } from '@/lib/constants'

export default function SolutionSection() {
  return (
    <section id="how-it-works" className="bg-dark-surface py-20 sm:py-28">
      <Container>
        <SectionHeading title={COPY.solution.heading} />

        <div className="mx-auto max-w-4xl space-y-12">
          {COPY.solution.steps.map((step, index) => (
            <div key={index} className="relative flex gap-6 sm:gap-8">
              {/* Number badge with connecting line */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary shadow-lg shadow-accent-primary/20">
                  <span className="text-2xl font-bold text-dark-bg">{step.number}</span>
                </div>

                {/* Connecting line (except for last item) */}
                {index < COPY.solution.steps.length - 1 && (
                  <div className="mt-2 h-full w-px bg-gradient-to-b from-accent-primary/50 to-transparent" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-12">
                <h3 className="mb-3 text-2xl font-bold font-display text-text-primary sm:text-3xl">
                  {step.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
