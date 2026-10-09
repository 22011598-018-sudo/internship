import { HeroPanel, LoginForm } from "@/components";
import AuthLayout from "@/layouts/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout aside={<HeroPanel />}>
      <LoginForm />
    </AuthLayout>
  );
}
