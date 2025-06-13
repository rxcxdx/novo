import { useState } from "react";
import Modal from "react-modal";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { ClipLoader } from "react-spinners";
import { useAsync } from "react-use";
import axios from "axios";
import delay from "delay";
import SuperVenda from "./SuperVenda";

function Conteudo({ vendaId, callback }) {
  const {
    value: venda,
    loading,
    error,
  } = useAsync(async () => {
    await delay(1000);
    const response = await axios("/venda/" + vendaId);
    return response.data;
  });
  if (error) throw error;
  if (loading) return <ClipLoader />;
  return (
    <div>
      <div><button onClick={() => callback()} className="btn-close" /></div>
      <SuperVenda venda={venda} />;
    </div>
  )
}

export default function ModalVenda({ vendaId }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FaEye type="button" onClick={() => setOpen(true)} title='ModalVenda' />
      <Modal isOpen={open} ariaHideApp={false}>
        <Conteudo vendaId={vendaId} callback={() => setOpen(false)} />
      </Modal>
    </>
  );
}
