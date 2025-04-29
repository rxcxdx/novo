import { Suspense, use, useState } from "react";
import { Link } from "react-router";
import { fetchProdutos } from "./api";
import filter from "lodash-es/filter";

function filtar(docs, joker) {
  return filter(docs, o => o.descricao.includes(joker))
}

function Conteudo({ produtosPromise }) {
  const docs = use(produtosPromise);
  const [joker, setJoker] = useState('')

  const FILTRADO = joker ? filtar(docs, joker) : docs
  
  return (
    <div>
      <div>Linhas total: {docs.length}</div>

      <div>
        filtro ativado: {joker ? 'sim' : 'nao'}
      </div>

      <div>
        <input placeholder='opcional' type="text" value={joker} onChange={e => setJoker(e.target.value)} />
      </div>


      {FILTRADO.map((o) => (
        <div key={o.id}>
          <span>{o.descricao}</span>
          &nbsp;
          <Link to={"/produto/" + o.id}>{o.id}</Link>
        </div>
      ))}
    </div>
    
  );
}

export default function TabelaProdutos() {
  const produtosPromise = fetchProdutos();
  return (
    <div>
      <div>
        <Link to="/novo_produto">Novo produto</Link>
      </div>
      <Suspense fallback={<div>Carregando produtos...</div>}>
        <Conteudo produtosPromise={produtosPromise} />
      </Suspense>
    </div>
  );
}
