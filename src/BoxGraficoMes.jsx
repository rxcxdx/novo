import { useActionState } from "react";
import GraficoMes from "./GraficoMes";
import { mesAtual } from "./ajuda";
import { fetchGraficoMes } from "./api";

export default function BoxGraficoMes() {
  const [state, formAction, isPending] = useActionState(fetchGraficoMes, {});
  return (
    <div>
      <div>devolve obj</div>
        <form action={formAction}>
          <div className="row g-2">
            <div className="col-auto">
              <input name="mes" type="month" defaultValue={mesAtual}/>
            </div>
            <div className="col-auto">
              <button disabled={isPending} type="submit">
                Pesquisar
              </button>
            </div>
          </div>
        </form>
      <br />
      <div>Mês: {state.mes}</div>
      <GraficoMes payload={state.grafico} />
    </div>
  );
}
