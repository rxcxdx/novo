import memoize from "memoizee";

function calcSubtotalBean(quantidade, valor) {
  return quantidade * valor;
}

export default memoize(calcSubtotalBean, { primitive: true });
