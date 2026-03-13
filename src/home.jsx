import { toast } from 'sonner'
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
    <div>
      <div className="text-red-600">
        <button
          className="bg-red-300"
          onClick={() => {
            showBoundary(new Error('meu errinho'))
          }}
        >
          vermelho
        </button>
      </div>
    </div>
  )
}

function Torradas() {
  const elemento = (
    <div>
      <div>linha1</div>
      <div>linha2</div>
      <div>linha3</div>
      <div>linha4</div>
    </div>
  )
  const simples = () => {
    toast('linha1', {
      description: 'linha2',
      duration: 1000,
      icon: null,
      closeButton: true
    })
  }
  const complexa = () => {
    toast(elemento, {
      icon: null
    })
  }
  return (
    <div>
      <button className="border" onClick={simples}>
        torrada simples
      </button>
      &nbsp;
      <button className="border" onClick={complexa}>
        torrada complexa
      </button>
      &nbsp;
    </div>
  )
}

export function BoxHome() {
  return (
    <div>
      <GoVenda />
      <br />

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
        <div>
          <Link className={ESTILO_LINK} to="/timeline_vendas">
            timeline_vendas
          </Link>
        </div>
      </div>

      <br />

      <Torradas />
      <br />
      <Vermelho />
    </div>
  )
}
