import { useRef } from 'react'
import { useNavigate } from 'react-router'

export default function GoVenda() {
  const ref = useRef()
  const navigate = useNavigate()
  const tarefa = () => {
    let v = ref.current.value
    if (!v.trim()) return
    navigate('/venda/' + v)
  }
  return (
    <div>
      <div>venda:</div>
      <div>
        <input type="text" ref={ref} style={{ width: '250px' }} />
        &nbsp;
        <button onClick={() => tarefa()}>OK</button>
      </div>
    </div>
  )
}
