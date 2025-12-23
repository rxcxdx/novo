import { useState } from 'react'
import Select from 'react-select'
import { mutateProduto } from '../src/api'
import { toast } from 'sonner'

const ESTILO_INPUT = "border border-secondary bg-white rounded-0"

export default function ProdutoFormulario({ defaultValues, options }) {
  const [state, setState] = useState(defaultValues)
  const tarefa = async () => {
    try {
      await mutateProduto(state)
      toast.success('SUCESSO')
      if (!defaultValues.id) setState(defaultValues)
    } catch (e) {
      toast.error(e.message, { icon: null })
    }
  }
  return (
    <div>
      <div>id: {state.id}</div>
      <div>descricao</div>

      <div>
        <input
                    className={ESTILO_INPUT}

          value={state.descricao}
          type="text"
          style={{ width: '200px' }}
          onChange={(evt) => {
            setState({ ...state, descricao: evt.target.value })
          }}
        />
      </div>

      <div>valor</div>
      <div>
        <input
        style={{ width: '200px' }}
          type="number"
          className={ESTILO_INPUT}

          value={state.valor}
          onChange={(evt) => setState({ ...state, valor: evt.target.value })}
          step={0.01}
        />
      </div>
      <div>categoria</div>
      <div style={{ width: '200px' }}>
        <Select
          placeholder="selecione"
          value={state.categoria}
          options={options}
          getOptionLabel={(o) => o.descricao}
          getOptionValue={(o) => o.id}
          isClearable
          onChange={(o) => setState({ ...state, categoria: o })}
          isSearchable={false}
        />
      </div>
      <br />

      <div>
        <span className="text-success" role='button' onClick={tarefa}>
          Gravar
        </span>
      </div>
    </div>
  )
}
