export type ContactFormState = {
  success?: boolean;
  error?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
};