import { Link, useLoaderData } from 'react-router'

export default function Produtos() {
  const docs = useLoaderData();
  return (
    <div>
      <div><Link to="/novo_produto">novo_produto</Link></div>
      <div className="flex gap-3 flex-wrap">
        {docs.map((o) => <Link key={o.id}to={'/produto/' + o.id}>{o.descricao}</Link>)}
      </div>
  </div>
  )
}
