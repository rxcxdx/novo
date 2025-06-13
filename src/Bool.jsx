import check from "check-types";

export default function Bool({ value }) {
  if (check.not.boolean(value)) return <span>não é bool</span>;
  return value ? <span>true</span> : <span>false</span>;
}

