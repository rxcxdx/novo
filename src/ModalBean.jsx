import { useState } from "react";
import Modal from "react-modal";
import BoxBean from "./BoxBean";

export default function ModalBean({ bean }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <small type='button' onClick={() => setOpen(true)}>open</small>
      <Modal isOpen={open} ariaHideApp={false} onRequestClose={() => setOpen(false)}>
        <BoxBean bean={bean} />
      </Modal>
    </>
  );
}
