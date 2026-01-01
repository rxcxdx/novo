import { Link } from 'react-router'

export default function BoxHome() {
  return (
    <div className="border border-dashed w-xs p-3">
      <div>
        <Link to="/novo_produto">Novo produto</Link>
      </div>
      <div className="font-bold">Bold text</div>
      <div className="italic">Italic text</div>
    </div>
  )
}
