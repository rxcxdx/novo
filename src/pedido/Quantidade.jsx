import { useDispatch } from 'react-redux'
import InputNumber from '@rc-component/input-number'
import { editarItemAction } from '../redux'

export default function Quantidade({ item }) {
  const dispatch = useDispatch()

  const tarefa = (v) => {
    dispatch(editarItemAction({ ...item, quantidade: v }))
  }

  return (
    <div className="w-24">
      <InputNumber
        inputMode="numeric"
        precision={0}
        value={item.quantidade}
        onChange={tarefa}
        controls={false}
      />
    </div>
  )
}
