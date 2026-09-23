export type Lang = 'pt' | 'en'

/** Texto que existe nos dois idiomas. Todo conteúdo visível usa este formato. */
export type Localized = Record<Lang, string>

export type ProjectCategory = 'fullstack' | 'mobile' | 'landing'

export type LinkKind = 'live' | 'repo' | 'download'

export interface ProjectLink {
  kind: LinkKind
  url: string
}

export interface Project {
  /** slug estável, usado como key do React e como âncora */
  id: string
  name: string
  /** uma linha, aparece sempre no card */
  tagline: Localized
  /** parágrafo, aparece quando o card abre */
  description: Localized
  /** o que o projeto resolve de fato, em 1 a 4 marcadores */
  highlights: Localized[]
  stack: string[]
  /** uma ou mais; o filtro casa se qualquer uma bater */
  categories: ProjectCategory[]
  year: string
  /** destaque ocupa as duas colunas do grid */
  featured?: boolean
  links: ProjectLink[]
}
