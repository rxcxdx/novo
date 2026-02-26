import { Suspense, use } from 'react'
import { fetcherTimeline } from './api'
import Table from '@rc-component/table'
import { LinkVenda } from './indice'

const columns = [
  {
    dataIndex: '_id',
    title: '_id',
    render: (v) => <LinkVenda value={v} />
  },
  {
    dataIndex: 'username',
    title: 'username'
  },
  {
    dataIndex: 'obs',
    title: 'obs'
  }
]

function Timeline({ promise }) {
  const docs = use(promise)
  return <Table rowHoverable={false} columns={columns} data={docs} rowKey="_id" />
}

export function TimelineContainer() {
  const promise = fetcherTimeline()
  return (
    <div>
      <Suspense fallback={<div>carregando timeline...</div>}>
        <Timeline promise={promise} />
      </Suspense>
    </div>
  )
}
