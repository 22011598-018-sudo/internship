import { useState } from "react";
import { login } from "@/services/authService";
import { validateEmail, validatePassword } from "@/utils/validators";

export default function useLoginForm() {
  const [values, setValues] = useState({ email: "", password: "", remember: true });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = {
      email: validateEmail(values.email),
      password: validatePassword(values.password),
    };
    setErrors(nextErrors);
    if (nextErrors.email || nextErrors.password) return;

    setStatus("loading");
    try {
      const user = await login(values);
      setStatus("success");
      setMessage(`Signed in as ${user.email}.`);
    } catch (err) {
      setStatus("error");
      setMessage(err.message);
    }
  };

  return { values, errors, status, message, handleChange, handleSubmit };
}
