import { useDispatch } from 'react-redux'
import { FaEdit } from '@react-icons/all-files/fa/FaEdit'
import { toNumber } from 'lodash-es'

export default function Valor({ bean }) {
  const dispatch = useDispatch()
  const tarefa = () => {
    const value = window.prompt('valor', bean.valor)
    if (value === null) return
    dispatch({
      type: 'VALOR',
      identifier: bean.identifier,
      payload: toNumber(value)
    })
  }
  return (
    <div>
      <span>{bean.valor}</span>&nbsp;
      <FaEdit type="button" onClick={tarefa} />
    </div>
  )
}
