import { useLoaderData } from 'react-router'
import TabelaTimelineItens from './TabelaTimelineItens'

export default function TimelineItens() {
  const dataSource = useLoaderData();
  return <TabelaTimelineItens dataSource={dataSource} />
}
