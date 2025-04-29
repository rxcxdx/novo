import { useState } from "react";
import Modal from "react-modal";
import BoxVenda from "./BoxVenda";
import { fetchVendaSimples } from "./api";
import { useAsync } from "react-use";

function Conteudo({ vendaId }) {
    const {
      value: venda,
      loading,
      error,
    } = useAsync(() => fetchVendaSimples(vendaId));
    if (error) throw error;
    if (loading) return <div>carregando...</div>;
    return <BoxVenda venda={venda} />;
  }

export default function ModalVenda({ vendaId }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <small type='button' onClick={() => setOpen(true)}>open</small>
      <Modal isOpen={open} ariaHideApp={false} onRequestClose={() => setOpen(false)}>
        <Conteudo vendaId={vendaId} />
      </Modal>
    </>
  );
}
