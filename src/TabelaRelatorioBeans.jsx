import { orderBy } from "lodash-es";
import { useState } from "react";

const options = [
  { value: "subtotal", label: "subtotal desc" },
  { value: "quantidade", label: "quantidade desc" },
];

// relatorio SEMPRE EXISTE
export default function TabelaRelatorioBeans({ relatorio }) {
  const [joker, setJoker] = useState("subtotal");
  const ALVO = orderBy(relatorio, joker, "desc");
  return (
    <div className="border border-dark">
      <div>ordenação:</div>
      <div>
        <select value={joker} onChange={(e) => setJoker(e.target.value)}>
          {options.map((o, i) => (
            <option key={i} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div className="table-responsive">
        <table className="m-0 table table-bordered table-sm border-primary w-auto">
          <thead>
            <tr>
              <th>descricao</th>
              <th>quantidade</th>
              <th>subtotal</th>
            </tr>
          </thead>
          <tbody>
            {ALVO.map((o, i) => (
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
