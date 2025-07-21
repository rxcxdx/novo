import { useSelector } from 'react-redux'

export default function MinhaStore() {
  const cart = useSelector((store) => store.cart)
  const username = useSelector((store) => store.username)
  return (
    <div>
      <div>tamanho do cart é: {cart.length}</div>
      <div>usernamet é: {username}</div>
    </div>
  )
}
