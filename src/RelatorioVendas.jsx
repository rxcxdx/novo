import { useActionState } from "react";
import { diaAtual } from "./ajuda";
import { relatorioVendas } from "./actions";

const options = [
  { value: "", label: "selecione" },
  { value: "bruce", label: "bruce" },
  { value: "zeca", label: "zeca" },
];

export default function RelatorioVendas() {
  const [state, formAction, isPending] = useActionState(relatorioVendas, {});
  return (
    <div>
  
      <div>
        <i>react19</i>
      </div>
      <form action={formAction}>
        <div className="row g-3">
          <div className="col-auto">
            <div>gte</div>
            <input  name="gte" type="date" defaultValue={diaAtual} />
          </div>
          <div className="col-auto">
            <div>lte</div>
            <input  name="lte" type="date" defaultValue={diaAtual} />
          </div>
          <div className="col-auto">
            <div>username</div>
            <select name="username">
              {options.map((o, i) => (
                <option key={i} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>           
          </div>
          <div className="col-12">
            <button disabled={isPending} type="submit">
              Pesquisar
            </button>
          </div>
        </div>
      </form>
      <div className="text-success">
        <div>inicio: {state.inicio}</div>
        <div>fim: {state.fim}</div>
        <div>quantVendas: {state.quantVendas}</div>
        <div>itens: {state.itens}</div>
        <div>total: {state.total}</div>
      </div>
    </div>
  );
}
