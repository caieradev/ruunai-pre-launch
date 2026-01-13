import { TranslationKeys } from './en'

export const pt: TranslationKeys = {
  site: {
    name: 'RuunAI',
    slogan: 'Seu treinador de corrida com IA, feito para você.',
    founder: 'Caio Miguel Fernandes',
  },
  hero: {
    headline: 'Planos de Treino que Realmente Se Encaixam na Sua Vida',
    subheadline:
      'Tenha um plano de corrida personalizado que se adapta à sua rotina, nível de condicionamento e objetivos. Sem adivinhação, sem modelos genéricos.',
    ctaPrimary: 'Acesso Antecipado',
    ctaSecondary: 'Como Funciona',
    calendar: {
      title: 'Seu Plano Personalizado',
      subtitle: 'Se adapta ao seu progresso toda semana',
      legend: {
        longRun: 'Corrida longa',
        hard: 'Intenso',
        medium: 'Moderado',
        easy: 'Leve',
        rest: 'Descanso',
      },
    },
  },
  problem: {
    heading: 'Planos Genéricos Não Funcionam',
    subheading: 'Você é único. Seu treino também deveria ser.',
    points: [
      {
        title: 'Tamanho Único',
        description:
          'Planos estáticos ignoram sua rotina, nível de condicionamento e como seu corpo responde ao treino.',
      },
      {
        title: 'Sem Adaptação',
        description:
          'Perdeu um treino ou está cansado? Planos tradicionais não se ajustam, levando a lesões ou esgotamento.',
      },
      {
        title: 'Complexidade Avassaladora',
        description:
          'Muitos dados, pouca orientação. Você precisa de clareza, não de mais confusão.',
      },
    ],
  },
  solution: {
    heading: 'Treino Personalizado em 3 Passos Simples',
    steps: [
      {
        number: '01',
        title: 'Avaliação Rápida',
        description:
          'Conte-nos sobre seus objetivos, condicionamento atual e rotina. Leva 2 minutos.',
      },
      {
        number: '02',
        title: 'IA Cria Seu Plano',
        description:
          'Nossa IA cria um plano de treino feito especificamente para você, não um modelo genérico.',
      },
      {
        number: '03',
        title: 'Treine e Adapte',
        description:
          'Seu plano evolui com base no seu progresso, recuperação e mudanças da vida real.',
      },
    ],
  },
  whyDifferent: {
    heading: 'Por Que RuunAI É Diferente',
    tableHeaders: {
      feature: 'Recurso',
      traditional: 'Planos Tradicionais',
      ruunai: 'RuunAI',
    },
    comparison: [
      {
        feature: 'Personalização',
        traditional: 'Modelos genéricos para todos',
        ruunai: 'Plano único feito para seu corpo e vida',
      },
      {
        feature: 'Adaptação',
        traditional: 'Estático, nunca muda',
        ruunai: 'Se ajusta semanalmente com base no seu progresso',
      },
      {
        feature: 'Complexidade',
        traditional: 'Planilhas confusas',
        ruunai: 'Orientação diária clara e acionável',
      },
      {
        feature: 'Resultados',
        traditional: 'Torcer pelo melhor',
        ruunai: 'Otimização baseada em dados para seus objetivos',
      },
    ],
  },
  socialProof: {
    heading: 'Construído em Público',
    subheading: 'RuunAI está sendo desenvolvido abertamente por corredores, para corredores.',
    founderQuote:
      'Estou construindo isso porque estava cansado de planos que não se encaixavam na minha vida. Todo corredor merece um treino que se adapta a ele, não o contrário.',
    founderName: 'Caio Miguel Fernandes',
    ctaText: 'Acompanhe a Jornada',
  },
  emailCapture: {
    heading: 'Garanta Seu Acesso Antecipado',
    subheading:
      'Seja um dos primeiros a experimentar coaching personalizado com IA. Sem spam, apenas atualizações.',
    buttonText: 'Entrar na Lista',
    buttonTextLoading: 'Entrando...',
    namePlaceholder: 'Seu nome',
    emailPlaceholder: 'seu@email.com',
    successMessage: 'Obrigado! Entraremos em contato em breve.',
    errorInvalidEmail: 'Por favor, insira um endereço de e-mail válido',
    errorInvalidName: 'Por favor, insira seu nome',
    errorGeneric: 'Algo deu errado. Por favor, tente novamente.',
    errorConnection: 'Falha ao se inscrever. Verifique sua conexão e tente novamente.',
  },
  footer: {
    tagline: 'Construído em público por corredores, para corredores.',
    copyright: `© ${new Date().getFullYear()} RuunAI. Todos os direitos reservados.`,
    follow: 'Seguir',
  },
  api: {
    errorInvalidEmail: 'Por favor, forneça um endereço de e-mail válido',
    errorInvalidName: 'Por favor, forneça seu nome',
    errorServiceConfig: 'Erro de configuração do serviço. Tente novamente mais tarde.',
    errorSubscribeFailed: 'Falha ao se inscrever. Tente novamente.',
    errorInvalidData: 'E-mail ou dados inválidos. Verifique e tente novamente.',
    successMessage: 'Obrigado! Entraremos em contato em breve.',
  },
  metadata: {
    title: 'RuunAI - Planos de Treino de Corrida Personalizados com IA',
    description:
      'Tenha um plano de corrida personalizado que se adapta à sua rotina, nível de condicionamento e objetivos. Treino com IA que realmente se encaixa na sua vida.',
    keywords:
      'corrida, plano de treino, treinador IA, treino personalizado, coach de corrida, fitness, treino de maratona',
  },
}
