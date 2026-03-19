import { memo } from 'react'
import { sample } from 'lodash-es'
import { useDispatch } from 'react-redux'
import { MdShuffle } from "react-icons/md";
import { unshiftAction } from '../redux'

function BtnShuffle({ docs }) {
  const dispatch = useDispatch()
  const tarefa = () => {
    dispatch(unshiftAction(sample(docs)))
  }
  return (
    <button onClick={tarefa}>
      <MdShuffle size='2em' />
    </button>
  )
}

export default memo(BtnShuffle)
