import type { Project } from './types'

/**
 * Projetos reais de github.com/cesar1014, em ordem de impacto.
 * Todos os links `live` daqui foram verificados respondendo 200.
 */
export const projects: Project[] = [
  {
    id: 'draco',
    name: 'Draco',
    year: '2026',
    categories: ['fullstack'],
    featured: true,
    tagline: {
      pt: 'Plataforma de chamadas em grupo com voz, câmera e compartilhamento de tela',
      en: 'Group call platform with voice, camera and screen sharing',
    },
    description: {
      pt: 'Aplicação de comunicação em tempo real construída do zero: web, PWA no celular e app nativo para Windows via Electron. A mídia trafega em WebRTC e o servidor decide entre malha direta entre os participantes ou rota por SFU quando a call cresce. Contas, servidores, cargos, canais e histórico ficam em SQLite, então reiniciar o servidor não apaga nada.',
      en: 'A real-time communication app built from scratch: web, mobile PWA and a native Windows app through Electron. Media rides on WebRTC and the server picks between a direct mesh between participants or an SFU route once the call grows. Accounts, servers, roles, channels and history live in SQLite, so restarting the server erases nothing.',
    },
    highlights: [
      {
        pt: 'Dois caminhos de mídia — malha direta e SFU — escolhidos pelo servidor conforme o tamanho da call',
        en: 'Two media paths — direct mesh and SFU — chosen by the server based on call size',
      },
      {
        pt: 'Reconexão de verdade: reinício de ICE quando a rede muda, câmera e tela reanexadas após queda, identidade estável',
        en: 'Reconnection that actually works: ICE restart when the network changes, camera and screen re-attached after a drop, stable identity',
      },
      {
        pt: 'App para Windows com seletor próprio de telas com miniaturas e captura de áudio do sistema',
        en: 'Windows app with its own screen picker with thumbnails and system audio capture',
      },
      {
        pt: 'Sessão por token assinado, senha protegida por scrypt, rate limit por IP e por identidade, CSP compatível com WebRTC',
        en: 'Signed-token sessions, scrypt-hashed passwords, rate limiting per IP and per identity, WebRTC-compatible CSP',
      },
    ],
    stack: ['React 19', 'TypeScript', 'Electron', 'WebRTC', 'Socket.IO', 'Node.js', 'SQLite', 'Docker'],
    links: [
      { kind: 'live', url: 'https://dracocall.duckdns.org' },
      { kind: 'repo', url: 'https://github.com/cesar1014/draco' },
      { kind: 'download', url: 'https://github.com/cesar1014/draco/releases/latest' },
    ],
  },
  {
    id: 'meu-ponto',
    name: 'Meu Ponto',
    year: '2026',
    categories: ['fullstack', 'mobile'],
    featured: true,
    tagline: {
      pt: 'Controle de jornada offline-first, que funciona sem internet e sincroniza depois',
      en: 'Offline-first time tracking that works with no connection and syncs later',
    },
    description: {
      pt: 'PWA de registro de ponto pensada para o caso em que a rede falha justamente na hora de bater o ponto. O registro acontece localmente e a sincronização é automática assim que a conexão volta, sem o usuário precisar saber que houve um problema. Dashboard com gráficos, solicitação de ajustes retroativos e espelho de ponto exportável em PDF e Excel para o RH.',
      en: 'A time-clock PWA designed for the moment the network fails exactly when someone needs to clock in. The entry is written locally and syncs automatically once the connection returns, without the user ever having to notice. Dashboard with charts, retroactive adjustment requests and an exportable PDF/Excel timesheet for HR.',
    },
    highlights: [
      {
        pt: 'Arquitetura offline-first: o ponto é registrado local e sincronizado sozinho quando a rede volta',
        en: 'Offline-first architecture: entries are stored locally and sync on their own once the network is back',
      },
      {
        pt: 'Instalável em Android, iOS e desktop, com comportamento de app nativo',
        en: 'Installable on Android, iOS and desktop, behaving like a native app',
      },
      {
        pt: 'Exportação de espelho de ponto em PDF e Excel, com layout pronto para auditoria',
        en: 'Timesheet export to PDF and Excel, laid out for audit use',
      },
      {
        pt: 'Autenticação com Supabase Auth, rotas protegidas e recuperação de senha',
        en: 'Supabase Auth authentication, protected routes and password recovery',
      },
    ],
    stack: ['TypeScript', 'React', 'PWA', 'Supabase', 'Service Worker'],
    links: [
      { kind: 'live', url: 'https://meupontoha.vercel.app' },
      { kind: 'repo', url: 'https://github.com/cesar1014/Meu-Ponto' },
    ],
  },
  {
    id: 'banca',
    name: 'Banca',
    year: '2026',
    categories: ['fullstack'],
    tagline: {
      pt: 'Gestão de banca esportiva compartilhada entre sócios, com trilha de auditoria',
      en: 'Shared sports bankroll management between partners, with an audit trail',
    },
    description: {
      pt: 'Sistema para administrar uma banca dividida entre várias pessoas: entradas, controle de risco, metas diárias e mensais, participação de cada integrante e fechamento de mês. A regra central do produto é conservadora por escolha — o sistema nunca trata lucro como garantido, nunca aumenta limites sozinho e nunca sugere subir a stake para recuperar prejuízo.',
      en: 'A system for running a bankroll split between several people: entries, risk control, daily and monthly targets, each member share and month-end closing. The core product rule is deliberately conservative — it never treats profit as guaranteed, never raises limits on its own and never suggests increasing the stake to recover a loss.',
    },
    highlights: [
      {
        pt: 'Trilha de auditoria completa: toda alteração fica registrada e atribuída a um usuário',
        en: 'Full audit trail: every change is recorded and attributed to a user',
      },
      {
        pt: 'Permissões em camadas — o dono altera banca inicial e metas, administradores cuidam do resto',
        en: 'Layered permissions — the owner edits the starting bankroll and targets, admins handle the rest',
      },
      {
        pt: 'Troca de senha obrigatória no primeiro acesso e restauração pelo administrador',
        en: 'Mandatory password change on first login and admin-side password reset',
      },
      {
        pt: 'Worker agendado que coleta dados de fontes públicas, com modo mock para rodar sem API externa',
        en: 'Scheduled worker pulling data from public sources, with a mock mode that runs with no external API',
      },
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    links: [
      { kind: 'live', url: 'https://banca-app-pied.vercel.app' },
      { kind: 'repo', url: 'https://github.com/cesar1014/BancaApp' },
    ],
  },
  {
    id: 'budget',
    name: 'MeuRelatório',
    year: '2026',
    categories: ['fullstack'],
    tagline: {
      pt: 'Relatórios financeiros por projeto, com exportação em Excel, CSV e PDF',
      en: 'Per-project financial reporting, exporting to Excel, CSV and PDF',
    },
    description: {
      pt: 'Aplicação para acompanhar lançamentos e tópicos de despesa de vários projetos ao mesmo tempo, com controle de acesso por perfil e por projeto. Os resumos podem ser abertos por período, por tópico ou por grupo, e o painel administrativo cuida de projetos, usuários e permissões. A persistência aceita tanto JSON local quanto Supabase.',
      en: 'An app for tracking entries and expense topics across several projects at once, with access control by role and by project. Summaries can be opened by period, topic or group, and the admin panel manages projects, users and permissions. Persistence works against either local JSON or Supabase.',
    },
    highlights: [
      {
        pt: 'Controle de acesso em dois eixos — por perfil de usuário e por projeto',
        en: 'Two-axis access control — by user role and by project',
      },
      {
        pt: 'Exportação em três formatos, com PDFKit e xlsx-populate no back-end',
        en: 'Export in three formats, driven by PDFKit and xlsx-populate on the back end',
      },
      {
        pt: 'Camada de persistência trocável: JSON local para desenvolver, Supabase em produção',
        en: 'Swappable persistence layer: local JSON for development, Supabase in production',
      },
    ],
    stack: ['Node.js', 'Express', 'React', 'Vite', 'Tailwind CSS', 'Supabase'],
    links: [
      { kind: 'live', url: 'https://budget-ha.vercel.app' },
      { kind: 'repo', url: 'https://github.com/cesar1014/BudgetHA' },
    ],
  },
  {
    id: 'ifplanner',
    name: 'IFPlanner',
    year: '2024',
    categories: ['mobile'],
    tagline: {
      pt: 'App mobile de agendamento com banco local, biometria e backup em arquivo',
      en: 'Mobile scheduling app with a local database, biometrics and file backup',
    },
    description: {
      pt: 'Aplicativo React Native construído com Expo para organizar compromissos direto no aparelho. Os dados ficam em SQLite local, o acesso é protegido por autenticação biométrica do sistema e o usuário consegue exportar e importar o próprio backup em arquivo. Calendário, anexos de imagem e listas de alta performance completam o fluxo.',
      en: 'A React Native app built with Expo for organizing appointments straight on the device. Data lives in local SQLite, access is protected by the system biometric authentication, and the user can export and import their own backup file. Calendar, image attachments and high-performance lists round out the flow.',
    },
    highlights: [
      {
        pt: 'SQLite embarcado — o app é totalmente funcional sem servidor e sem conta',
        en: 'Embedded SQLite — the app is fully functional with no server and no account',
      },
      {
        pt: 'Desbloqueio por biometria com expo-local-authentication',
        en: 'Biometric unlock through expo-local-authentication',
      },
      {
        pt: 'Backup e restauração em zip, com seletor de documentos e compartilhamento nativo',
        en: 'Zip backup and restore, with a document picker and native sharing',
      },
    ],
    stack: ['React Native', 'Expo', 'SQLite', 'React Navigation', 'FlashList'],
    links: [{ kind: 'repo', url: 'https://github.com/cesar1014/APPAgendamento' }],
  },
  {
    id: 'site-draco',
    name: 'Site do Draco',
    year: '2026',
    categories: ['landing'],
    tagline: {
      pt: 'Landing page do Draco, com paralaxe 3D e campo de estrelas no scroll',
      en: 'The Draco landing page, with 3D parallax and a starfield on scroll',
    },
    description: {
      pt: 'A página abre limpa: a logo do Draco com paralaxe 3D, que se inclina conforme o mouse passa, e os dois botões que importam — entrar no site e baixar o instalador. Ao descer, a mesma logo se espalha pelo fundo como um campo de estrelas. Todo o conteúdo, links e números vivem num único arquivo de dados, então publicar uma versão nova do app é editar uma linha.',
      en: 'The page opens clean: the Draco logo with 3D parallax that tilts as the mouse moves, and the two buttons that matter — open the app and download the installer. As you scroll, that same logo scatters across the background as a starfield. All content, links and numbers live in a single data file, so shipping a new app version means editing one line.',
    },
    highlights: [
      {
        pt: 'Paralaxe 3D reagindo ao mouse, com variants e curvas compartilhadas em Framer Motion',
        en: '3D parallax reacting to the mouse, with shared Framer Motion variants and curves',
      },
      {
        pt: 'Conteúdo inteiro centralizado em um único módulo de dados',
        en: 'All content centralized in a single data module',
      },
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Framer Motion', 'Lucide'],
    links: [
      { kind: 'live', url: 'https://site-draco.vercel.app' },
      { kind: 'repo', url: 'https://github.com/cesar1014/SiteDraco' },
    ],
  },
  {
    id: 'emporio',
    name: 'Empório Burger',
    year: '2026',
    categories: ['landing'],
    tagline: {
      pt: 'Landing page premium de hamburgueria, construída para converter',
      en: 'Premium burger-joint landing page, built for conversion',
    },
    description: {
      pt: 'Página construída com foco total em performance e conversão: tema escuro nativo, tipografia refinada, animações de entrada e scroll reveal, e links diretos para WhatsApp, Maps e cardápio digital. O objetivo é que o cliente sinta vontade de comer só de olhar, e chegue ao contato em um toque.',
      en: 'A page built entirely around performance and conversion: native dark theme, refined typography, entrance animations and scroll reveal, plus direct links to WhatsApp, Maps and the digital menu. The goal is for a visitor to get hungry just from looking, and to reach contact in one tap.',
    },
    highlights: [
      {
        pt: 'Carregamento instantâneo com Vite e Tailwind, sem framework pesado',
        en: 'Instant loads with Vite and Tailwind, no heavy framework',
      },
      {
        pt: 'Motion design de entrada e scroll reveal em todas as seções',
        en: 'Entrance motion design and scroll reveal across every section',
      },
    ],
    stack: ['Vite', 'Tailwind CSS', 'JavaScript', 'GitHub Pages'],
    links: [
      { kind: 'live', url: 'https://cesar1014.github.io/Emporio_Burger/' },
      { kind: 'repo', url: 'https://github.com/cesar1014/Emporio_Burger' },
    ],
  },
  {
    id: 'unico-sushi',
    name: 'Único Sushi Bar',
    year: '2026',
    categories: ['landing'],
    tagline: {
      pt: 'Identidade digital de um sushi bar, com tipografia em escala editorial',
      en: 'Digital identity for a sushi bar, with editorial-scale typography',
    },
    description: {
      pt: 'Landing de restaurante construída em torno de tipografia gigante e imagem em tela cheia. O layout usa escalas tipográficas que vão de telas pequenas até 12rem no desktop, mantendo a mesma hierarquia visual em qualquer largura.',
      en: 'A restaurant landing built around oversized type and full-bleed imagery. The layout uses typographic scales that run from small screens up to 12rem on desktop, holding the same visual hierarchy at any width.',
    },
    highlights: [
      {
        pt: 'Escala tipográfica responsiva de ponta a ponta, sem quebra de hierarquia',
        en: 'End-to-end responsive type scale, with no break in hierarchy',
      },
    ],
    stack: ['HTML', 'Tailwind CSS', 'GitHub Pages'],
    links: [
      { kind: 'live', url: 'https://cesar1014.github.io/UnicoSushi/' },
      { kind: 'repo', url: 'https://github.com/cesar1014/UnicoSushi' },
    ],
  },
  {
    id: 'peocon',
    name: 'PEOCON',
    year: '2026',
    categories: ['landing'],
    tagline: {
      pt: 'Site institucional sobre identidade e equidade, com galeria de impacto',
      en: 'Institutional site on identity and equity, with an impact gallery',
    },
    description: {
      pt: 'Site institucional de um programa social, com seções de território, galeria de impacto e uma paleta própria construída para o projeto. O tom é o oposto das landings comerciais: mais editorial, mais espaço, mais leitura.',
      en: 'The institutional site for a social program, with territory sections, an impact gallery and a palette built specifically for the project. The tone is the opposite of a commercial landing: more editorial, more space, more reading.',
    },
    highlights: [
      {
        pt: 'Paleta e tokens próprios, estendendo o Tailwind com as cores da marca',
        en: 'Custom palette and tokens, extending Tailwind with the brand colors',
      },
    ],
    stack: ['HTML', 'Tailwind CSS', 'JavaScript', 'GitHub Pages'],
    links: [
      { kind: 'live', url: 'https://cesar1014.github.io/SitePeocon/' },
      { kind: 'repo', url: 'https://github.com/cesar1014/SitePeocon' },
    ],
  },
  {
    id: 'capsula',
    name: 'Cápsula de Memórias',
    year: '2023',
    categories: ['fullstack'],
    tagline: {
      pt: 'Linha do tempo de memórias com texto, foto e vídeo',
      en: 'A memory timeline with text, photos and video',
    },
    description: {
      pt: 'Aplicação onde o usuário monta uma linha do tempo dos próprios acontecimentos marcantes, organizada por mês e ano, misturando texto, fotos e vídeos. Foi o projeto em que a modelagem de dados com Prisma e a separação entre API e cliente passaram a fazer sentido de verdade.',
      en: 'An app where the user builds a timeline of their own defining moments, organized by month and year, mixing text, photos and video. It was the project where data modeling with Prisma and the split between API and client really clicked.',
    },
    highlights: [
      {
        pt: 'Modelagem e migrações com Prisma sobre uma API própria em Node.js',
        en: 'Modeling and migrations with Prisma over a hand-built Node.js API',
      },
    ],
    stack: ['TypeScript', 'Node.js', 'Prisma', 'React'],
    links: [{ kind: 'repo', url: 'https://github.com/cesar1014/app-web-capsula-de-memorias' }],
  },
]
