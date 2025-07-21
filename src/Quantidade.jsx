import { useDispatch } from 'react-redux'

export default function Quantidade({ bean }) {
  const dispatch = useDispatch()

  return (
    <div>
      <div>quantidade: {bean.quantidade}</div>
      <div className="hstack gap-3">
        <small
          className="text-primary"
          type="button"
          onClick={() => {
            dispatch({
              type: 'MAIS',
              identifier: bean.identifier
            })
          }}
        >
          mais
        </small>
        <small
          className="text-primary"
          type="button"
          onClick={() => {
            dispatch({
              type: 'MENOS',
              identifier: bean.identifier
            })
          }}
        >
          menos
        </small>
      </div>
    </div>
  )
}
