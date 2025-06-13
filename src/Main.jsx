import { Toaster } from "react-hot-toast";
import Gold from "./Gold";
import Geral from "./Geral";

const TOAST_OPTIONS = {
  success: {
    duration: 700,
    position: "top-left",
  },
  error: {
    duration: 1500,
    style: {
      color: "red",
      background: "#171616",
    },
  },
};

export default function Main() {
  return (
    <div>
      <Geral />
      <Gold />
      <div style={{ marginTop: '100px'}}>rodapé</div>
      <Toaster toastOptions={TOAST_OPTIONS} />
    </div>
  );
}
