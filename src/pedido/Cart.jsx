import { useSelector } from 'react-redux'
import { BigNumber } from 'bignumber.js'
import CartItem from './CartItem'

const { format } = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

function build(cart) {
  const lista = []
  let total = new BigNumber(0)
  cart.forEach((o) => {
    const subtotal = new BigNumber(o.valor).multipliedBy(o.quantidade)
    total = total.plus(subtotal)
    lista.push(
      <CartItem
        key={o.identifier}
        identifier={o.identifier}
        descricao={o.descricao}
        quantidade={o.quantidade}
        valor={o.valor}
        subtotal={format(subtotal)}
      />
    )
  })
  return {
    total: format(total),
    lista: lista
  }
}

export default function Cart() {
  const cart = useSelector((store) => store.cart)
  const { total, lista } = build(cart)
  return (
    <div>
      <div className="font-bold">TOTAL DA VENDA: {total}</div>
      {lista}
    </div>
  )
}
