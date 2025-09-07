import axios from 'axios'
import delay from 'delay'
import { useRef } from 'react'
import { toast } from 'sonner'
import { ProtecaoBasic } from './fallbacks'

export default function ApagarProduto() {
  const ref = useRef()
  const tarefa = async () => {
    await delay(1000)
    await axios.delete('/ws/produtos/' + ref.current.value)
    ref.current.value = ''
  }
  return (
    <div>
      <div>apagar produto:</div>
      <div>
        <input type="text" ref={ref} style={{ width: '250px' }} />
        &nbsp;
        <button
          onClick={() => {
            toast.promise(tarefa, {
              loading: 'aguarde...',
              error: (e) => <ProtecaoBasic error={e} />,
              success: 'produto apagado'
            })
          }}
        >
          OK
        </button>
      </div>
    </div>
  )
}
