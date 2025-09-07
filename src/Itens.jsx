import { useRef, useState, useTransition } from 'react'
import dayjs from 'dayjs'
import delay from 'delay'
import axios from 'axios'
import { Button } from 'grommet'

const estadoInicial = dayjs().format('YYYY-MM-DD')

function Tabela({ docs }) {
  const linhas = docs.map((o, i) => (
    <tr key={i}>
      <td>{o.descricao}</td>
      <td>{o.quantidade}</td>
    </tr>
  ))
  return (
    <table>
      <thead>
        <tr>
          <th>descricao</th>
          <th>quantidade</th>
        </tr>
      </thead>
      <tbody>{linhas}</tbody>
    </table>
  )
}

export default function Itens() {
  const [docs, setDocs] = useState([])
  const ref = useRef()
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    await delay(800)
    const {data} = await axios('/ws/itens/' + ref.current.value)
    setDocs(data)
  }
  return (
    <div>
      <div>
        <input type="date" ref={ref} defaultValue={estadoInicial} />
        &nbsp;
        <Button
          plain
          onClick={() => startTransition(action)}
          busy={isPending}
          label="Pesquisar"
        />
      </div>
      <Tabela docs={docs} />
    </div>
  )
}
