import { AlertIcon, CheckIcon } from "@/components/icons";
import "./Alert.css";

export default function Alert({ type = "error", children }) {
  return (
    <div className={`alert alert--${type}`} role={type === "error" ? "alert" : "status"}>
      {type === "error" ? <AlertIcon /> : <CheckIcon />}
      <span>{children}</span>
    </div>
  );
}
