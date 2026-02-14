import { useState, useTransition } from 'react'
import { NumericFormat } from 'react-number-format'
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
    } catch (e) {
      toast.error(e.message, { icon: null })
    }
  }

  return (
    <div>
      <div>descricao</div>
      <div>
        <input
          value={state.descricao}
          type="text"
          className="border-2"
          onChange={(evt) => {
            setState({ ...state, descricao: evt.target.value })
          }}
        />
      </div>
      <div>valor</div>
      <div>
        <NumericFormat
          className="border-2 w-32"
          decimalScale={2}
          inputMode="decimal"
          fixedDecimalScale
          value={state.valor}
          decimalSeparator=","
          onValueChange={({ floatValue }) => {
            setState({ ...state, valor: floatValue })
          }}
        />
      </div>
      <br />
      <div>
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
      <br />
      <MargemLucro valor={state.valor} />
    </div>
  )
}
