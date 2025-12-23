import { Link } from 'react-router'
import { List } from 'react-window'
import { isEmpty, truncate } from 'lodash-es'

function Linha({ index, docs, style }) {
  const joker = docs[index]
  const label = truncate(joker._id, { length: 10 })
  return (
    <div style={style}>
      <Link to={'/venda/' + joker._id}>{label}</Link>
      &nbsp; &nbsp;
      <span>{joker.hora}</span>
    </div>
  )
}

const ESTILO = {
  width: '300px',
  height: '300px',
  border: '1px solid black',
  padding: '5px'
}

export default function Rolagem({ docs }) {
  if (isEmpty(docs)) return null
  return (
    <div style={ESTILO}>
      <List
        rowComponent={Linha}
        rowCount={docs.length}
        rowHeight={25}
        rowProps={{ docs: docs }}
      />
    </div>
  )
}
