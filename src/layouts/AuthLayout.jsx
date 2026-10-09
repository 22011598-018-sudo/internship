import Logo from "@/components/Logo";
import "./AuthLayout.css";

export default function AuthLayout({ aside, children }) {
  return (
    <main className="auth">
      {aside}
      <section className="auth__content">
        <div className="auth__mobile-logo">
          <Logo />
        </div>
        {children}
      </section>
    </main>
  );
}
