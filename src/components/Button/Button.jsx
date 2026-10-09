import "./Button.css";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  loading = false,
  disabled = false,
  fullWidth = false,
  ...rest
}) {
  const classes = ["btn", `btn--${variant}`, fullWidth && "btn--full", loading && "is-loading"]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} disabled={disabled || loading} {...rest}>
      {loading && <span className="btn__spinner" aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}
