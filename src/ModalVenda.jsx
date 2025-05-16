import { Suspense, use, useState } from "react";
import Modal from "react-modal";
import BoxVenda from "./BoxVenda";
import { fetchVendaCompleta } from "./api";

function Conteudo({ vendaCompletaPromise }) {
  const venda = use(vendaCompletaPromise);
  return <BoxVenda venda={venda} />
}

function Smart({ vendaId }) {
  const vendaCompletaPromise = fetchVendaCompleta(vendaId);
  return (
    <Suspense fallback={<div>carregando venda completa...</div>}>
      <Conteudo vendaCompletaPromise={vendaCompletaPromise} />
    </Suspense>
  );
}

// onRequestClose={() => setOpen(false)}

export default function ModalVenda({ vendaId }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <small type="button" onClick={() => setOpen(true)}>
        open
      </small>

      <Modal isOpen={open} ariaHideApp={false}>
        <div>
          <i className='text-danger' type='button' onClick={() => setOpen(false)}>close</i>
        </div>
        <Smart vendaId={vendaId} />
      </Modal>
    </>
  );
}
