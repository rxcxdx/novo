import { useDispatch, useSelector } from 'react-redux'
import { setObsAction } from '../redux'

export default function Obs() {
  const dispatch = useDispatch()
  const obs = useSelector((store) => store.obs)
  const tarefa = (evt) => {
    dispatch(setObsAction(evt.target.value))
  }
  return (
    <input
      placeholder="obs"
      className="border"
      type="text"
      value={obs}
      onChange={tarefa}
    />
  )
}
