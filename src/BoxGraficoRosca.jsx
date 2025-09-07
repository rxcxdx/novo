import { useRef, useState, useTransition } from 'react'
import delay from 'delay'
import axios from 'axios'
import dayjs from 'dayjs'
import { GraficoRosca } from './graficos'

const estadoInicial = dayjs().format('YYYY-MM')

export default function BoxGraficoRosca() {
  const [state, setState] = useState()
  const ref = useRef()
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    const v = ref.current.value
    await delay(800)
    const response = await axios('/ws/grafico_usernames/' + v)
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
      <br />

      {state && <GraficoRosca dataSource={state} />}
    </div>
  )
}
