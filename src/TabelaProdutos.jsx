import { Suspense, use } from "react";
import { fetchProdutos } from "./api";
import { LinkProduto } from "./links";
import { ClipLoader } from "react-spinners";

function Conteudo({ produtosPromise }) {
  const docs = use(produtosPromise);
  return (
    <div>
      <div className="d-flex gap-3 flex-wrap">
        {docs.map((o) => (
          <LinkProduto key={o.id} id={o.id} descricao={o.descricao} />
        ))}
      </div>
    </div>
  );
}

export default function TabelaProdutos() {
  const produtosPromise = fetchProdutos();
  return (
    <Suspense fallback={<ClipLoader />}>
      <Conteudo produtosPromise={produtosPromise} />
    </Suspense>
  );
}
