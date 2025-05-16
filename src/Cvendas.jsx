import { useActionState } from "react";
import { LinkVenda } from "./links";
import ModalVenda from "./ModalVenda";
import Copy from "./Copy";
import { fetchCvendas } from "./api";

export default function Cvendas() {
  const [docs, formAction, isPending] = useActionState(fetchCvendas, []);
  const linhas = docs.map((o) => (
    <tr key={o._id}>
      <td>
        <ModalVenda vendaId={o._id} />
      </td>
      <td>
        <LinkVenda vendaId={o._id} />
      </td>
      <td>{o.obs}</td>
      <td>
        <Copy value={o._id} />
      </td>
      <td>{o.dt}</td>
      <td>{o.username}</td>
    </tr>
  ));
  return (
    <div>
      <div className="p-3" style={{ backgroundColor: "#ecf2b6" }}>
        <div><b>react19</b></div>
      <form action={formAction}>
          <div className="row g-3">
            <div className="col-auto">
              <div><small>tamanho (cart)</small></div>
              <input name="tamanho" type="text" style={{ width: '6rem'}} />
            </div>
            <div className="col-12">
              <button disabled={isPending} type="submit">
                Pesquisar
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>Limite é 20</div>
      <div>Linhas: {docs.length}</div>
      <div className="table-responsive">
        <table className="table table-bordered table-sm border-primary w-auto">
          <thead>
            <tr>
              <th>modal</th>
              <th>_id</th>
              <th>obs</th>
              <th>copiar</th>
              <th>dt*</th>
              <th>username</th>
            </tr>
          </thead>
          <tbody>{linhas}</tbody>
        </table>
      </div>
    </div>
  );
}
