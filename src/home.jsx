import { Link } from 'react-router'
import { useErrorBoundary } from 'react-error-boundary'

function Vermelho() {
  const { showBoundary } = useErrorBoundary()
  return (
    <div>
      <button
        className="bg-red-300 border p-1"
        onClick={() => {
          showBoundary(Error('meu errinho'))
        }}
      >
        Vermelho
      </button>
    </div>
  )
}

export function BoxHome() {
  return (
    <div>
      <div>
        <Link to="/novo_produto">Novo produto</Link>
      </div>
      <br />
      <Vermelho />
      <br />
      <div className="italic">itálico</div>
      <div className="font-bold">negrito</div>
      <div className="underline">sublinhado</div>
    </div>
  )
}
