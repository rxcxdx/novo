import { Link } from 'react-router'
import { useState } from 'react'

const ESTILO_LINK = 'underline text-blue-600'

function GoVendaId() {
  const [state, setState] = useState('')
  return (
    <div className="w-xs">
      <div>
        <input
          value={state}
          type="text"
          className="border-2 w-full"
          onChange={(evt) => {
            setState(evt.target.value)
          }}
        />
      </div>
      <div>
        <Link className="underline text-blue-600" to={'/venda/' + state}>
          venda
        </Link>
      </div>
    </div>
  )
}

export default function BoxHome() {
  return (
    <div>
      <div className="w-xs border border-dashed p-2">
        <div>w-40</div>
        <div className="font-bold">Bold text</div>
        <div className="italic">Italic text</div>
        <div className="underline">Underling text</div>
      </div>
      <br />
      <div className="w-xs border border-dashed p-2">
        <div>w-xs</div>
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
      <div>
        <GoVendaId />
      </div>
    </div>
  )
}
