import { useDispatch } from 'react-redux'
import InputNumber from '@rc-component/input-number'

export default function Quantidade({ identifier,quantidade }) {
  const dispatch = useDispatch()  
  const tarefa = (payload) => {
    dispatch({
      type: 'SET_QUANTIDADE',
      identifier,
      payload
    })
  }  
  return (
    <div>
      <div className='text-xs'>quantidade</div>
      <div className='w-24'>
        <InputNumber
          inputMode="numeric"
          precision={0}
          value={quantidade}
          onChange={tarefa}
          controls={false}
        />
      </div>
    </div>
  )
}