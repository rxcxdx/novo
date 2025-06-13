import check from "check-types";
import dayjs from "dayjs";

export default function Horario({ payload }) {
  const joker = check.nonEmptyString(payload) ? payload : null
  const v = dayjs(joker).format("DD/MM/YYYY HH:mm:ss")
  return <span>{v}</span>;
}

