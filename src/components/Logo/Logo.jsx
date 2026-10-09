import { APP_NAME } from "@/constants";
import "./Logo.css";

export default function Logo({ light = false }) {
  return (
    <div className={`logo ${light ? "logo--light" : ""}`}>
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="22" height="22">
          <path d="M9 22V10h4.2c3.4 0 5.3 1.7 5.3 4.4 0 2.8-1.9 4.5-5.3 4.5H12V22H9Z" fill="currentColor" />
          <circle cx="23" cy="21" r="2.6" fill="#FF6B57" />
        </svg>
      </span>
      <span className="logo__text">{APP_NAME}</span>
    </div>
  );
}
