import { useState } from 'react'
import AsyncSelect from 'react-select/async'
import { mutateProduto, fetcherCategorias } from '../src/api'
import { toast } from 'sonner'
import InputNumber from 'rc-input-number'

export default function ProdutoFormulario({ defaultValues }) {
  const [state, setState] = useState(defaultValues)

  const gravar = async () => {
    try {
      await mutateProduto(state)
      toast.success('SUCESSO')
      if (!defaultValues.id) setState(defaultValues)
    } catch (e) {
      toast.error(e.message, { icon: null })
    }
  }

  return (
    <div className="border border-dashed w-xs p-1">
      <div>id: {defaultValues.id}</div>

      <div>descricao</div>

      <div>
        <input
          value={state.descricao}
          type="text"
          className="border border-gray-300 w-full"
          onChange={(evt) => {
            setState({ ...state, descricao: evt.target.value })
          }}
        />
      </div>

      <div>valor</div>

      <div>
        <InputNumber
          className="w-full"
          value={state.valor}
          onChange={(v) => setState({ ...state, valor: v })}
          decimalSeparator=","
          precision={2}
          inputMode="decimal"
          step={0.01}
          controls={false}
        />
      </div>

      <div>categoria</div>

      <div className="w-full">
        <AsyncSelect
          defaultOptions
          loadOptions={fetcherCategorias}
          placeholder="selecione"
          value={state.categoria}
          getOptionLabel={(o) => o.descricao}
          getOptionValue={(o) => o.id}
          isClearable
          onChange={(o) => setState({ ...state, categoria: o })}
          isSearchable={false}
        />
      </div>

      <br />

      <div>
        <button className="border" onClick={gravar}>
          Gravar
        </button>
      </div>
    </div>
  )
}
