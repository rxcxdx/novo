import { useRef, useState, useTransition } from 'react'
import { GraficoBarra } from './graficos'
import delay from 'delay'
import axios from 'axios'
import dayjs from 'dayjs'

const estadoInicial = dayjs().format('YYYY-MM')

export default function BoxGraficoBarra() {
  const [state, setState] = useState()
  const ref = useRef()
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    const v = ref.current.value
    await delay(800)
    const response = await axios('/ws/grafico_dias/' + v)
    setState(response.data)
  }
  return (
    <div>
      <div>mês</div>
      <div>
        <input defaultValue={estadoInicial} type="month" ref={ref} />
        &nbsp;
        <button onClick={() => startTransition(action)} disabled={isPending}>
          pesquisar
        </button>
      </div>

      {state && <div>
        <div>linhas: {state.length}</div>
        <GraficoBarra dataSource={state} />
      </div>}

    </div>
  )
}
