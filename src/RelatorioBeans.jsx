import { useEffect, useState } from "react";
import { fetchRelatorioBeans } from "./api";
import { diaAtual } from "./ajuda";
import map from "lodash-es/map";
import { StrSafe } from "./format";
import toast from "react-hot-toast";

export default function RelatorioBeans() {
  const [state, setState] = useState(diaAtual);
  const [doc, setDoc] = useState({});
  useEffect(() => {
    fetchRelatorioBeans(state)
      .then((data) => setDoc(data))
      .catch((err) => toast.error(err.name));
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
      <div>
        inicio: <StrSafe value={doc.inicio} />
      </div>
      <div>
        fim: <StrSafe value={doc.fim} />
      </div>
      <table>
        <thead>
          <tr>
            <th>i</th>
            <th>k</th>
            <th>itens</th>
            <th>subtotal*</th>
          </tr>
        </thead>
        <tbody>
          {map(doc.relatorio, ([k, o], i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{k}</td>
              <td>{o.itens}</td>
              <td>{o.subtotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
