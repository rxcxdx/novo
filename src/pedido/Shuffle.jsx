import { memo } from 'react'
import uniqueRandomArray from 'unique-random-array'
import { useDispatch } from 'react-redux'

function Shuffle({ docs }) {
  const dispatch = useDispatch()
  const random = uniqueRandomArray(docs)
  const unshift = () => {
    dispatch({ type: 'UNSHIFT', payload: random() })
  }
  return (
    <div className="mb-1 ">
      <button className="p-1 border" onClick={unshift}>
        shuffle
      </button>
    </div>
  )
}

export default memo(Shuffle)
