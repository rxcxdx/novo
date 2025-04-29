import { useEffect, useState } from "react";
import GraficoHoras from "./GraficoHoras";
import { diaAtual } from "./ajuda";
import toast from "react-hot-toast";
import ScaleLoader from "react-spinners/ScaleLoader";
import { fetchGraficoHoras } from "./api";

export default function BoxGraficoHoras() {
  const [state, setState] = useState(diaAtual);
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchGraficoHoras(state)
      .then((data) => setDocs(data))
      .catch((err) => toast.error(err.name))
      .finally(() => setLoading(false));
  }, [state]);
  return (
    <div>
      <div>automatico</div>
      <div>x é a hora</div>
<div>y é quantidade de vendas</div>

      <div>
        <input
          type="date"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <br />
      <ScaleLoader loading={loading} />
      <GraficoHoras payload={docs} />
    </div>
  );

}
