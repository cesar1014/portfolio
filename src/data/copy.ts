import type { Localized } from './types'

/**
 * Todo texto de interface do site. Cada chave tem as duas versões
 * lado a lado, para que traduzir seja editar uma linha e não caçar strings.
 */
export const copy = {
  nav: {
    home: { pt: 'Início', en: 'Home' },
    about: { pt: 'Sobre', en: 'About' },
    work: { pt: 'Projetos', en: 'Work' },
    stack: { pt: 'Stack', en: 'Stack' },
    path: { pt: 'Trajetória', en: 'Path' },
    contact: { pt: 'Contato', en: 'Contact' },
  },

  hero: {
    badge: { pt: 'Disponível para novas oportunidades', en: 'Open to new opportunities' },
    greeting: { pt: 'Olá, eu sou', en: 'Hi, I am' },
    lead: {
      pt: 'Design, código e câmera. Sou produtor audiovisual e designer no Hospital de Amor, e construo aplicações que aguentam o mundo real — chamadas em tempo real, sistemas que funcionam sem internet e interfaces que as pessoas gostam de usar.',
      en: 'Design, code and camera. I am an audiovisual producer and designer at Hospital de Amor, and I build applications that hold up in the real world — real-time calls, systems that work with no connection, and interfaces people enjoy using.',
    },
    ctaWork: { pt: 'Ver projetos', en: 'See my work' },
    ctaContact: { pt: 'Falar comigo', en: 'Get in touch' },
    scroll: { pt: 'role para descobrir', en: 'scroll to explore' },
  },

  about: {
    eyebrow: { pt: 'Sobre', en: 'About' },
    title: {
      pt: 'Quem desenha a tela também constrói a tela',
      en: 'The person who designs the screen also builds it',
    },
    p1: {
      pt: 'Sou produtor audiovisual e designer no Hospital de Amor, referência em tratamento de câncer na América Latina, e desenvolvedor full stack. Estou no último semestre de Análise e Desenvolvimento de Sistemas no IFSP.',
      en: 'I am an audiovisual producer and designer at Hospital de Amor — Latin America’s reference center for cancer treatment — and a full stack developer. I am in the final semester of Systems Analysis and Development at IFSP.',
    },
    p2: {
      pt: 'O design não veio antes do código. Ele veio por causa dele. Comecei estudando front-end, e foi mexendo em grid, hierarquia, contraste e ritmo que eu virei designer. Por isso eu não entrego layout e implementação como duas etapas separadas: para mim é a mesma decisão, tomada duas vezes.',
      en: 'Design did not come before the code. It came because of it. I started out studying front-end, and it was through grid, hierarchy, contrast and rhythm that I became a designer. That is why I do not hand over layout and implementation as two separate stages — to me they are one decision, made twice.',
    },
    p3: {
      pt: 'No hospital eu produzo vídeo e desenho peças para um público que, na maioria das vezes, não está num bom dia. Isso ensina uma coisa que nenhum curso ensina: clareza não é estética, é responsabilidade. Levei essa régua para o software. O que importa não é a tela bonita da demonstração — é o que acontece quando a rede cai, quando duas pessoas editam a mesma coisa, ou quando alguém precisa fechar um relatório às sete da noite.',
      en: 'At the hospital I produce video and design pieces for an audience that, most of the time, is not having a good day. That teaches something no course does: clarity is not an aesthetic, it is a responsibility. I brought that standard into software. What matters is not the pretty demo screen — it is what happens when the network drops, when two people edit the same thing, or when someone has to close a report at seven in the evening.',
    },
    p4: {
      pt: 'Foi daí que saíram o Meu Ponto, uma PWA de controle de jornada que registra o ponto mesmo sem internet e sincroniza sozinha depois, e o Draco, uma plataforma de chamadas em grupo que fiz do zero com WebRTC, servidor próprio e aplicativo para Windows.',
      en: 'That is where Meu Ponto came from — a time-tracking PWA that records an entry even with no connection and syncs on its own afterwards — and Draco, a group call platform I built from scratch with WebRTC, my own server and a Windows app.',
    },
    pitch: {
      pt: 'Se você precisa de alguém que desenha a interface, escreve o código que a faz funcionar e ainda grava o vídeo que apresenta ela, sem passar por três fornecedores — é isso que eu faço.',
      en: 'If you need someone who designs the interface, writes the code that makes it work and shoots the video that presents it, without going through three separate vendors — that is what I do.',
    },
    // Rótulo curto na frente, detalhe na legenda. Juntos eles
    // quebravam em duas linhas e deixavam palavra órfã.
    stats: {
      live: { pt: 'projetos no ar', en: 'projects live' },
      liveNote: { pt: 'todos clicáveis daqui', en: 'all clickable from here' },
      production: { pt: 'sistemas em produção', en: 'systems in production' },
      productionNote: { pt: 'Hospital de Amor', en: 'Hospital de Amor' },
      platforms: { pt: 'plataformas', en: 'platforms' },
      platformsNote: { pt: 'web, mobile e desktop', en: 'web, mobile and desktop' },
    },
  },

  work: {
    eyebrow: { pt: 'Projetos', en: 'Selected work' },
    title: { pt: 'Coisas que eu construí', en: 'Things I have built' },
    subtitle: {
      pt: 'Uma seleção do que está no meu GitHub. Todos os links abaixo levam para o projeto rodando ou para o código.',
      en: 'A selection of what is on my GitHub. Every link below goes to the running project or to the source.',
    },
    filters: {
      all: { pt: 'Todos', en: 'All' },
      fullstack: { pt: 'Full stack', en: 'Full stack' },
      mobile: { pt: 'Mobile', en: 'Mobile' },
      landing: { pt: 'Landing pages', en: 'Landing pages' },
    },
    featured: { pt: 'Destaque', en: 'Featured' },
    live: { pt: 'Ver ao vivo', en: 'View live' },
    repo: { pt: 'Código', en: 'Source' },
    download: { pt: 'Baixar app', en: 'Download app' },
    more: { pt: 'Ler mais', en: 'Read more' },
    less: { pt: 'Fechar', en: 'Close' },
    viewAll: { pt: 'Ver tudo no GitHub', en: 'See everything on GitHub' },
  },

  stack: {
    eyebrow: { pt: 'Stack', en: 'Stack' },
    title: { pt: 'O que eu abro todo dia', en: 'What I open every day' },
    subtitle: {
      pt: 'Não é uma lista de tudo que já passou pela minha frente — é o que eu abro sem pensar quando um projeto começa, dos dois lados do trabalho.',
      en: 'Not a list of everything I have ever touched — it is what I reach for without thinking when a project starts, on both sides of the work.',
    },
  },

  path: {
    eyebrow: { pt: 'Trajetória', en: 'Path' },
    title: { pt: 'Como cheguei até aqui', en: 'How I got here' },
    now: { pt: 'agora', en: 'now' },
  },

  contact: {
    eyebrow: { pt: 'Contato', en: 'Contact' },
    title: { pt: 'Vamos construir alguma coisa', en: 'Let us build something' },
    lead: {
      pt: 'Estou aberto a oportunidades como desenvolvedor full stack ou em funções que juntem produto, design e código — presencial na região de Barretos ou remoto. Se você tem um projeto em mente, ou só quer trocar ideia, me manda uma mensagem.',
      en: 'I am open to full stack developer roles, or to roles that put product, design and code in the same pair of hands — on-site around Barretos or remote. If you have a project in mind, or just want to talk, send me a message.',
    },
    emailMe: { pt: 'Enviar e-mail', en: 'Send an email' },
    copy: { pt: 'Copiar e-mail', en: 'Copy email' },
    copied: { pt: 'Copiado', en: 'Copied' },
    availability: { pt: 'Respondo em até 24h', en: 'I reply within 24h' },
  },

  footer: {
    built: {
      pt: 'Feito com React, TypeScript e Vite. Tipografia em Instrument Serif, Archivo e IBM Plex Mono.',
      en: 'Built with React, TypeScript and Vite. Type set in Instrument Serif, Archivo and IBM Plex Mono.',
    },
    rights: { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
    top: { pt: 'Voltar ao topo', en: 'Back to top' },
  },

  a11y: {
    toggleTheme: { pt: 'Alternar entre tema claro e escuro', en: 'Toggle between light and dark theme' },
    toggleLang: { pt: 'Mudar o idioma do site', en: 'Change the site language' },
    openMenu: { pt: 'Abrir o menu', en: 'Open the menu' },
    closeMenu: { pt: 'Fechar o menu', en: 'Close the menu' },
  },
} satisfies Record<string, Record<string, Localized | Record<string, Localized>>>
