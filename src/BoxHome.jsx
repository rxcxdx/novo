import { Link } from 'react-router'
import { MdHome } from 'react-icons/md'
import { useState } from 'react'

function GoVendaId() {
  const [state, setState] = useState('')
  return (
    <div className="w-xs bg-yellow-100 border border-dashed p-2">
       
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
          <Link to={'/venda/' + state}>abrir venda</Link>
        </div>
       
    </div>
  )
}

export default function BoxHome() {
  return (
    <div>

      <div>
        <MdHome size="3em" />
      </div>

      <br />

      <div className="w-32 bg-yellow-100 border border-dashed p-2">
        <div className="font-bold">Bold text</div>
        <div className="italic">Italic text</div>
      </div>

      <br />

      <div className="w-40 bg-yellow-100 border border-dashed p-2">
        <div>
          <Link to="/novo_produto">Novo produto</Link>
        </div>
        <div>
          <Link to="/sandbox">Sandbox</Link>
        </div>
      </div>

      <br />



      <div>
        <GoVendaId />
      </div>



    </div>
  )
}
