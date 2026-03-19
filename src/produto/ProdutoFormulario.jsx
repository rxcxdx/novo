import { useState, useTransition } from 'react'
import { toast } from 'sonner'
import InputNumber from '@rc-component/input-number'
import { mutateProduto } from '../api'
import MargemLucro from './MargemLucro'
import { BoxError } from '../fallbacks'

const ESTILO_PENDING = 'border bg-green-300 disabled:opacity-25'

export default function ProdutoFormulario({ defaultValues }) {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState(defaultValues)
  const action = async () => {
    try {
      await mutateProduto(state)
    } catch (error) {
      toast.error(<BoxError error={error} />, {
        icon: null
      })
    }
  }
  return (
    <div className="w-xs border p-1 bg-yellow-100">
      <div>
        <button className="bg-black text-white" onClick={() => setState(defaultValues)}>
          reset
        </button>
      </div>
      <div className="text-xs">descricao</div>
      <div>
        <input
          value={state.descricao}
          type="text"
          className="border"
          onChange={(evt) => {
            setState({ ...state, descricao: evt.target.value })
          }}
        />
      </div>
      <div className="text-xs">valor</div>
      <div className="w-32">
        <InputNumber
          inputMode="decimal"
          precision={2}
          decimalSeparator=","
          value={state.valor}
          onChange={(v) => {
            setState({ ...state, valor: v })
          }}
          controls={false}
        />
      </div>

      <div className="mt-1">
        <button
          disabled={isPending}
          className={ESTILO_PENDING}
          onClick={() => startTransition(action)}
        >
          gravar
        </button>
      </div>
      <MargemLucro alpha={state.valor} />
    </div>
  )
}
