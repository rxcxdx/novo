import { useErrorBoundary } from "react-error-boundary";
import { useDispatch, useStore } from "react-redux";
import { mutationBuy } from "./api";
import toast from 'react-hot-toast'

export default function BtnComprar() {
  const { showBoundary } = useErrorBoundary();
  const dispatch = useDispatch();
  const store = useStore();


  const tarefa = async () => {    
    try {
      const ATUAL = store.getState();
      const { _id } = await mutationBuy(ATUAL);
      toast.success(_id)
      dispatch({ type: "RESET" });
    } catch (err) {      
      showBoundary(err);

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
