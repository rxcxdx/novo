import { useRef, useState, useTransition } from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router'
import delay from 'delay'
import axios from 'axios'
import { Box, InfiniteScroll } from 'grommet'

const template = 'DD/MM/YYYY HH:mm:ss'
const estadoInicial = dayjs().format('YYYY-MM-DD')

function Horario({ value }) {
  const v = dayjs(value).format(template)
  return <span>{v}</span>
}

function Joker({ doc }) {
  return (
    <div>
      <Link to={'/venda/' + doc._id}>{doc._id}</Link>&nbsp;
      <Horario value={doc.dt} />
    </div>
  )
}

export default function Indice() {
  const [state, setState] = useState([])
  const [isPending, startTransition] = useTransition()
  const ref = useRef()
  const action = async () => {
    await delay(700)
    const response = await axios('/ws/indice/' + ref.current.value)
    setState(response.data)
  }
  return (
    <div>      
      <div>
        <input type="date" ref={ref} defaultValue={estadoInicial} />
        &nbsp;
        <button onClick={() => startTransition(action)} disabled={isPending}>
          pesquisar
        </button>
      </div>
      <div>linhas: {state.length}</div>
      <Box width="medium" height="small" border overflow="auto">
        <InfiniteScroll items={state} step={1}>
          {(o) => <Joker key={o._id} doc={o} />}
        </InfiniteScroll>
      </Box>
    </div>
  )
}
