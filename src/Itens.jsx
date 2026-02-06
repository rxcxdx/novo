import { useState } from 'react'
import { fetcherItens } from './api'
import JsonView from '@uiw/react-json-view'
import { ISO_DATE } from './utils'

export default function Itens() {
  const [docs, setDocs] = useState([])
  const [joker, setJoker] = useState(ISO_DATE)
  const tarefa = async () => {
    const rs = await fetcherItens(joker)
    setDocs(rs)
  }

  return (
    <div>
      <div className="mb-2">
        <input
          className="border w-48"
          type="date"
          value={joker}
          onChange={(evt) => setJoker(evt.target.value)}
        />
      </div>
      <div>
        <button onClick={tarefa} className="border">
          pesquisar
        </button>
      </div>
      <br />
      <JsonView
        value={docs}
        enableClipboard={false}
        displayDataTypes={false}
      />
    </div>
  )
}
