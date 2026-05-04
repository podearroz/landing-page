import {
  RiMindMap,
  RiHeartLine,
  RiLeafLine,
  RiGroupLine,
  RiSparklingLine,
  RiBrainLine,
  RiEmotionSadLine,
} from "react-icons/ri";

export const PROFESSIONAL = {
  name: "Débora Dias",
  fullName: "Débora Silveira Cantão Dias Ribeiro",
  title: "Psicóloga",
  crp: "CRP 08/46295",
  phone: "(16) 98188-6062",
  whatsapp: "5516981886062",
  instagram: "@psideboradias",
  instagramUrl: "https://instagram.com/psideboradias",
  modality: "Somente online",
  whatsappUrl:
    "https://wa.me/5516981886062?text=Ol%C3%A1%20D%C3%A9bora%2C%20gostaria%20de%20agendar%20uma%20consulta%20de%20psicologia.",
};

export const HERO = {
  headline: "Ansiedade, depressão ou estresse constante?",
  subheadline: "Você merece apoio — e cuidar de si começa aqui.",
  subtitle:
    "Atendimento psicológico online pela TCC, a abordagem com maior evidência científica da atualidade.",
  credentials: [
    `${PROFESSIONAL.crp} · Psicóloga clínica`,
    "Especialista em Terapia Cognitivo-Comportamental (PUCPR)",
    "Atendimento 100% online",
  ],
  ctaText: "Agendar minha consulta",
};

export const ABOUT = {
  title: "Olá, sou a Débora",
  subtitle: "Psicóloga que acredita em mudanças reais.",
  paragraphs: [
    "Sou Débora Silveira Cantão Dias Ribeiro, psicóloga clínica (CRP 08/46295). Minha prática é fundamentada no rigor das Terapias Cognitivas. Sou Especialista em Terapia Cognitivo-Comportamental (PUCPR) e possuo formação em Psicopatologia (Grupo PBE, prof. Fernanda Landeiro) — sigo em aprendizado contínuo para garantir que cada processo seja claro, personalizado e realmente transformador.",
    "Meu papel é criar um espaço seguro onde você possa entender seus padrões de pensamento e desenvolver ferramentas reais para transformar sua vida e recuperar o protagonismo de suas escolhas.",
    "Os atendimentos são 100% online — com toda a segurança, sigilo e acolhimento que você merece, de onde você estiver.",
  ],
  ctaText: "Quero conversar",
};

export const BENEFITS = {
  title: "O que muda com a terapia",
  subtitle: "Benefícios reais que vão além do consultório.",
  items: [
    {
      icon: RiMindMap,
      title: "Autoconhecimento",
      description:
        "Entenda seus padrões de pensamento e comportamento. Construa uma relação mais saudável e compassiva consigo mesmo(a).",
    },
    {
      icon: RiHeartLine,
      title: "Autoestima",
      description:
        "Fortaleça sua identidade, reconheça sua história e valorize seu potencial.",
    },
    {
      icon: RiLeafLine,
      title: "Redução da ansiedade",
      description:
        "Aprenda a lidar com as preocupações excessivas que mantêm sua mente presa em cenários negativos, utilizando ferramentas práticas da TCC.",
    },
    {
      icon: RiBrainLine,
      title: "TDAH",
      description:
        "Melhore o foco e a concentração que afetam sua produtividade e lazer. Aprenda estratégias para enfrentar a procrastinação e a desorganização.",
    },
    {
      icon: RiGroupLine,
      title: "Relacionamentos",
      description:
        "Compreenda suas dinâmicas (amorosas, familiares ou profissionais) para fortalecer vínculos e construir conexões mais saudáveis.",
    },
    {
      icon: RiEmotionSadLine,
      title: "Desafios emocionais",
      description:
        "Atendo experiências de estresse, ansiedade, depressão, sobrecarga e luto, oferecendo um espaço seguro para cuidar da sua saúde emocional.",
    },
    {
      icon: RiSparklingLine,
      title: "Qualidade de vida",
      description: "Retome o prazer nas pequenas coisas com mais leveza.",
    },
  ],
};

export const METHOD = {
  title: "TCC na prática",
  subtitle:
    "A Terapia Cognitivo-Comportamental conecta pensamentos, emoções e comportamentos para gerar mudanças duradouras.",
  steps: [
    {
      number: "01",
      title: "Avaliação inicial",
      description:
        "Primeiro nos conhecemos. Você fala sobre o que está vivendo e juntos definimos os objetivos terapêuticos.",
    },
    {
      number: "02",
      title: "Mapeamento cognitivo",
      description:
        "Identificamos os padrões de pensamento que geram sofrimento — o coração da TCC.",
    },
    {
      number: "03",
      title: "Ferramentas reais",
      description:
        "Desenvolvemos recursos práticos que você aplica fora das sessões, com progresso mensurável.",
    },
  ],
};

export const TESTIMONIALS = {
  title: "feedbacks",
  subtitle: "Histórias reais de pessoas que deram o primeiro passo.",
  items: [
    {
      quote:
        "Aprendi a identificar pensamentos que me sabotavam há anos. Hoje me sinto muito mais leve e segura nas minhas decisões.",
      author: "M.S.",
      context: "28 anos · Ansiedade",
      stars: 5,
    },
    {
      quote:
        "A terapia online foi muito mais prática do que eu imaginava. Em poucos meses percebi diferenças reais no meu dia a dia.",
      author: "R.C.",
      context: "34 anos · Depressão",
      stars: 5,
    },
    {
      quote:
        "A Débora cria um espaço de acolhimento genuíno. Me senti ouvida de verdade desde a primeira sessão.",
      author: "L.P.",
      context: "42 anos · Autoconhecimento",
      stars: 5,
    },
  ],
};

export const FAQ = {
  title: "Perguntas frequentes",
  items: [
    {
      question: "O que é a Terapia Cognitivo-Comportamental (TCC)?",
      answer:
        "A TCC é a abordagem com maior respaldo científico da psicologia moderna. Ela trabalha a conexão entre pensamentos, emoções e comportamentos — identificando padrões que geram sofrimento e desenvolvendo formas mais funcionais de encarar a vida.",
    },
    {
      question: "Qual o valor da sessão?",
      answer:
        "O Conselho Federal de Psicologia não permite a divulgação pública de valores. Para receber informações sobre valores e disponibilidade de horários, entre em contato pelo WhatsApp.",
    },
    {
      question: "Você atende plano de saúde?",
      answer:
        "Atendimento apenas particular. No entanto, se o seu plano oferece reembolso, emito o recibo necessário para que você solicite a restituição junto ao convênio.",
    },
    {
      question: "Como funciona o acompanhamento durante a terapia?",
      answer:
        "Sessões semanais via videochamada, com duração média de 50 minutos. Você precisará apenas de um ambiente tranquilo, privacidade e uma boa conexão de internet.",
    },
  ],
};

export const CTA_FINAL = {
  headline: "Saúde mental é liberdade.",
  subtitle: "Não adie o cuidado com você. Dê o primeiro passo hoje.",
  ctaText: "Entrar em contato",
};

export const FOOTER = {
  credits: "Design & Engenharia",
};
