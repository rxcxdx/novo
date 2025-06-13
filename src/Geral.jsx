import { useSWRConfig } from "swr";

export default function Geral() {
  const { cache } = useSWRConfig();
  return (
    <div>

      <div className="hstack gap-1">
        <small><b>{process.env.PUBLIC_BASE_URL}</b></small>
        <small type='button' onClick={() => console.log(cache)}>cache</small>
      </div>

    </div>
  );
}
