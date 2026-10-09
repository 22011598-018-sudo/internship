import { VALIDATION_MESSAGES as MSG } from "@/constants";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
  if (!email.trim()) return MSG.emailRequired;
  if (!EMAIL_REGEX.test(email)) return MSG.emailInvalid;
  return "";
}

export function validatePassword(password) {
  if (!password) return MSG.passwordRequired;
  if (password.length < 6) return MSG.passwordShort;
  return "";
}
