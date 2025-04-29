import { useEffect, useState } from "react";
import { FormattedDate } from "react-intl";
import { fetchDespesas } from "./api";
import { mesAtual } from "./ajuda";
import toast from "react-hot-toast";

export default function Despesas() {
  const [state, setState] = useState(mesAtual);
  const [docs, setDocs] = useState([]);
  const linhas = docs.map((o) => (
    <tr key={o.id}>
      <td>{o.id}</td>
      <td>{o.descricao}</td>
      <td>{o.valor}</td>
      <td>{o.dt}</td>
      <td>
        <FormattedDate value={o.dt} />
      </td>
    </tr>
  ));

  useEffect(() => {
    fetchDespesas(state)
      .then((data) => setDocs(data))
      .catch((err) => toast.error(err.name))
  }, [state]);

  return (
    <div>
      <div>automatico</div>
      <div>
        <input
          type="month"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div>Linhas: {docs.length}</div>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>descricao</th>
              <th>valor</th>
              <th>dt (iso)</th>
              <th>dia</th>
            </tr>
          </thead>
          <tbody>{linhas}</tbody>
        </table>
      </div>
    </div>
  );
}
