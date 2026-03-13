import { memo } from 'react'
import { sample } from 'lodash-es'
import { useDispatch } from 'react-redux'
import { unshiftAction } from '../redux'

function BtnShuffle({ docs }) {
  const dispatch = useDispatch()
  const tarefa = () => {
    dispatch(unshiftAction(sample(docs)))
  }
  return (
    <button className="bg-green-300" onClick={tarefa}>
      shuffle
    </button>
  )
}

export default memo(BtnShuffle)
