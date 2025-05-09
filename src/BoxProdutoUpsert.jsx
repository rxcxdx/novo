import { Suspense } from "react";
import ProdutoUpsert from "./ProdutoUpsert";
import { fetchCategorias, fetchProduto } from "./api";

export default function BoxProdutoUpsert({ productId }) {
  const allPromise = Promise.all([fetchProduto(productId), fetchCategorias()]);
  return (
    <div>
      <Suspense fallback={<div>carregando informações...</div>}>
        <ProdutoUpsert allPromise={allPromise} />
      </Suspense>
    </div>
  );
}
