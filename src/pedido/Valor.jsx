import { useDispatch } from 'react-redux'
import InputNumber from '@rc-component/input-number'

export default function Valor({ identifier,valor }) {
  const dispatch = useDispatch()  

  const tarefa = (payload) => {
    dispatch({
      type: 'SET_VALOR',
      identifier,
      payload
    })
  }  

  return (
    <div>
      <div className='text-xs'>valor</div>
      <div className='w-40'>
        <InputNumber
          inputMode="decimal"
          precision={2}
          value={valor}
          onChange={tarefa}
          controls={false}
          decimalSeparator=","
        />
      </div>
    </div>
  )
}
  