import { NumericFormat } from 'react-number-format'
import { useState } from 'react'
import { mutateProduto } from '../src/api'
import { toast } from 'sonner'
import Calcular from './Calcular'


export default function ProdutoFormulario({ defaultValues }) {
  const [state, setState] = useState(defaultValues)
  const gravar = async () => {
    try {
      await mutateProduto(state)
      toast.success('sucesso gravar', { icon: null, duration: 600 })
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
        onValueChange={({floatValue}) => {
          setState({ ...state, valor: floatValue })
        }}
      />

      </div>


      <br />

      
      <div>
        <button className="border" onClick={gravar}>
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
      <Calcular valor={state.valor} />

    </div>
  )
}
