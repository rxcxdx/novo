import { useDispatch } from "react-redux";
import { toNumber } from "lodash-es";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import Swal from "sweetalert2";

const Prompt = Swal.mixin({
  input: "number",
  inputLabel: "valor",
  showDenyButton: true,
  inputAttributes: {
    step: 0.01,
  },
  animation: false
});

export default function Valor({ bean }) {
  const dispatch = useDispatch();
  const editarValor = async () => {
    const { isConfirmed, value } = await Prompt.fire({
      inputValue: bean.valor,
      title: bean.descricao,
    });
    if (!isConfirmed) return;
    dispatch({
      type: "VALOR",
      identifier: bean.identifier,
      payload: toNumber(value),
    });
  };
  return (
    <div>
      <span>{bean.valor}</span>&nbsp;
      <FaEdit type="button" onClick={editarValor} /> 
    </div>
  );
}
