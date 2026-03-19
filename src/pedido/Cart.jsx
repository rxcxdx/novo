import { useSelector } from 'react-redux'
import CartItem from './CartItem'

export default function Cart() {
  const cart = useSelector((store) => store.cart)
  return cart.map((o) => <CartItem key={o.identifier} item={o} />)
}
