import { useActionState } from "react";
import { diaAtual } from "./ajuda";
import { fetchRelatorioVendas } from "./api";

export default function RelatorioVendas() {
  const [doc, formAction, isPending] = useActionState(fetchRelatorioVendas, {});
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


      <div
        style={{
          border: "2px solid green",
          padding: "5px",
          width: "fit-content",
        }}
      >
        <div>quantVendas: {doc.quantVendas}</div>
        <div>itens: {doc.itens}</div>
        <div>total: {doc.total}</div>
        <div>inicio: {doc.inicio}</div>
        <div>fim: {doc.fim}</div>
      </div>
    </div>
  );
}
