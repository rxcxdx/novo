import { useDispatch } from 'react-redux'

export default function Remover({ identifier }) {
  const dispatch = useDispatch()
  const tarefa = () => {
    dispatch({
      type: 'REMOVER',
      identifier
    })
  }
  return <small className="text-danger" type="button" onClick={tarefa}>remover</small>
}
