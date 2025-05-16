import { useActionState } from "react";
import { diaAtual } from "./ajuda";
import {map} from "lodash-es";
import { fetchRelatorioBeans } from "./api";

export default function RelatorioBeans() {
  const [doc, formAction, isPending] = useActionState(fetchRelatorioBeans, {});

  return (
    <div>
      <div>devolve obj</div>




      <form action={formAction}>
          <div className="row g-1">
            <div className="col-auto">
                <input name="gte" type="date" defaultValue={diaAtual} />
            </div>
            <div className="col-auto">
            <input name="lte" type="date" defaultValue={diaAtual} />
            </div>
            <div className="col-12">
              <button disabled={isPending} type="submit">
                pesquisar
              </button>
            </div>
          </div>
        </form>




      <div>inicio: {doc.inicio}</div>
      <div>fim: {doc.fim}</div>
      <div>itens: {doc.itens}</div>
      <div>total: {doc.total}</div>

      <div className="table-responsive">
        <table className="table table-bordered table-sm border-primary w-auto">
          <thead>
            <tr>
              <th>descricao</th>
              <th>quantidade</th>
              <th>subtotal*</th>
            </tr>
          </thead>
          <tbody>
            {map(doc.relatorio, (o, i) => (
              <tr key={i}>
                <td>{o.descricao}</td>
                <td>{o.quantidade}</td>
                <td>{o.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
