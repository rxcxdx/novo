import { Link } from 'react-router'

export function LinkVenda({ vendaId }) {
  return <Link to={'/venda/' + vendaId}>{vendaId}</Link>
}

