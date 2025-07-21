import { useAsyncRetry } from 'react-use'
import { useState } from 'react'
import { fetchLoja } from './api'
import { useDispatch } from 'react-redux'
import { find, sample } from 'lodash-es'
import { Select } from 'antd'





export default function Loja() {
  const dispatch = useDispatch()

  const [state, setState] = useState(undefined)

  const {
    value: docs,
    loading,
    error,
    retry
  } = useAsyncRetry(async () => {
    const data = await fetchLoja()
    return data
  })
  if (error) throw error
  if (loading) return <div>carregando loja...</div>

  return (
    <div className="border border-dark p-3 bg-info">

      <div>



       <Select
       allowClear
            placeholder="selecione produto"
            value={state}
            style={{ width: '300px' }}
            fieldNames={{ label: 'descricao', value: 'id' }}
            options={docs}
            onChange={setState}
          />


      </div>

      <div className="hstack gap-3">
        <b
          type="button"
          onClick={() => {
            dispatch({ type: 'ADICIONAR', payload: find(docs, { id: state}) })
          }}
        >
          adicionar
        </b>
        <span type="button" onClick={() => retry()}>
          reload
        </span>
        <b
          type="button"
          onClick={() => {
            dispatch({ type: 'ADICIONAR', payload: sample(docs) })
          }}
        >
          shuffle
        </b>
      </div>
    </div>
  )
}
