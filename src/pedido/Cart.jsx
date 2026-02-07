import { useSelector } from 'react-redux'
import { BigNumber } from 'bignumber.js'
import CartItem from './CartItem'
import Comprar from './Comprar'

const { format } = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

function build(cart) {
  let total = new BigNumber(0)
  const lista = []
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
        subtotal={subtotal.toNumber()}
      />
    )
  })
  return {
    total: total.toNumber(),
    lista: lista
  }
}

export default function Cart() {
  const cart = useSelector((store) => store.cart)
  const { total, lista } = build(cart)
  return (
    <div>
      <Comprar cart={cart} />
      <div className="font-bold">{format(total)}</div>
      {lista}
    </div>
  )
}
