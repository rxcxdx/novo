import { useState } from 'react'
import { fetcherIndice } from './api'
import { Rolagem } from './rolagem'
import dayjs from 'dayjs'

const DIA_ATUAL = dayjs().format('YYYY-MM-DD')

export default function Indice() {
  const [joker, setJoker] = useState(DIA_ATUAL)
  const [state, setState] = useState()

  const action = async () => {
    const rs = await fetcherIndice(joker)
    setState(rs)
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

      {Array.isArray(state) && <Rolagem docs={state} />}
      
    </div>
  )
}
