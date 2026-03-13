import { useState, useTransition } from 'react'
import InputNumber from '@rc-component/input-number'
import { mutateProduto } from '../api'
import MargemLucro from './MargemLucro'
import { toast } from 'sonner'
import { BoxError } from '../fallbacks'
import { ESTILO_PENDING } from '../estilos'

export default function ProdutoFormulario({ defaultValues }) {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState(defaultValues)
  const action = async () => {
    try {
      await mutateProduto(state)
      toast.success('sucesso')
    } catch (error) {
      toast.error(<BoxError error={error} />, {
        icon: null
      })
    }
  }
  return (
    <div className="w-xs border border-dashed p-1 bg-yellow-100">
      <button
        className="bg-gray-300"
        onClick={() => {
          setState(defaultValues)
        }}
      >
        reset
      </button>
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
      <div className="w-40">
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

      <br />

      <MargemLucro alpha={state.valor} />
    </div>
  )
}
