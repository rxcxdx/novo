import { Suspense, use, useState } from "react";
import { fetchProdutos } from "./api";
import filter from "lodash-es/filter";
import { LinkProduto } from "./links";

function filtar(docs, joker) {
  return filter(docs, (o) => o.descricao.includes(joker));
}

function Conteudo({ produtosPromise }) {
  const docs = use(produtosPromise);
  const [joker, setJoker] = useState("");
  const FILTRADO = joker ? filtar(docs, joker) : docs;
  return (
    <div>
      <div>linhas: {docs.length}</div>
      <div>
        <button onClick={() => setJoker('')}>limpar filtro</button>
      </div>
      <div>linhas exibidas: {FILTRADO.length}</div>
      <div>
        <small>filtro ativado? (método includes): {joker ? "sim" : "nao"}</small>
      </div>
      <div>
        <input
          type="text"
          value={joker}
          onChange={(e) => setJoker(e.target.value)}
          placeholder="descricao"
        />
      </div>
      {FILTRADO.map((o) => (
        <div key={o.id}>
          <LinkProduto id={o.id} descricao={o.descricao} />
        </div>
      ))}
    </div>
  );
}

export default function TabelaProdutos() {
  const produtosPromise = fetchProdutos();
  return (
    <Suspense fallback={<div>Carregando produtos...</div>}>
      <Conteudo produtosPromise={produtosPromise} />
    </Suspense>
  );
}
