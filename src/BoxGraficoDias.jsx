import { useEffect, useState } from "react";
import GraficoDias from "./GraficoDias";
import { mesAtual } from "./ajuda";
import toast from "react-hot-toast";
import ScaleLoader from "react-spinners/ScaleLoader";
import { fetchGraficoDias } from "./api";

export default function BoxGraficoDias() {
  const [state, setState] = useState(mesAtual);
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchGraficoDias(state)
      .then((data) => setDocs(data))
      .catch((err) => toast.error(err.name))
      .finally(() => setLoading(false));
  }, [state]);
  return (
    <div>
      <div>automatico</div>
      <div>x é o dia</div>
      <div>y é quantidade de vendas</div>
      <div>
        <input
          type="month"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <br />
      <ScaleLoader loading={loading} />
      <GraficoDias payload={docs} />
    </div>
  );
}
