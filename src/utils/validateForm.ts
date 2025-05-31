import type { ContactFormState } from "../types/contactForm";

export function validateForm(formData: FormData, t: any) {
  const fieldErrors: ContactFormState["fieldErrors"] = {};
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name?.trim()) fieldErrors.name = t.contactForm.nameRequired;
  if (!email?.trim()) fieldErrors.email = t.contactForm.emailRequired;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = t.contactForm.emailInvalid;
  if (!subject?.trim()) fieldErrors.subject = t.contactForm.subjectRequired;
  if (!message?.trim()) fieldErrors.message = t.contactForm.messageRequired;

  return { fieldErrors, isValid: Object.keys(fieldErrors).length === 0 };
}