import { useState } from "react";
import { useDispatch } from "react-redux";
import { sample } from "lodash-es";
import Select from "react-select";
import { useAsync } from "react-use";
import axios from "axios";

export default function Loja1() {
  const dispatch = useDispatch();
  const [state, setState] = useState(null);
  const {
    value: docs,
    loading,
    error,
  } = useAsync(async () => {
    const response = await axios("/loja");
    return response.data;
  });
  if (error) throw error;
  const shuffle = () => {
    dispatch({ type: "ADICIONAR", payload: sample(docs) });
  };
  const adicionar = () => {
    dispatch({ type: "ADICIONAR", payload: state });
  };
  return (
    <div>
      <div className="d-flex gap-2">
        <button onClick={shuffle}>shuffle</button>
        <button onClick={adicionar}>adicionar</button>
      </div>
      <div><small>metodo includes</small></div>
      <div style={{ width: "18rem" }}>
        <Select
        className="border border-dark"
          onChange={setState}
          value={state}
          isClearable
          options={docs}
          getOptionValue={(o) => o.id}
          getOptionLabel={(o) => o.descricao}
          filterOption={(o, v) => o.label.includes(v)}
          isLoading={loading}
        />
      </div>
    </div>
  );
}
