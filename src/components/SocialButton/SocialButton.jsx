import "./SocialButton.css";

export default function SocialButton({ icon, children, ...rest }) {
  return (
    <button type="button" className="social" {...rest}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
