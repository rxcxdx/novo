import { useDispatch } from 'react-redux'
import { removerItemAction } from '../redux'

export default function BtnRemover({ identifier }) {
  const dispatch = useDispatch()
  const tarefa = () => {
    dispatch(removerItemAction(identifier))
  }
  return <button onClick={tarefa}>apagar</button>
}
