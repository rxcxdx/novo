import { Link } from 'react-router'

export function LinkVenda({ vendaId }) {
  return <Link to={'/venda/' + vendaId}>{vendaId}</Link>
}

export function LinkProduto({ id, descricao }) {
  return <Link to={'/produto/' + id}>{descricao}</Link>
}

export function LinkUserclient({ id, username }) {
  return <Link to={'/userclient/' + id}>{username}</Link>
}
