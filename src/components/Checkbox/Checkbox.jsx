import { CheckIcon } from "@/components/icons";
import "./Checkbox.css";

export default function Checkbox({ label, ...rest }) {
  return (
    <label className="check">
      <input type="checkbox" className="check__input" {...rest} />
      <span className="check__box">
        <CheckIcon width={14} height={14} />
      </span>
      <span>{label}</span>
    </label>
  );
}
