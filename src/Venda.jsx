import { Suspense, use } from "react";
import BoxBean from "./BoxBean";
import BoxVenda from "./BoxVenda";
import { fetchVendaCompleta } from "./api";

function Conteudo({ vendaPromise }) {
  const venda = use(vendaPromise); // sempre vai ser obj
  return (
    <div>
      <BoxVenda venda={venda} />
      <hr />
      <div>
        {venda.cart.map((o) => (
          <div key={o.identifier} className="my-3">
            <BoxBean bean={o} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Venda({ vendaId }) {
  const vendaPromise = fetchVendaCompleta(vendaId);
  return (
    <Suspense fallback={<div>carregando venda...</div>}>
      <Conteudo vendaPromise={vendaPromise} />
    </Suspense>
  );
}
