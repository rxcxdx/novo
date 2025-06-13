import { useState } from "react";
import { useDispatch } from "react-redux";
import { sample } from "lodash-es";
import Select from "react-select";
import useSWR from "swr";
import axios from "axios";
// import delay from "delay";

const optionsSWR = {
  shouldRetryOnError: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  revalidateIfStale: false,
};

export default function Loja2() {
  const dispatch = useDispatch();
  const [state, setState] = useState(null);
  const {
    mutate,
    data: docs,
    error,
    isValidating,
  } = useSWR(
    "loja",
    async () => {
      // await delay(1000);
      const response = await axios("/loja");
      return response.data;
    },
    optionsSWR
  );
  if (error) throw error;
  const shuffle = () => {
    dispatch({ type: "ADICIONAR", payload: sample(docs) });
  };
  const adicionar = () => {
    dispatch({ type: "ADICIONAR", payload: state });
  };
  return (
    <div className="border border-primary p-2">
      <div className="hstack gap-3">
      <button onClick={adicionar}>adicionar</button>
        <button onClick={shuffle}>shuffle</button>
        <button onClick={() => mutate()}>atualizar</button>
      </div>
      <div>
        <small>metodo includes</small>
      </div>
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
          isLoading={isValidating}
        />
      </div>
    </div>
  );
}
