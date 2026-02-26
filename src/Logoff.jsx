import { useDispatch } from 'react-redux'

export default function Logoff() {
  const dispatch = useDispatch()
  const tarefa = () => {
    dispatch({
      type: 'LOGOFF'
    })
  }
  return (
    <div>
      <button onClick={tarefa} className="border bg-red-300">
        logoff
      </button>
    </div>
  )
}
