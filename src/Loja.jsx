import { Suspense, use, useState } from "react";
import { useDispatch } from "react-redux";
import sample from "lodash-es/sample";
import { fetchLoja } from "./api";

const ESTILO = {
  border: "1px dashed black",
  padding: "10px",
};

function Conteudo({ produtosPromise }) {
  const dispatch = useDispatch();
  const docs = use(produtosPromise);

  const [state, setState] = useState("");

  const shuffle = () => {
    dispatch({ type: "ADICIONAR", payload: sample(docs) });
  };
  const adicionar = () => {
    dispatch({ type: "ADICIONAR", payload: docs.find((o) => o.id === state) });
  };
  return (
    <div style={ESTILO}>
      <div className="d-flex gap-2">
        <button onClick={shuffle}>shuffle</button>
        <button onClick={adicionar}>adicionar</button>
        <button onClick={() => console.log("RESPOSTA=", state)}>ler</button>
        <button onClick={() => setState("")}>reset</button>
      </div>
      <br />
      <div>

        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option disabled value="">selecione produto</option>
          {docs.map((o) => (
            <option key={o.id} value={o.id}>
              {o.descricao}
            </option>
          ))}
        </select>

        
      </div>
    </div>
  );
}

export default function Loja() {
  const produtosPromise = fetchLoja();
  return (
    <div>
      <Suspense fallback={<div>carregando produtos...</div>}>
        <Conteudo produtosPromise={produtosPromise} />
      </Suspense>
    </div>
  );
}
