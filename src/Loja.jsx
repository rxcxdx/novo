import { Suspense, use, useState } from "react";
import { useDispatch } from "react-redux";
import {sample} from "lodash-es";
import { fetchLoja } from "./api";
import Select from "react-select";

const ESTILO = {
  border: "1px dashed black",
  padding: "10px",
};

function Conteudo({ produtosPromise }) {
  const docs = use(produtosPromise);
  const [state, setState] = useState(null);
  const dispatch = useDispatch();

  const shuffle = () => {
    dispatch({ type: "ADICIONAR", payload: sample(docs) });
  };
  const adicionar = () => {
    dispatch({ type: "ADICIONAR", payload: state });
  };
  return (
    <div style={ESTILO}>
      <div className="d-flex gap-2">
        <button onClick={shuffle}>shuffle</button>
        <button onClick={adicionar}>adicionar</button>
        <button onClick={() => console.log(state)}>ler</button>
      </div>
      <br />
      <div style={{ width: "12rem" }}>
        <Select
          onChange={setState}
          value={state}
          isClearable
          isSearchable={false}
          options={docs}
          getOptionValue={(o) => o.id}
          getOptionLabel={(o) => o.descricao}
        />
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
