import axios from "axios";
import isError from "lodash-es/isError";
import get from "lodash-es/get";

// quando servidor esá desligado nao tenho error.response
// error.response.data.problema = sempre será nonEmptyStr

export default function BoxError({ error }) {
  if (!isError(error)) {
    return <div>BoxError não recebeu um erro</div>;
  }

  if (axios.isAxiosError(error)) {
    return (
      <div>
        <div>
          <small>sou do axios</small>
        </div>

        <div>
          <b>{get(error, "response.data.problema", null)}</b>
        </div>

        <div>
          <i>{error.message}</i>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <b>não sou do axios</b>
      </div>
      <div>
        <span>{error.message}</span>
      </div>
      <div>
        <i>{error.name}</i>
      </div>
    </div>
  );
}
