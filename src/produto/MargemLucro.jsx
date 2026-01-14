import { useState,memo } from "react";
import { BigNumber } from "bignumber.js";
import { NumericFormat } from 'react-number-format'

function calcMargemLucro(valA, valB) {
  const piece = new BigNumber(valA).minus(valB).dividedBy(valA);
  return new BigNumber(100).multipliedBy(piece).decimalPlaces(2).toFormat({ decimalSeparator: ',', suffix: ' %' })
}

function MargemLucro({ valor }) {
  const [state, setState] = useState(0)
  const rs = calcMargemLucro(valor,state)
  return (
    <div className="w-40 p-2 bg-yellow-100">
      <div className="text-xs">Margem de lucro para</div>
            <div>
      <NumericFormat
        className="border-2 w-full"
        decimalScale={2}
        inputMode="decimal"
        fixedDecimalScale
        value={state}
        decimalSeparator=","
        onValueChange={({floatValue}) => {
          setState(floatValue)
        }}
      />
      </div>
      <div>{rs}</div>
    </div>
  )
}

export default memo(MargemLucro)