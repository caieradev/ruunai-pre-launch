export const en = {
  site: {
    name: 'RuunAI',
    slogan: 'Your AI running coach, built for you.',
    founder: 'Caio Miguel Fernandes',
  },
  hero: {
    headline: 'Training Plans That Actually Fit Your Life',
    subheadline:
      'Get a personalized running plan that adapts to your schedule, fitness level, and goals. No guesswork, no cookie-cutter templates.',
    ctaPrimary: 'Get Early Access',
    ctaSecondary: 'See How It Works',
    calendar: {
      title: 'Your Personalized Plan',
      subtitle: 'Adapts to your progress every week',
      legend: {
        longRun: 'Long run',
        hard: 'Hard',
        medium: 'Medium',
        easy: 'Easy',
        rest: 'Rest',
      },
    },
  },
  problem: {
    heading: "Generic Plans Don't Work",
    subheading: "You're unique. Your training should be too.",
    points: [
      {
        title: 'One-Size-Fits-All',
        description:
          'Static plans ignore your schedule, fitness level, and how your body responds to training.',
      },
      {
        title: 'No Adaptation',
        description:
          "Miss a workout or feel fatigued? Traditional plans don't adjust, leading to injury or burnout.",
      },
      {
        title: 'Overwhelming Complexity',
        description:
          'Too much data, not enough guidance. You need clarity, not more confusion.',
      },
    ],
  },
  solution: {
    heading: 'Personalized Training in 3 Simple Steps',
    steps: [
      {
        number: '01',
        title: 'Quick Assessment',
        description:
          'Tell us about your goals, current fitness, and schedule. Takes 2 minutes.',
      },
      {
        number: '02',
        title: 'AI Builds Your Plan',
        description:
          'Our AI creates a training plan tailored specifically to you, not a generic template.',
      },
      {
        number: '03',
        title: 'Train & Adapt',
        description:
          'Your plan evolves based on your progress, recovery, and real-life changes.',
      },
    ],
  },
  whyDifferent: {
    heading: 'Why RuunAI Is Different',
    tableHeaders: {
      feature: 'Feature',
      traditional: 'Traditional Plans',
      ruunai: 'RuunAI',
    },
    comparison: [
      {
        feature: 'Personalization',
        traditional: 'Generic templates for everyone',
        ruunai: 'Unique plan built for your body and life',
      },
      {
        feature: 'Adaptation',
        traditional: 'Static, never changes',
        ruunai: 'Adjusts weekly based on your progress',
      },
      {
        feature: 'Complexity',
        traditional: 'Overwhelming spreadsheets',
        ruunai: 'Clear, actionable daily guidance',
      },
      {
        feature: 'Results',
        traditional: 'Hope for the best',
        ruunai: 'Data-driven optimization for your goals',
      },
    ],
  },
  socialProof: {
    heading: 'Built in Public',
    subheading: 'RuunAI is being developed openly by runners, for runners.',
    founderQuote:
      "I'm building this because I was tired of plans that didn't fit my life. Every runner deserves training that adapts to them, not the other way around.",
    founderName: 'Caio Miguel Fernandes',
    ctaText: 'Follow the Journey',
  },
  emailCapture: {
    heading: 'Get Early Access',
    subheading:
      'Be among the first to experience personalized AI coaching. No spam, just updates.',
    buttonText: 'Join Waitlist',
    buttonTextLoading: 'Joining...',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    successMessage: "Thanks! We'll be in touch soon.",
    errorInvalidEmail: 'Please enter a valid email address',
    errorInvalidName: 'Please enter your name',
    errorGeneric: 'Something went wrong. Please try again.',
    errorConnection: 'Failed to subscribe. Please check your connection and try again.',
  },
  footer: {
    tagline: 'Built in public by runners, for runners.',
    copyright: `© ${new Date().getFullYear()} RuunAI. All rights reserved.`,
    follow: 'Follow',
  },
  api: {
    errorInvalidEmail: 'Please provide a valid email address',
    errorInvalidName: 'Please provide your name',
    errorServiceConfig: 'Service configuration error. Please try again later.',
    errorSubscribeFailed: 'Failed to subscribe. Please try again.',
    errorInvalidData: 'Invalid email or data. Please check and try again.',
    successMessage: "Thanks! We'll be in touch soon.",
  },
  metadata: {
    title: 'RuunAI - AI-Powered Personalized Running Training Plans',
    description:
      'Get a personalized running plan that adapts to your schedule, fitness level, and goals. AI-powered training that actually fits your life.',
    keywords:
      'running, training plan, AI coach, personalized training, running coach, fitness, marathon training',
  },
}

export type TranslationKeys = typeof en
