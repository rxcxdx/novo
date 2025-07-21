import { useRef } from 'react'
import { useNavigate } from 'react-router'

export default function Home() {
  const ref = useRef()
  const navigate = useNavigate()
  const tarefa = () => {
    let v = ref.current.value
    v = v.trim()
    console.log('#', v)
    v ? navigate('/venda/' + v) : window.alert('vazio')
  }
  return (
    <div>
      <h1>Home</h1>
      <div className="hstack gap-1">
        <input placeholder="venda" type="text" ref={ref} />
        <button onClick={() => tarefa()}>ver</button>
      </div>
    </div>
  )
}
