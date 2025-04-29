import { useEffect, useState } from "react";
import { FormattedNumber } from "react-intl";
import { StrSafe } from "./format";
import { diaAtual } from "./ajuda";
import toast from "react-hot-toast";
import { fetchRelatorioVendas } from "./api";

export default function RelatorioVendas() {
  const [state, setState] = useState(diaAtual);
  const [doc, setDoc] = useState({});
  useEffect(() => {
    fetchRelatorioVendas(state)
      .then((data) => setDoc(data))
      .catch((err) => toast.error(err.name))
  }, [state]);
  return (
    <div>
      <div>automatico</div>
      <div>devolve obj</div>
         <div>
        <input
          type="date"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>

      <div className="d-flex gap-1">
        <span>linhas:</span> <span><FormattedNumber value={doc.linhas} /></span> <small>(é quantidade de vendas)</small>
        </div>
      <div>itens: <FormattedNumber value={doc.itens} /></div>
      <div>
        total: <FormattedNumber value={doc.total} style="currency" currency="BRL" />
      </div>
      
      
      <div>
        inicio: <StrSafe value={doc.inicio} />
      </div>
      <div>
        fim: <StrSafe value={doc.fim} />
      </div>
    </div>
  );
}
