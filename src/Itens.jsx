import { useState } from 'react'
import { fetcherItens } from './api'
import dayjs from 'dayjs'
import JsonView from '@uiw/react-json-view'

const DIA_ATUAL = dayjs().format('YYYY-MM-DD')

export default function Itens() {
  const [joker, setJoker] = useState(DIA_ATUAL)
  const [state, setState] = useState([])
  const action = async () => {
    const rs = await fetcherItens(joker)
    setState(rs)
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
        <button onClick={action} className="border">
          pesquisar
        </button>
      </div>
      <JsonView
        value={state}
        enableClipboard={false}
        displayDataTypes={false}
      />
    </div>
  )
}
