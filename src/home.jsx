import { Link } from 'react-router'

export function BoxHome() {
  return (
    <div style={{ width: '150px', border: '1px solid black', padding: '5px' }}>
      <div className="fw-bold">Bold text</div>
      <div className="fst-italic">Italic text</div>
      <div>
        <Link to="/novo_produto">Novo produto</Link>
      </div>
    </div>
  )
}
