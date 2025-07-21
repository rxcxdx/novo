import { useState } from 'react'
import { LinkVenda } from './links'
import dayjs from 'dayjs'
import { useAsyncFn } from 'react-use'
import { fetchIndice } from './api'
import { DatePicker, Button } from 'antd'

function Horario({ payload }) {
  const v = dayjs(payload).format('DD/MM/YYYY HH:mm:ss')
  return <span>{v}</span>
}

export default function Indice() {
  const [joker, setJoker] = useState(dayjs())
  const [{ loading, value: state = [], error }, doFetch] =
    useAsyncFn(async () => {
      const data = await fetchIndice(joker)
      return data
    }, [joker])
  if (error) throw error
  const tabela = state.map((o) => (
    <div key={o._id}>
      <div className="hstack gap-3">
        <LinkVenda vendaId={o._id} />
        <Horario payload={o.dt} />
      </div>
    </div>
  ))
  return (
    <div>
      <div>devolve arr</div>
      <div className="hstack gap-3">
        <DatePicker
          value={joker}
          onChange={setJoker}
          allowClear={false}
          format="DD/MM/YYYY"
        />
        <Button type="primary" onClick={() => doFetch()} loading={loading}>
          Pesquisar
        </Button>
      </div>
      <div>linhas: {state.length}</div>
      {tabela}
    </div>
  )
}
