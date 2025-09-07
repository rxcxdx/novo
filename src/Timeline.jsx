import { Link } from 'react-router'
import { fetcherTimeline } from './api'
import { Suspense, use } from 'react'

function Tabela({ docs }) {
  const linhas = docs.map((o) => (
    <tr key={o._id}>
      <td>
        <Link to={'/venda/' + o._id}>ver</Link>
      </td>
      <td>{o._id}</td>
      <td>{o.dt}</td>
      <td>{o.username}</td>
      <td>{o.obs}</td>
    </tr>
  ))
  return (
    <table>
      <thead>
        <tr>
          <th>ação</th>
          <th>_id</th>
          <th>dt</th>
          <th>username</th>
          <th>obs</th>
        </tr>
      </thead>
      <tbody>{linhas}</tbody>
    </table>
  )
}

function Conteudo({ timelinePromise }) {
  const docs = use(timelinePromise)
  return <Tabela docs={docs} />
}

export default function Timeline() {
  const timelinePromise = fetcherTimeline()
  return (
    <Suspense fallback={<div>carregando...</div>}>
      <Conteudo timelinePromise={timelinePromise} />
    </Suspense>
  )
}
