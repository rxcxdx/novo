import axios from "axios";
import { SyncLoader } from "react-spinners";
import { useAsync } from "react-use";
import { LinkVenda } from "./links";
import delay from "delay";
import Horario from "./Horario";

export default function Timeline() {
  const { value, loading, error } = useAsync(async () => {
    await delay(500)
    const response = await axios("/timeline");
    return response.data;
  });
  if (error) throw error;
  if (loading) return <SyncLoader />;
  const lista = value.map((o) => (
    <div key={o._id} className="hstack gap-3">
      <Horario payload={o.dt}/>
      <LinkVenda vendaId={o._id} />
    </div>
  ));
  return (
    <div>
      <h4>Últimas 10 vendas</h4>
      <div className="vstack gap-3">
      {lista}
      </div>
      
    </div>
  );
}
