import { Suspense, use } from 'react'
import { fetcherTimeline } from './api'
import Table from '@rc-component/table'

const columns = [
  {
    dataIndex: '_id',
    title: '_id'
  },
  {
    dataIndex: 'obs',
    title: 'obs'
  },
  {
    dataIndex: 'username',
    title: 'username'
  },
  {
    dataIndex: 'dt',
    title: 'dt'
  }
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
