import { Link } from 'react-router'
import { fetcherTimeline } from './api'
import { Suspense, use } from 'react'

function Tabela({ docs }) {
  const linhas = docs.map((o) => (
    <tr key={o._id}>
      <td>
        <Link className="text-blue-500" to={'/venda/' + o._id}>
          ver
        </Link>
      </td>
      <td>{o._id}</td>
      <td>{o.username}</td>
      <td>{o.obs}</td>
    </tr>
  ))
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>ação</th>
          <th>_id</th>
          <th>username</th>
          <th>obs</th>
        </tr>
      </thead>
      <tbody>{linhas}</tbody>
    </table>
  )
}

function Timeline({ timelinePromise }) {
  const docs = use(timelinePromise)
  return <Tabela docs={docs} />
}

export function TimelineContainer() {
  const timelinePromise = fetcherTimeline()
  return (
    <Suspense fallback={<div>carregando timeline...</div>}>
      <Timeline timelinePromise={timelinePromise} />
    </Suspense>
  )
}
