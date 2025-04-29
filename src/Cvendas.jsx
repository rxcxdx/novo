import { useCopyToClipboard } from "react-use";
import { useActionState } from "react";
import { StrSafe } from "./format";
import { LinkVenda } from "./links";
import { fetchCvendas } from "./api";
import ModalVenda from "./ModalVenda";

export default function Cvendas() {
  const [, copyToClipboard] = useCopyToClipboard();
  const [docs, formAction, isPending] = useActionState(fetchCvendas, []);
  const tarefa = (v) => {
    copyToClipboard(v);
  };
  const linhas = docs.map((o) => (
    <tr key={o._id}>
      <td>
        <ModalVenda vendaId={o._id} />
      </td>
      <td>
        <LinkVenda vendaId={o._id} />
      </td>
      <td>
        <StrSafe value={o.obs} />
      </td>
      <td>
        <small type='button' onClick={() => tarefa(o._id)}>copiar</small>
      </td>
    </tr>
  ));
  return (
    <div>
      <div>devolve arr</div>
      <div>
        <form action={formAction}>
          <div className="row g-2">
            <div className="col-auto">
              <div>
                <small>tamanho (cart)</small>
              </div>
              <input placeholder="ignorar" type="text" name="tamanho" />
            </div>
            <div className="col-auto">
              <div>
                <small>exists (obs)</small>
              </div>
              <select name="exists">
                <option value="">ignorar</option>
                <option value={false}>false</option>
                <option value={true}>true</option>
              </select>
            </div>
            <div className="col-auto">
              <div>
                <small>pattern (obs)</small>
              </div>
              <div>
                <input placeholder="ignorar" type="text" name="pattern" />
              </div>
            </div>
            <div className="col-12">
              <button type="submit" disabled={isPending}>
                Pesquisar
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>Limite é 20</div>
      <div>Linhas: {docs.length}</div>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>_id</th>
              <th>obs</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>{linhas}</tbody>
        </table>
      </div>
    </div>
  );
}
