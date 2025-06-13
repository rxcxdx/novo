import { FaPlusSquare } from "@react-icons/all-files/fa/FaPlusSquare";
import { useDispatch } from "react-redux";

export default function Plus({ bean }) {
  const dispatch = useDispatch();

  const tarefa = () => {
    dispatch({
      type: "PLUS",
      identifier: bean.identifier,
    });
  };

  return (
    <div>
      <FaPlusSquare size="2em" onClick={tarefa} type="button" />
    </div>
  );
}
