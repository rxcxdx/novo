import { useTransition } from "react";
import { useDispatch, useStore } from "react-redux";
import axios from "axios";
import delay from "delay";
import toast from "react-hot-toast";
import BoxError from "./BoxError";

async function buy(o) {
  await delay(1000);
  const response = await axios.post("/buy", o);
  return response.data;
}

export default function Comprar() {
  const [isPending, startTransition] = useTransition();
  const store = useStore();
  const dispatch = useDispatch();
  const action = async () => {
    const ATUAL = store.getState();
    const o = {
      cart: ATUAL.cart,
      username: ATUAL.username,
    };
    try {
      const v = await buy(o);
      toast.success(v);
      dispatch({ type: "RESET_CART" });
    } catch (err) {
      toast.error(<BoxError payload={err} />);
    }
  };
  return (
    <div>
      <button
        className="btn btn-success"
        disabled={isPending}
        onClick={() => startTransition(action)}
      >
        Comprar
      </button>
    </div>
  );
}
