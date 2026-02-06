import { useState } from 'react'
import { fetcherIndice } from './api'
import { Link } from 'react-router'
import { truncate } from 'lodash-es'
import { ISO_DATE } from './utils'

export function LinkVenda({ value }) {
  return <Link to={'/venda/' + value}>{truncate(value, { length: 10 })}</Link>
}

function Rolagem({docs}) {
  const lista = docs.map((o) => {
    return (
      <div key={o._id}>
        <LinkVenda value={o._id} />
        &nbsp;&nbsp;
        <span>{o.hora}</span>
        </div>
    )
  })
  return (
    <div>
      <div>tamanho: {docs.length}</div>
      <div className="w-xs bg-yellow-100 h-48 overflow-auto">
        {lista}
      </div>
    </div>
  )
}

export function Indice() {
  const [docs, setDocs] = useState()
  const [joker, setJoker] = useState(ISO_DATE)
  const action = async () => {
    const rs = await fetcherIndice(joker)
    setDocs(rs)
  }
  return (
    <div>
      <div className='mb-2'>
      <input
          className="border w-48"
          type="date"
          value={joker}
          onChange={(evt) => setJoker(evt.target.value)}
        />
      </div>       
      <div>
        <button onClick={action} className="border">
          pesquisar
        </button>
      </div>
      {Array.isArray(docs) && <Rolagem docs={docs} />}      
    </div>
  )
}
