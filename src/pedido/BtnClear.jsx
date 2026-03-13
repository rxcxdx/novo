import { useDispatch } from 'react-redux'
import { clearAction } from '../redux'

export default function BtnClear() {
  const dispatch = useDispatch()
  const tarefa = () => {
    dispatch(clearAction())
  }
  return (
    <button className="bg-gray-300" onClick={tarefa}>
      clear
    </button>
  )
}
