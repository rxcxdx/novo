import { Link } from 'react-router'

export default function BoxHome() {
  return (

    <div>

    <div className="bg-yellow-100 border border-dashed w-xs p-2">
      <div className="font-bold">Bold text</div>
      <div className="italic">Italic text</div>
    </div>

    <br />

    <div className="bg-yellow-100 border border-dashed w-32 p-2">
      <div><Link to="/novo_produto">Novo produto</Link></div>
      <div><Link to="/sandbox">Sandbox</Link></div>      
    </div>


    </div>

  )
}
