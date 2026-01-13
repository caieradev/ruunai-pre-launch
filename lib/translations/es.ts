import { TranslationKeys } from './en'

export const es: TranslationKeys = {
  site: {
    name: 'RuunAI',
    slogan: 'Tu entrenador de running con IA, hecho para ti.',
    founder: 'Caio Miguel Fernandes',
  },
  hero: {
    headline: 'Planes de Entrenamiento que Realmente se Ajustan a Tu Vida',
    subheadline:
      'Obtén un plan de running personalizado que se adapta a tu horario, nivel de forma física y objetivos. Sin conjeturas, sin plantillas genéricas.',
    ctaPrimary: 'Obtén Acceso Anticipado',
    ctaSecondary: 'Mira Cómo Funciona',
    calendar: {
      title: 'Tu Plan Personalizado',
      subtitle: 'Se adapta a tu progreso cada semana',
      legend: {
        longRun: 'Carrera larga',
        hard: 'Intenso',
        medium: 'Moderado',
        easy: 'Suave',
        rest: 'Descanso',
      },
    },
  },
  problem: {
    heading: 'Los Planes Genéricos No Funcionan',
    subheading: 'Eres único. Tu entrenamiento también debería serlo.',
    points: [
      {
        title: 'Talla Única',
        description:
          'Los planes estáticos ignoran tu horario, nivel de forma física y cómo responde tu cuerpo al entrenamiento.',
      },
      {
        title: 'Sin Adaptación',
        description:
          '¿Perdiste un entrenamiento o te sientes fatigado? Los planes tradicionales no se ajustan, llevando a lesiones o agotamiento.',
      },
      {
        title: 'Complejidad Abrumadora',
        description:
          'Demasiados datos, poca orientación. Necesitas claridad, no más confusión.',
      },
    ],
  },
  solution: {
    heading: 'Entrenamiento Personalizado en 3 Pasos Simples',
    steps: [
      {
        number: '01',
        title: 'Evaluación Rápida',
        description:
          'Cuéntanos sobre tus objetivos, forma física actual y horario. Toma 2 minutos.',
      },
      {
        number: '02',
        title: 'La IA Construye Tu Plan',
        description:
          'Nuestra IA crea un plan de entrenamiento hecho específicamente para ti, no una plantilla genérica.',
      },
      {
        number: '03',
        title: 'Entrena y Adapta',
        description:
          'Tu plan evoluciona según tu progreso, recuperación y cambios de la vida real.',
      },
    ],
  },
  whyDifferent: {
    heading: 'Por Qué RuunAI es Diferente',
    tableHeaders: {
      feature: 'Característica',
      traditional: 'Planes Tradicionales',
      ruunai: 'RuunAI',
    },
    comparison: [
      {
        feature: 'Personalización',
        traditional: 'Plantillas genéricas para todos',
        ruunai: 'Plan único creado para tu cuerpo y vida',
      },
      {
        feature: 'Adaptación',
        traditional: 'Estático, nunca cambia',
        ruunai: 'Se ajusta semanalmente según tu progreso',
      },
      {
        feature: 'Complejidad',
        traditional: 'Hojas de cálculo abrumadoras',
        ruunai: 'Orientación diaria clara y accionable',
      },
      {
        feature: 'Resultados',
        traditional: 'Esperar lo mejor',
        ruunai: 'Optimización basada en datos para tus objetivos',
      },
    ],
  },
  socialProof: {
    heading: 'Construido en Público',
    subheading: 'RuunAI está siendo desarrollado abiertamente por corredores, para corredores.',
    founderQuote:
      'Estoy construyendo esto porque estaba cansado de planes que no encajaban en mi vida. Cada corredor merece un entrenamiento que se adapte a él, no al revés.',
    founderName: 'Caio Miguel Fernandes',
    ctaText: 'Sigue el Viaje',
  },
  emailCapture: {
    heading: 'Obtén Acceso Anticipado',
    subheading:
      'Sé de los primeros en experimentar coaching personalizado con IA. Sin spam, solo actualizaciones.',
    buttonText: 'Únete a la Lista',
    buttonTextLoading: 'Uniéndose...',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'tu@email.com',
    successMessage: '¡Gracias! Nos pondremos en contacto pronto.',
    errorInvalidEmail: 'Por favor, ingresa una dirección de correo válida',
    errorInvalidName: 'Por favor, ingresa tu nombre',
    errorGeneric: 'Algo salió mal. Por favor, intenta de nuevo.',
    errorConnection: 'Error al suscribirse. Verifica tu conexión e intenta de nuevo.',
  },
  footer: {
    tagline: 'Construido en público por corredores, para corredores.',
    copyright: `© ${new Date().getFullYear()} RuunAI. Todos los derechos reservados.`,
    follow: 'Seguir',
  },
  api: {
    errorInvalidEmail: 'Por favor, proporciona una dirección de correo válida',
    errorInvalidName: 'Por favor, proporciona tu nombre',
    errorServiceConfig: 'Error de configuración del servicio. Intenta de nuevo más tarde.',
    errorSubscribeFailed: 'Error al suscribirse. Intenta de nuevo.',
    errorInvalidData: 'Correo o datos inválidos. Verifica e intenta de nuevo.',
    successMessage: '¡Gracias! Nos pondremos en contacto pronto.',
  },
  metadata: {
    title: 'RuunAI - Planes de Entrenamiento de Running Personalizados con IA',
    description:
      'Obtén un plan de running personalizado que se adapta a tu horario, nivel de forma física y objetivos. Entrenamiento con IA que realmente se ajusta a tu vida.',
    keywords:
      'running, plan de entrenamiento, entrenador IA, entrenamiento personalizado, coach de running, fitness, entrenamiento de maratón',
  },
}
