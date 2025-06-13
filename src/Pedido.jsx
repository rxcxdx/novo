import { Provider } from "react-redux";
import store from "./store";
import Loja from "./Loja2";
import Cart from "./Cart";
import Comprar from "./Comprar";

export default function Pedido() {
  return (
    <div>
      <Provider store={store}>
        <Loja />
        <br />
        <Comprar />
        <Cart />
      </Provider>
    </div>
  );
}
