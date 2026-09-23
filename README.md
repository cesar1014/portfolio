# Portfólio — Cesar Santana

Portfólio pessoal em React 18 + TypeScript + Vite. Bilíngue (PT/EN), tema escuro por
padrão com alternância para o claro, identidade editorial em azul e preto, e animações
em Framer Motion.

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # typecheck + bundle em dist/
npm run preview  # serve o dist/ para conferir
```

---

## O que tem no site

| Seção | Conteúdo |
| --- | --- |
| Início | Nome revelado por máscara, papel rotativo e retrato emoldurado com marcas de corte |
| Sobre | Texto de apresentação e quatro números que sobem ao entrar na tela |
| Projetos | Dez projetos do GitHub, numerados, com filtro por categoria e cartão expansível |
| Stack | Seis grupos de ferramentas, incluindo design e audiovisual |
| Trajetória | Linha do tempo com o trilho que se preenche conforme a página desce |
| Contato | E-mail com botão de copiar e redes |

Todos os links marcados como **Ver ao vivo** foram verificados respondendo 200.

---

## Onde mexer

Quase nada de conteúdo está dentro de componente. Para editar o site, mexa em `src/data/`:

| O que | Arquivo |
| --- | --- |
| Projetos: nome, descrição, stack, categorias, links | `src/data/projects.ts` |
| Nome, e-mail, LinkedIn, GitHub, localização | `src/data/profile.ts` |
| Papéis que giram no início, grupos de skills, fita de tecnologias, trajetória | `src/data/profile.ts` |
| Todo texto de interface, nos dois idiomas | `src/data/copy.ts` |
| Cores, fontes, espaçamentos, raios, curvas | `src/styles/global.css` |
| Sua foto | `src/assets/avatar.jpg` — substitua o arquivo, mantendo o nome |

### Adicionar um projeto

Acrescente um objeto ao array em `src/data/projects.ts`. O tipo `Project`
(em `src/data/types.ts`) obriga a preencher as duas traduções de cada texto, então
não dá para esquecer o inglês. `featured: true` faz o cartão ocupar as duas colunas.
`categories` é uma lista: um projeto pode aparecer em mais de um filtro — o Meu Ponto
está em `['fullstack', 'mobile']` porque é uma PWA instalável no celular.

### Trocar o idioma padrão

Em `src/context/AppProvider.tsx`, no `useState` de `lang`. Hoje ele abre em português
para qualquer visitante; a escolha da pessoa fica guardada em `localStorage`.

---

## Estrutura

```text
src/
├── main.tsx                 # entrada: providers + App
├── App.tsx                  # ordem das seções
├── data/                    # todo o conteúdo do site
│   ├── types.ts             # Project, Localized, Lang
│   ├── projects.ts
│   ├── profile.ts
│   └── copy.ts              # textos de interface, PT e EN
├── context/
│   ├── app-context.ts       # contexto + hook useApp()
│   └── AppProvider.tsx      # estado de tema e idioma
├── hooks/
│   ├── useScrollSpy.ts      # seção ativa na navegação
│   ├── useMagnetic.ts       # elemento que acompanha o ponteiro
│   └── useMediaQuery.ts     # ponteiro fino, movimento reduzido
├── lib/motion.ts            # variants e curvas compartilhadas
├── styles/global.css        # tokens, reset, botões, cartões
└── components/              # pasta plana, CSS ao lado de cada componente
```

---

## Identidade visual

A direção é **editorial impressa**: tipografia serifada grande, fios de 1px no lugar
de sombras difusas, cantos quase retos e um único acento azul. Três recursos comuns
em template ficaram de fora de propósito — gradiente roxo-para-ciano, manchas
coloridas de fundo e texto com preenchimento em gradiente. O contraste tipográfico
vem do itálico do Instrument Serif, e não de cor sobre cor.

| Papel | Fonte |
| --- | --- |
| Títulos e números | Instrument Serif (só peso 400 — peça escala a ela, nunca peso) |
| Texto corrido e botões | Archivo |
| Metadados, etiquetas, ano, numeração | IBM Plex Mono |

As animações principais: revelação de títulos por máscara (`Reveal`), botão que
acompanha o ponteiro (`useMagnetic`), cortina e paralaxe no retrato, fio de acento
que cresce no cartão de projeto, trilho da trajetória que se preenche no scroll,
contadores e a fita de tecnologias.

## Decisões que valem saber

**Tema sem flash.** Um script curto no `index.html` lê o `localStorage` e aplica
`data-theme` antes do primeiro paint. Sem ele, quem escolheu o tema claro veria um
quadro escuro a cada carregamento.

**Sem `backdrop-filter` em nada.** O header fixo usava desfoque de fundo, mas
`backdrop-filter` sobre uma página com fundo animado obriga o compositor a
reamostrar o viewport inteiro a cada frame — em alguns navegadores isso chegou a
deixar o quadro em branco durante o scroll. O header usa um fundo quase opaco, que
dá a mesma leitura sem esse custo.

**O `Reveal` anima com objeto, não com rótulo de variante.** Os títulos ficam dentro
de blocos que já são pais de variantes com `staggerChildren`. Um rótulo (`animate="show"`)
entraria nessa árvore e ficaria esperando um comando de orquestração que não chega,
e as palavras ficam paradas fora da máscara — invisíveis. Com `animate={{ y: '0%' }}`
em forma de objeto, cada palavra se anima sozinha e a cascata vem da conta no `delay`.

**Fundo barato.** O fundo são os fios verticais de um grid de diagramação, uma
lavagem de luz e grão de filme. A camada de grão cobre só o viewport e se move por
`background-position`; um elemento gigante com `transform` animado vira uma layer de
vários megapixels e trava a composição.

**Movimento reduzido é respeitado.** Quem marcou "reduzir movimento" no sistema não
recebe cursor customizado, botão magnético, paralaxe no retrato, grão animado nem
contadores subindo — os números aparecem prontos.

**O cursor customizado só existe com mouse.** Em toque, o componente não renderiza e
o `cursor: none` nunca é aplicado.

---

## Publicar

**Vercel** — importe o repositório; a Vercel detecta Vite sozinha (`npm run build`,
saída em `dist`). Nada a configurar.

**GitHub Pages** — `vite.config.ts` já usa `base: './'`, então o build funciona
também em subpasta (`usuario.github.io/repo/`). Suba o conteúdo de `dist/` na branch
`gh-pages` ou aponte o Pages para ela.

---

## Manutenção

**Números da seção Sobre** (`STATS` em `src/components/About.tsx`): "projetos no ar" é
contado do array de projetos e não envelhece. Os outros três são digitados — 2 sistemas
em produção, 3 plataformas, 2022. Contagem de repositórios e de linguagens ficou de fora
de propósito: a maior parte dos 43 repositórios é exercício de aula, e "9 linguagens"
contava Dockerfile, Shell e CSS.

**Ferramentas de design e audiovisual** (`skillGroups` em `src/data/profile.ts`, grupo
`craft`): a lista é o conjunto mais comum da função, não uma leitura do seu dia a dia.
Tire o que você não usa.
