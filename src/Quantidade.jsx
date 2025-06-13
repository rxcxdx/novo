import { useDispatch } from "react-redux";
import { toNumber } from "lodash-es";
import Swal from "sweetalert2";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";

const Prompt = Swal.mixin({
  input: "number",
  inputLabel: "quantidade",
  showDenyButton: true,
  inputAttributes: {
    step: 1,
  },
  animation: false
});

export default function Quantidade({ bean }) {
  const dispatch = useDispatch();


  const tarefa = async () => {
    const { isConfirmed, value } = await Prompt.fire({
      inputValue: bean.quantidade,
      title: bean.descricao,
    });
    if (!isConfirmed) return;
    dispatch({
      type: "QUANTIDADE",
      identifier: bean.identifier,
      payload: toNumber(value),
    });
  };

  return (
    <div>
      <span>{bean.quantidade}</span>&nbsp;
      <FaEdit type="button" onClick={tarefa} /> 
    </div>
  );
}
