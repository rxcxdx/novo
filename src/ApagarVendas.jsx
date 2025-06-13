import { useTransition } from "react";
import axios from "axios";
import delay from "delay";
import Swal from "sweetalert2";

const Confirme = Swal.mixin({
  showDenyButton: true,
  animation: false,
  title: "Confirme",
});

async function apagarVendas(selectedRowKeys) {
  await delay(1000);
  await axios.post("/apagar_vendas", selectedRowKeys);
}

export default function ApagarVendas({ selectedRowKeys, onSuccessApagar }) {
  const [isPending, startTransition] = useTransition();
  const action = async () => {
    const { isConfirmed } = await Confirme.fire();
    if (!isConfirmed) return;
    await apagarVendas(selectedRowKeys);
    onSuccessApagar();
  };
  return (
    <button
      className="btn btn-danger btn-sm"
      disabled={isPending}
      onClick={() => startTransition(action)}
    >
      Apagar
    </button>
  );
}
