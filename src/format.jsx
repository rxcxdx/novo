import check from "check-types";

export function StrSafe({ value }) {
  if (check.not.string(value)) return <small className="text-danger">não é str</small>
  return <span>{value}</span>;
}
