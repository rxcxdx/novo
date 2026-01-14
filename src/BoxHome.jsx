import { Link } from 'react-router'
import { MdHome } from 'react-icons/md'
import { useState } from 'react'

function GoVendaId() {
  const [state, setState] = useState('')
  return (
    <div>
       
       <div className='flex gap-3'>
       <input
          value={state}
          type="text"
          placeholder='venda'
          className="border-2 w-xs"
          onChange={(evt) => {
            setState(evt.target.value)
          }}
        />

        <Link to={'/venda/' + state}>ver</Link>
       </div>
    </div>
  )
}

export default function BoxHome() {
  return (
    <div>
      <div>
        <MdHome size="2em" />
      </div>

      <div className="w-32 bg-yellow-100 border border-dashed p-2">
        <div className="font-bold">Bold text</div>
        <div className="italic">Italic text</div>
      </div>

      <br />

      <div className="w-xs bg-yellow-100 border border-dashed p-2">
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
