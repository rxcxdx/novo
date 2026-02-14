import { memo } from 'react'
import { NumericFormat } from 'react-number-format'
import { useDispatch } from 'react-redux'

function CartItem({ identifier, descricao, quantidade, valor, subtotal }) {
  const dispatch = useDispatch()
  const editarQuantidade = (values) => {
    dispatch({
      type: 'SET_QUANTIDADE',
      identifier,
      payload: values.floatValue
    })
  }
  const editarValor = (values) => {
    dispatch({
      type: 'SET_VALOR',
      identifier,
      payload: values.floatValue
    })
  }
  const remover = () => {
    dispatch({
      type: 'DELETE',
      identifier
    })
  }
  return (
    <div className="mb-4 hover:bg-sky-200">
      <div>{identifier}</div>
      <div>descricao: {descricao}</div>
      <div className="mb-2">
        quantidade&nbsp;
        <NumericFormat
          className="border-2 w-20"
          decimalScale={0}
          inputMode="numeric"
          value={quantidade}
          onValueChange={editarQuantidade}
        />
      </div>
      <div>
        valor&nbsp;
        <NumericFormat
          className="border-2 w-20"
          decimalScale={2}
          inputMode="decimal"
          fixedDecimalScale
          decimalSeparator=","
          value={valor}
          onValueChange={editarValor}
        />
      </div>
      <div className='text-blue-600'>{subtotal}</div>
      <div>
        <button onClick={remover}>apagar</button>
      </div>
    </div>
  )
}

export default memo(CartItem)
