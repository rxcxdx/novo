import { Suspense, use } from 'react'
import { fetcherTimeline } from './api'
import Table from '@rc-component/table'

const columns = [
  { dataIndex: '_id', title: '_id' },
  { dataIndex: 'dt', title: 'dt' },
  { dataIndex: 'total', title: 'total' },
  { dataIndex: 'obs', title: 'obs' }
]

function Timeline({ promise }) {
  const docs = use(promise)
  return (
    <Table rowHoverable={false} columns={columns} data={docs} rowKey="_id" />
  )
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
