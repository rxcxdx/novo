import { Link } from 'react-router'
import { List } from 'react-window'
import { isEmpty, truncate } from 'lodash-es'

export function LinkVenda({ value }) {
  return <Link to={'/venda/' + value}>{truncate(value, { length: 10 })}</Link>
}

function Linha({ index, docs, style }) {
  const joker = docs[index]
  return (
    <div style={style}>
      <LinkVenda value={joker._id} />
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

export function Rolagem({ docs }) {
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
