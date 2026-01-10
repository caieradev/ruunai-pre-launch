import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import { COPY } from '@/lib/constants'

export default function ProblemSection() {
  return (
    <section className="bg-dark-bg py-20 sm:py-28">
      <Container>
        <SectionHeading
          title={COPY.problem.heading}
          subtitle={COPY.problem.subheading}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {COPY.problem.points.map((point, index) => (
            <Card key={index} hoverable>
              {/* Icon/Number */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-primary/10">
                <span className="text-xl font-bold text-accent-primary">{index + 1}</span>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-text-primary">
                {point.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {point.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
