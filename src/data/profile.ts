import avatarUrl from '../assets/avatar.jpg'
import type { Localized } from './types'

export const profile = {
  name: 'Cesar Santana',
  github: 'https://github.com/cesar1014',
  githubUser: 'cesar1014',
  linkedin: 'https://www.linkedin.com/in/cesar-santana-43a662195/',
  email: 'xcesaryt@gmail.com',
  avatar: avatarUrl,
  location: { pt: 'Barretos, SP — Brasil', en: 'Barretos, SP — Brazil' } as Localized,
  /** Legenda da foto, no estilo de crédito de imagem. */
  caption: {
    pt: 'Produtor audiovisual, designer e desenvolvedor',
    en: 'Audiovisual producer, designer and developer',
  } as Localized,
} as const

/** Os papéis que giram embaixo do nome, no hero. */
export const roles: Localized[] = [
  { pt: 'Desenvolvedor full stack', en: 'Full stack developer' },
  { pt: 'Designer e produtor audiovisual', en: 'Designer and audiovisual producer' },
  { pt: 'React · TypeScript · Node', en: 'React · TypeScript · Node' },
  { pt: 'Tempo real, WebRTC, offline-first', en: 'Real-time, WebRTC, offline-first' },
]

export interface SkillGroup {
  id: string
  title: Localized
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'front',
    title: { pt: 'Front-end', en: 'Front-end' },
    items: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'PWA'],
  },
  {
    id: 'back',
    title: { pt: 'Back-end', en: 'Back-end' },
    items: ['Node.js', 'Express', 'Socket.IO', 'WebRTC', 'REST', 'Prisma', 'C#'],
  },
  {
    id: 'data',
    title: { pt: 'Dados', en: 'Data' },
    items: ['PostgreSQL', 'SQLite', 'Supabase', 'MySQL'],
  },
  {
    id: 'apps',
    title: { pt: 'Mobile e desktop', en: 'Mobile and desktop' },
    items: ['React Native', 'Expo', 'Electron', 'Flutter', 'Dart'],
  },
  {
    // Confira esta lista: são as ferramentas mais comuns da função,
    // não uma leitura do seu dia a dia. Tire o que não usa.
    id: 'craft',
    title: { pt: 'Design e audiovisual', en: 'Design and audiovisual' },
    items: ['Figma', 'Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Lightroom'],
  },
  {
    id: 'infra',
    title: { pt: 'Infra e ferramentas', en: 'Infra and tooling' },
    items: ['Git', 'GitHub Actions', 'Docker', 'Vercel', 'Linux', 'Nginx'],
  },
]

/** Fita que corre entre as seções, no ritmo de uma cartela de créditos. */
export const marquee = [
  'React',
  'TypeScript',
  'Node.js',
  'Next.js',
  'WebRTC',
  'Electron',
  'PostgreSQL',
  'React Native',
  'Figma',
  'Premiere Pro',
  'Supabase',
  'Docker',
  'After Effects',
  'Socket.IO',
  'Vite',
  'Photoshop',
]

export interface TimelineEntry {
  id: string
  period: string
  title: Localized
  org: Localized
  body: Localized
  tags: string[]
  current?: boolean
}

export const timeline: TimelineEntry[] = [
  {
    id: 'ha',
    period: '2026',
    current: true,
    title: { pt: 'Produtor audiovisual e designer', en: 'Audiovisual producer and designer' },
    org: {
      pt: 'Hospital de Amor — referência em câncer na América Latina',
      en: 'Hospital de Amor — Latin America’s reference in cancer care',
    },
    body: {
      pt: 'Produção de vídeo e design para a comunicação do hospital. Em paralelo, construo os sistemas internos que a equipe usa todo dia: o Meu Ponto, PWA offline-first de controle de jornada com exportação para o RH, e o MeuRelatório, de relatórios financeiros por projeto com controle de acesso por perfil.',
      en: 'Video production and design for the hospital’s communications. Alongside that, I build the internal systems the team uses every day: Meu Ponto, an offline-first time-tracking PWA with HR exports, and MeuRelatório, per-project financial reporting with role-based access control.',
    },
    tags: ['Audiovisual', 'Design', 'React', 'TypeScript', 'Supabase'],
  },
  {
    id: 'draco-entry',
    period: '2026',
    title: { pt: 'Draco — projeto autoral', en: 'Draco — personal project' },
    org: { pt: 'Produto próprio, do zero', en: 'My own product, from scratch' },
    body: {
      pt: 'Plataforma de chamadas em grupo com WebRTC, servidor de sinalização próprio, SFU para calls grandes, app para Windows em Electron e publicação em servidor próprio. Foi onde aprendi rede de verdade: reinício de ICE, TURN, degradação de qualidade e reconexão.',
      en: 'A group call platform on WebRTC, with its own signaling server, an SFU for large calls, a Windows app in Electron and deployment on my own server. This is where I actually learned networking: ICE restarts, TURN, quality degradation and reconnection.',
    },
    tags: ['WebRTC', 'Electron', 'Socket.IO', 'SQLite', 'Docker'],
  },
  {
    id: 'ifsp',
    period: '2023 — 2026',
    current: true,
    title: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development' },
    org: { pt: 'IFSP — Instituto Federal de São Paulo', en: 'IFSP — Federal Institute of São Paulo' },
    body: {
      pt: 'Último semestre. A graduação passou por Flutter e Dart, C# e .NET, dispositivos móveis, banco de dados e desenvolvimento web — e é de onde saíram o IFPlanner e boa parte dos projetos de base.',
      en: 'Final semester. The degree covered Flutter and Dart, C# and .NET, mobile devices, databases and web development — and it is where IFPlanner and a good part of my foundational projects came from.',
    },
    tags: ['Flutter', 'Dart', 'C#', 'MySQL', 'Web'],
  },
  {
    id: 'inicio',
    period: '2022 — 2023',
    title: { pt: 'Onde o design começou', en: 'Where the design started' },
    org: { pt: 'Front-end, e o que ele ensinou', en: 'Front-end, and what it taught' },
    body: {
      pt: 'Comecei por landing pages em HTML e CSS. Foi ali, mexendo em grid, hierarquia e espaçamento para a página ficar de pé, que o design entrou — e logo depois veio a Cápsula de Memórias, primeira vez modelando dados com Prisma e separando API de cliente de forma consciente.',
      en: 'I started with landing pages in HTML and CSS. That is where design came in — working through grid, hierarchy and spacing to get a page to stand up — and soon after came Cápsula de Memórias, my first time modeling data with Prisma and deliberately splitting API from client.',
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Prisma'],
  },
]
