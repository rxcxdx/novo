import { useCopyToClipboard } from "react-use";

export default function Copy({ value }) {
  const [, copyToClipboard] = useCopyToClipboard();
  return (
    <small type="button" onClick={() => copyToClipboard(value)} className="text-success" title='copiar'>
      {value}
    </small>
  );
}
