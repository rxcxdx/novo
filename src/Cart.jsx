import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import {sumBy} from "lodash-es";
import calcSubtotalBean from "./calcSubtotalBean";

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
        Total: {TOTAL}
      </div>
      {cart.map((o) => (
        <div key={o.identifier}>
          <CartItem bean={o} />
        </div>
      ))}
    </div>
  );
}
