import { useLoaderData } from 'react-router'
import TabelaTimelineVendas from './TabelaTimelineVendas'

export default function TimelineVendas() {
  const dataSource = useLoaderData();
  return <TabelaTimelineVendas dataSource={dataSource} />
}
