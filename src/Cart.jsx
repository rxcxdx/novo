import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import sumBy from "lodash-es/sumBy";
import calcSubtotalBean from "./calcSubtotalBean";
import { FormattedNumber } from "react-intl";

export default function Cart() {
  const cart = useSelector((store) => store.cart);
  if (!cart.length)
    return (
      <div className="text-danger">
        carrinho vazio componente Cart
      </div>
    );
  const TOTAL = sumBy(cart, (o) => calcSubtotalBean(o.quantidade, o.valor));
  return (
    <div>
      <div>
        Total: <FormattedNumber value={TOTAL} style="currency" currency="BRL"  />
      </div>
      {cart.map((o) => (
        <div key={o.identifier}>
          <CartItem bean={o} />
        </div>
      ))}
    </div>
  );
}
