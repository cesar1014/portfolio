import './Backdrop.css'

/** Colunas do grid impresso que ficam visíveis atrás de tudo. */
const COLUMNS = [0, 1, 2, 3, 4]

/**
 * Fundo da página: os fios verticais de um grid de diagramação,
 * uma única lavagem de luz quente no alto e uma camada de grão.
 * Puro CSS — nada custa JavaScript durante o scroll.
 */
export function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__wash" />
      <div className="backdrop__columns">
        {COLUMNS.map((column) => (
          <span key={column} className="backdrop__column" />
        ))}
      </div>
      <div className="backdrop__grain" />
    </div>
  )
}
