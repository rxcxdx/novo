import { Suspense, use } from "react";
import BoxBean from "./BoxBean";
import BoxVenda from "./BoxVenda";
import { fetchVendaCompleta } from "./api";
import { useParams } from "react-router";

function Conteudo({ vendaPromise }) {
  const venda = use(vendaPromise);
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

export default function Venda() {
  const routerParams = useParams();
  const vendaPromise = fetchVendaCompleta(routerParams.vendaId);
  return (
    <div>
      <Suspense fallback={<div>carregando venda...</div>}>
        <Conteudo vendaPromise={vendaPromise} />
      </Suspense>
    </div>
  );
}
