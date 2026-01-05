import { useState } from 'react'
import { fetcherGrafico } from './api'
import { Bar, BarChart, Legend, XAxis } from 'recharts'
import dayjs from 'dayjs'
import { toast } from 'sonner';

const MES_ATUAL = dayjs().format('YYYY-MM')

function GraficoBarra({ lista }) {
  return (
    <div className='bg-green-100'>
            <div className='text-xs'>Quantidade de vendas para dia</div>      
      <BarChart data={lista} width={350} height={250} >
        <Bar isAnimationActive={false} dataKey="vendas" fill="#8884d8" />
        <XAxis dataKey="dia" />
        <Legend />
      </BarChart>
    </div>
  )
}

export function BoxGrafico() {
  const [joker,setJoker] = useState(MES_ATUAL)
  const [state, setState] = useState()


  const tarefa = async () => {
    try {
      const rs = await fetcherGrafico(joker)
      setState(rs)
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <div>

      <div className='mb-2'>
        <input className='border w-48' type='month' value={joker} onChange={evt => setJoker(evt.target.value)} />
      </div>             



      <div>
        <button
        className='border'
          onClick={tarefa}
        >
          pesquisar
        </button>
      </div>

      <br />      
      {Array.isArray(state) && <GraficoBarra lista={state} />}
    </div>
  )
}
