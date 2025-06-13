import axios from "axios";
import useSWR from "swr";
import delay from "delay";
import { Suspense } from "react";
import { SyncLoader } from "react-spinners";

const optionsSWR = {
  shouldRetryOnError: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  revalidateIfStale: false,
  suspense: true,
};

function Conteudo() {
  const { data } = useSWR(
    "ambiente",
    async () => {
      await delay(1000);
      const respose = await axios("/ambiente");
      return respose.data;
    },
    optionsSWR
  );
  return (
    <div style={{ width: "fit-content", border: '1px solid black', padding: '5px' }}>
      <div>{data[0]}</div>
      <div>{data[1].eagle}</div>
      <div>{data[2]}</div>
    </div>
  );
}

export default function Ambiente() {
  return (
    <Suspense fallback={<SyncLoader />}>
      <Conteudo />
    </Suspense>
  );
}
