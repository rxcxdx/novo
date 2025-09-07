import { get } from 'lodash-es'

export function ProtecaoBasic({ error }) {
  return (
    <div>
      <div><small>{error.name}</small></div>
      <div><small>{get(error, 'response.status')}</small></div>
      <div>{get(error, 'response.data.message')}</div>
    </div>
  )
}

export function Protecao({ error }) {
  return (
    <div style={{ color: 'red' }}>
      <div>name: {error.name}</div>
      <div>message: {error.message}</div>
    </div>
  )
}
