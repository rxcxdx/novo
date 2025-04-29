import { Suspense, use } from "react";
import { fetchTimeline } from "./api";
import ModalBean from "./ModalBean";

function Conteudo({ timelinePromise }) {
  const docs = use(timelinePromise);
  return (
    <div>
      <h1>Beans</h1>
      <div>Linhas: {docs.length}</div>
      {docs.map((o) => (
        <div key={o.identifier} className="d-flex gap-3">
          <ModalBean bean={o} />
          <i>{o.descricao}</i>
          <b>{o.valor}</b>
          <small>{o.identifier}</small>
        </div>
      ))}
    </div>
  );
}

export default function Timeline() {
  const timelinePromise = fetchTimeline();
  return (
    <div>
      <Suspense fallback={<div>Carregando dados...</div>}>
        <Conteudo timelinePromise={timelinePromise} />
      </Suspense>
    </div>
  );
}
