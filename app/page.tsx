import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import WhyDifferentSection from '@/components/sections/WhyDifferentSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import EmailCaptureSection from '@/components/sections/EmailCaptureSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhyDifferentSection />
      <SocialProofSection />
      <EmailCaptureSection />
      <Footer />
    </main>
  )
}
