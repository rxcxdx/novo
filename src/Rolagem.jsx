import { Link } from 'react-router'
import { List } from 'react-window'
import { isEmpty } from 'lodash-es'
import { Horario } from './componentes'

function Linha({ index, docs, style }) {
  const joker = docs[index]
  return (
    <div style={style}>
      <Link to={'/venda/' + joker._id} className="text-blue-500">
        {joker._id}
      </Link>
      &nbsp;&nbsp;
      <Horario value={joker.dt} />
    </div>
  )
}

export default function Rolagem({ docs }) {
  if (isEmpty(docs)) return null
  return (
    <div className="w-xs h-80 border">
      <List
        rowComponent={Linha}
        rowCount={docs.length}
        rowHeight={25}
        rowProps={{ docs: docs }}
      />
    </div>
  )
}
