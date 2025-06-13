import axios from "axios";
import toast from "react-hot-toast";
import delay from "delay";

async function nuvem() {
  await delay(1000)
  await axios("/userclients");
}

export default function Buscar() {
  const tarefa = () => {
    toast.promise(nuvem, {
      loading: "carregando...",
      success: <b>sucesso</b>,
      error: <b>erro</b>,
    });
  };

  return (
    <button className="btn btn-secondary" onClick={tarefa}>
      Buscar
    </button>
  );
}
