import { Link } from 'react-router'
import { useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

const ESTILO_LINK = 'text-blue-600'

function GoVenda() {
  const [state, setState] = useState('')
  return (
    <div className="w-xs border border-dashed p-1">
      <div>
        <input
          value={state}
          type="text"
          className="border w-full"
          onChange={(evt) => {
            setState(evt.target.value)
          }}
        />
      </div>
      <div>
        <Link className={ESTILO_LINK} to={'/venda/' + state}>
          venda
        </Link>
      </div>
    </div>
  )
}

function Vermelho() {
  const { showBoundary } = useErrorBoundary()
  return (
    <div className="text-red-600">
      <button
        className="border"
        onClick={() => {
          showBoundary(new Error('meu errinho'))
        }}
      >
        vermelho
      </button>
    </div>
  )
}

export function BoxHome() {
  return (
    <div>
      <div className="w-xs border border-dashed p-1">
        <div className="font-bold">Bold text</div>
        <div className="italic">Italic text</div>
      </div>
      <br />
      <div className="w-xs border border-dashed p-1">
        <div>
          <Link className={ESTILO_LINK} to="/novo_produto">
            novo_produto
          </Link>
        </div>
        <div>
          <Link className={ESTILO_LINK} to="/sandbox">
            sandbox
          </Link>
        </div>
      </div>
      <br />
      <GoVenda />
      <br />
      <Vermelho />
    </div>
  )
}
