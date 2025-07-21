import { Card } from 'antd'
import { useState } from 'react'
import { useUnmount } from 'react-use';


function Amarelo() {
  useUnmount(() => console.log('UNMOUNTED'));
  return (
    <div>
        <div>Card content</div>
    </div>
  )
}

export default function Sandbox() {
  const [joker, setJoker] = useState(false)
  // const tarefa = () => {}
  return (
    <div>

      <h1>Sandbox</h1>

      <Card title="Card title" loading={joker}>
        <Amarelo />
      </Card>

      <div>
        <button onClick={() => setJoker(!joker)}>btn</button>
      </div>

    </div>
  )
}
