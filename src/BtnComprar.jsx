import { useDispatch, useStore } from "react-redux";
import { mutationBuy } from "./api";
import toast from 'react-hot-toast'
import { useError } from "react-use";

export default function BtnComprar() {
  const dispatchError = useError();
  const dispatch = useDispatch();
  const store = useStore();


  const tarefa = async () => {    
    try {
      const ATUAL = store.getState();
      const { _id } = await mutationBuy(ATUAL);
      toast.success(_id)
      dispatch({ type: "RESET" });
    } catch (err) {      
      dispatchError(err);

    }
  };


  return (
    <div>
      <button onClick={tarefa}>comprar</button>
      &nbsp;
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
}
