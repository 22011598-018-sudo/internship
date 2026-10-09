import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import InputField from "@/components/InputField";
import SocialButton from "@/components/SocialButton";
import { GithubIcon, GoogleIcon, LockIcon, MailIcon } from "@/components/icons";
import useLoginForm from "@/hooks/useLoginForm";
import "./LoginForm.css";

export default function LoginForm() {
  const { values, errors, status, message, handleChange, handleSubmit } = useLoginForm();

  return (
    <div className="login">
      <header className="login__header">
        <h2 className="login__title">Welcome back</h2>
        <p className="login__subtitle">Sign in to continue your internship.</p>
      </header>

      <form className="login__form" onSubmit={handleSubmit} noValidate>
        {status === "error" && <Alert type="error">{message}</Alert>}
        {status === "success" && <Alert type="success">{message}</Alert>}

        <InputField
          label="Email"
          name="email"
          type="email"
          icon={<MailIcon />}
          placeholder="intern@example.com"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          icon={<LockIcon />}
          placeholder="Enter your password"
          autoComplete="current-password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="login__row">
          <Checkbox
            label="Keep me signed in"
            name="remember"
            checked={values.remember}
            onChange={handleChange}
          />
          <a href="#forgot">Forgot password?</a>
        </div>

        <Button type="submit" fullWidth loading={status === "loading"}>
          {status === "loading" ? "Signing in" : "Sign in"}
        </Button>
      </form>

      <div className="login__divider">
        <span>or continue with</span>
      </div>

      <div className="login__social">
        <SocialButton icon={<GoogleIcon />}>Google</SocialButton>
        <SocialButton icon={<GithubIcon />}>GitHub</SocialButton>
      </div>

      <p className="login__footer">
        New intern? <a href="#signup">Create an account</a>
      </p>

      <p className="login__hint">
        Demo: <code>intern@example.com</code> / <code>Intern@123</code>
      </p>
    </div>
  );
}
