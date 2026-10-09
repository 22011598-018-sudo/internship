import { DEMO_CREDENTIALS } from "@/constants";

/**
 * Mock login. Replace the body with a real API call later, e.g.
 *   const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {...});
 */
export function login({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok =
        email.trim().toLowerCase() === DEMO_CREDENTIALS.email &&
        password === DEMO_CREDENTIALS.password;

      if (ok) resolve({ name: "Intern", email });
      else reject(new Error("Email or password is incorrect. Try again."));
    }, 1100);
  });
}
