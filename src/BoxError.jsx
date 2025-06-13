import { get, isError } from "lodash-es";

export default function BoxError({ payload }) {
  if (!isError(payload)) return <div>BoxError não recebeu um erro</div>;
  const a = get(payload, "name");
  const b = get(payload, "message");
  const c = get(payload, "response.data.name");
  const d = get(payload, "response.data.message");
  return (
    <div>
      <div>name</div>
      <div>{a}</div>
      <div>message</div>
      <div>{b}</div>
      <div><b>name</b></div>
      <div>{c}</div>
      <div><b>message</b></div>
      <div>{d}</div>
    </div>
  );
}

