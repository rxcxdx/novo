import Decimal from 'decimal.js-light'
import { useState } from 'react'
import { toNumber } from 'lodash-es'

export default function Matematica() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const rs = new Decimal(a).mul(b).toNumber()
  return (
    <div className="w-xs border p-1">
      <div>
      </div>
      <br />
      <div>
        <span>a:</span>
        &nbsp;
        <input
          className="border"
          type="number"
          value={a}
          onChange={(evt) => setA(toNumber(evt.target.value))}
        />
      </div>
      <br />
      <div>
        <span>b:</span>
        &nbsp;
        <input
          className="border"
          type="number"
          value={b}
          onChange={(evt) => setB(toNumber(evt.target.value))}
        />
      </div>
      <br />
      <div>resultado: {rs}</div>
    </div>
  )
}
