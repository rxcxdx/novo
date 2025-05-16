import { Provider } from "react-redux";
import store from "./store";
import Loja from "./Loja";
import Cart from "./Cart";
import BtnComprar from "./BtnComprar";

export default function Pedido() {
  return (
    <div>
      <Provider store={store}>
        <Loja />
        <br />
        <BtnComprar />
        <Cart />
      </Provider>
    </div>
  );
}
