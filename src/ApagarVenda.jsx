import { ProtecaoBasic } from './fallbacks'
import axios from 'axios'
import delay from 'delay'
import { useRef } from 'react'
import { toast } from 'sonner'

export default function ApagarVenda() {
  const ref = useRef()
  const tarefa = async () => {
    await delay(1000)
    await axios.delete('/ws/vendas/' + ref.current.value)
    ref.current.value = ''
  }
  return (
    <div>
      <div>ApagarVenda:</div>
      <div>
        <input type="text" ref={ref} style={{ width: '250px' }} />
        &nbsp;
        <button
          onClick={() => {
            toast.promise(tarefa, {
              loading: 'aguarde...',
              error: (e) => <ProtecaoBasic error={e} />,
              success: 'venda apagada'
            })
          }}
        >
          OK
        </button>
      </div>
    </div>
  )
}
