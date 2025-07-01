import { useDispatch } from 'react-redux'
import { FaEdit } from '@react-icons/all-files/fa/FaEdit'
import { toNumber } from 'lodash-es'

export default function Quantidade({ bean }) {
  const dispatch = useDispatch()
  const tarefa = () => {
    const value = window.prompt('quantidade', bean.quantidade)
    if (value === null) return
    dispatch({
      type: 'QUANTIDADE',
      identifier: bean.identifier,
      payload: toNumber(value)
    })
  }
  return (
    <div>
      <span>{bean.quantidade}</span>&nbsp;
      <FaEdit type="button" onClick={tarefa} />
    </div>
  )
}
