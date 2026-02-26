import { useState, useTransition } from 'react'
import InputNumber from '@rc-component/input-number'
import { mutateProduto } from '../api'
import { toast } from 'sonner'
import MargemLucro from './MargemLucro'

const ESTILO_PENDING = 'text-green-700 disabled:text-gray-300 border'



export default function ProdutoFormulario({ defaultValues }) {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState(defaultValues)

  const action = async () => {
    try {
      await mutateProduto(state)
      toast.success('gravado')
    } catch (e) {
      toast.error(e.message, { description: e.name, icon: null })
    }
  }

  return (
    <div>
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
      <div className='w-40'>
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

      <div className="mt-2">
        <button
          disabled={isPending}
          className={ESTILO_PENDING}
          onClick={() => startTransition(action)}
        >
          gravar
        </button>
        &nbsp;
        <button
          className="border"
          onClick={() => {
            setState(defaultValues)
          }}
        >
          reset
        </button>
      </div>

      <div className="mt-3">
        <MargemLucro alpha={state.valor} />
        </div>

    </div>
  )
}
