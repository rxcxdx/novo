import { useSelector } from 'react-redux'
import CartItem from './CartItem'

export default function Cart() {
  const cart = useSelector((store) => store.cart)
  return (
    <div>

      {cart.map((o) => (
        <div key={o.identifier}>
          <CartItem
          
          identifier={o.identifier}
          descricao={o.descricao}
          quantidade={o.quantidade}
          valor={o.valor}
        />
        </div>
      ))}

    </div>
  )
}
