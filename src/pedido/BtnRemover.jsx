import { useDispatch } from 'react-redux'

export default function BtnRemover({ identifier }) {
  const dispatch = useDispatch()  
  const tarefa = () => {
    dispatch({
      type: 'REMOVER',
      identifier
    })
  }  
  return <button className='border' onClick={tarefa}>apagar</button>
}
