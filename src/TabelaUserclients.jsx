import { Suspense, use } from "react";
import { LinkUserclient } from "./links";
import { fetchUserclients } from "./api";

function Conteudo({ userclientsPromise }) {
  const docs = use(userclientsPromise);
  return (
    <div>
      {docs.map((o) => (
        <div key={o.id}>
          <LinkUserclient id={o.id} username={o.username} />
        </div>
      ))}
    </div>
  );
}

export default function TabelaUserclients() {
  const userclientsPromise = fetchUserclients();
  return (
    <Suspense fallback={<div>Carregando userclients...</div>}>
      <Conteudo userclientsPromise={userclientsPromise} />
    </Suspense>
  );
}
