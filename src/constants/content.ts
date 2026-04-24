import {
  RiMindMap,
  RiHeartLine,
  RiLeafLine,
  RiGroupLine,
  RiSunLine,
  RiSparklingLine,
} from 'react-icons/ri'

export const PROFESSIONAL = {
  name: 'Débora Dias',
  fullName: 'Débora Silveira Cantão Dias Ribeiro',
  title: 'Psicóloga',
  crp: 'CRP 06/181371',
  phone: '(16) 98188-6062',
  whatsapp: '5516981886062',
  instagram: '@psideboradias',
  instagramUrl: 'https://instagram.com/psideboradias',
  modality: 'Presencial e on-line',
  whatsappUrl:
    'https://wa.me/5516981886062?text=Ol%C3%A1%20D%C3%A9bora%2C%20gostaria%20de%20agendar%20uma%20consulta%20de%20psicologia.',
}

export const HERO = {
  headline: 'Encontre o equilíbrio emocional que você merece',
  subtitle:
    'Posso te ajudar a superar os desafios da ansiedade e da depressão. Juntos vamos construir uma versão mais leve e equilibrada de você.',
  credentials: [
    `${PROFESSIONAL.fullName} — ${PROFESSIONAL.crp}`,
    'Psicóloga especialista em saúde mental',
    'Atendimentos presenciais e on-line',
  ],
  ctaText: 'Agendar minha consulta',
}

export const ABOUT = {
  title: 'Sobre mim',
  subtitle: 'Um espaço seguro para você se reconectar',
  paragraphs: [
    'Sou Débora Dias, psicóloga com registro CRP 06/181371, apaixonada por acompanhar pessoas em momentos de transformação. Meu trabalho é guiado pelo compromisso com o bem-estar emocional e pelo respeito à singularidade de cada ser humano.',
    'Os atendimentos são realizados de forma presencial ou online, adaptados à sua realidade e necessidades. Utilizo uma abordagem integrativa, combinando técnicas baseadas em evidências para oferecer um cuidado personalizado e efetivo.',
    'Dar o primeiro passo pode parecer difícil, mas você não precisa enfrentar isso sozinho(a). Estou aqui para criar um espaço seguro, acolhedor e sem julgamentos onde você possa se reconectar consigo mesmo(a) e encontrar o equilíbrio que merece.',
  ],
  ctaText: 'Quero agendar uma conversa',
}

export const BENEFITS = {
  title: 'Benefícios da psicoterapia',
  subtitle: 'Investir em saúde mental é o cuidado mais profundo que você pode ter consigo mesmo(a)',
  items: [
    {
      icon: RiMindMap,
      title: 'Autoconhecimento',
      description:
        'Compreenda melhor seus padrões de pensamento e comportamento.',
    },
    {
      icon: RiHeartLine,
      title: 'Melhora da autoestima',
      description:
        'Fortaleça sua confiança e desenvolva uma relação mais saudável consigo mesmo.',
    },
    {
      icon: RiLeafLine,
      title: 'Redução da ansiedade',
      description:
        'Aprenda ferramentas práticas para lidar com o estresse e a ansiedade do dia a dia.',
    },
    {
      icon: RiGroupLine,
      title: 'Melhora nos relacionamentos',
      description:
        'Desenvolva habilidades sociais e vínculos mais saudáveis e significativos.',
    },
    {
      icon: RiSunLine,
      title: 'Superação de conflitos',
      description:
        'Processe traumas e conflitos internos com suporte profissional e acolhedor.',
    },
    {
      icon: RiSparklingLine,
      title: 'Qualidade de vida',
      description:
        'Retome o prazer nas pequenas coisas e construa uma vida com mais leveza.',
    },
  ],
}

export const METHOD = {
  title: 'Como funciona o atendimento?',
  subtitle:
    'Um processo estruturado com acolhimento, escuta ativa e ferramentas práticas para o seu crescimento.',
  steps: [
    {
      number: '01',
      title: 'Primeira conversa',
      description:
        'Sem compromisso e sem julgamentos. É o momento de se conhecermos, entendermos o que você está vivendo e verificarmos se fazemos uma boa parceria terapêutica.',
    },
    {
      number: '02',
      title: 'Construção do plano',
      description:
        'A partir da sua história e necessidades, construímos juntos um plano terapêutico personalizado, com objetivos claros e abordagens adaptadas ao seu perfil.',
    },
    {
      number: '03',
      title: 'Acompanhamento contínuo',
      description:
        'Sessões regulares de acompanhamento onde trabalhamos suas demandas, celebramos progressos e desenvolvemos ferramentas práticas para o seu dia a dia.',
    },
  ],
}

export const CTA_FINAL = {
  headline: 'Saúde mental é liberdade.',
  subtitle: 'Não adie o cuidado com você. Dê o primeiro passo hoje.',
  ctaText: 'Entrar em contato',
}

export const FOOTER = {
  credits: 'Site desenvolvido por Agência Digital',
}
