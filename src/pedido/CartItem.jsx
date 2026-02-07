import { NumericFormat } from 'react-number-format'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { RiDeleteBin2Line as Trash } from 'react-icons/ri'

const { format } = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

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
    <div className="mb-4 w-sm hover:bg-sky-200">
      <div>identifier: {identifier}</div>
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
      <div>{format(subtotal)}</div>
      <div>
        <Trash size="2em" onClick={remover} />
      </div>
    </div>
  )
}

export default memo(CartItem)
