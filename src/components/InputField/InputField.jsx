import { useId, useState } from "react";
import { EyeIcon, EyeOffIcon } from "@/components/icons";
import "./InputField.css";

export default function InputField({ label, icon, error, type = "text", ...rest }) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={`field ${error ? "field--error" : ""}`}>
      <label htmlFor={id} className="field__label">
        {label}
      </label>
      <div className="field__control">
        {icon && <span className="field__icon">{icon}</span>}
        <input
          id={id}
          type={isPassword && visible ? "text" : type}
          className="field__input"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
        {isPassword && (
          <button
            type="button"
            className="field__toggle"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Hide password" : "Show password"}
          >
            {visible ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="field__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
