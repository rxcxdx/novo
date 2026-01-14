import { useDispatch, useSelector } from 'react-redux'

export default function Obs() {
  const dispatch = useDispatch()
  const obs = useSelector((store) => store.obs)
  return (
    <input
    placeholder='obs'
      className="border"
      type="text"
      value={obs}
      onChange={(evt) =>
        dispatch({ type: 'SET_OBS', payload: evt.target.value })
      }
    />
  )
}
