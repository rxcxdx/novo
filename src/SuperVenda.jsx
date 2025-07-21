import BoxBean from './BoxBean'
import BoxVenda from './BoxVenda'
import { map } from 'lodash-es'

export default function SuperVenda({ venda }) {
  return (
    <div>
      <BoxVenda venda={venda} />
      <br />
      <div className="vstack gap-3">
        {map(venda.cart, (o) => (
          <BoxBean key={o.identifier} bean={o} />
        ))}
      </div>
    </div>
  )
}
