import { useNavigate } from "react-router";
import { useError } from "react-use";
import { useTransition } from "react";
import { mutationApagar } from "./api";

export default function Apagar({ chaves }) {
  const navigate = useNavigate();
  const dispatchError = useError();
  const [isPending, startTransition] = useTransition();
  const action = async () => {
    try {
      await mutationApagar(chaves);
      navigate("/sucesso");
    } catch (err) {
      dispatchError(err);
    }
  };
  return (
    <button
      style={{ border: "2px solid red" }}
      disabled={isPending}
      onClick={() => startTransition(action)}
    >
      apagar
    </button>
  );
}
