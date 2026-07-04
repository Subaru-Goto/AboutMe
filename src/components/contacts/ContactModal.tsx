import { useActionState, useRef } from "react";
import { translations } from "../../constant/data";
import { useLanguage } from "../../context/LanguageContext";
import {
  PaperAirplaneIcon as Send,
  XMarkIcon as X,
  UserIcon as User,
  EnvelopeIcon as Mail,
  ChatBubbleLeftIcon as MessageSquare,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../config/emailConfig";
import type { ContactFormState } from "../../types/contactForm";
import { validateForm } from "../../utils/validateForm";

function ContactModal({
  setIsContactModalOpen,
}: {
  setIsContactModalOpen: (isOpen: boolean) => void;
}) {
  const { language } = useLanguage();
  const t = translations[language];
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, formAction, isPending] = useActionState(
    submitContactForm,
    {}
  );

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  async function submitContactForm(
    _: ContactFormState,
    formData: FormData
  ): Promise<ContactFormState> {
    const { fieldErrors, isValid } = validateForm(formData, t);

    if (!isValid) {
      return { fieldErrors };
    }

    try {
      const templateParams = {
        from_name: formData.get("name"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        reply_to: formData.get("email"),
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      console.log("Email sent successfully:", result);

      if (formRef.current) {
        formRef.current.reset();
      }

      setTimeout(() => {
        setIsContactModalOpen(false);
      }, 3000);

      return { success: true };
    } catch (error) {
      console.error("EmailJS error:", error);
      return { error: t.contactForm.error };
    }
  }

  const inputClass = (error?: string) =>
    `w-full px-3 py-2 border rounded-field focus:ring-2 focus:ring-accent focus:border-transparent transition-colors bg-surface ${
      error ? "border-red-500" : "border-line"
    }`;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-surface-raised rounded-2xl border border-line max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-line">
          <h3 className="text-xl font-semibold">{t.contactForm.title}</h3>
          <button
            onClick={closeContactModal}
            className="text-ink-tertiary hover:text-ink transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <form
            ref={formRef}
            action={formAction}
            className="space-y-4"
            aria-labelledby="contact-form-title"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-ink-secondary mb-2"
              >
                <User className="inline h-4 w-4 mr-2" />
                {t.contactForm.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={inputClass(formState.fieldErrors?.name)}
                placeholder={t.contactForm.name}
              />
              {formState.fieldErrors?.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {formState.fieldErrors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-ink-secondary mb-2"
              >
                <Mail className="inline h-4 w-4 mr-2" />
                {t.contactForm.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={inputClass(formState.fieldErrors?.email)}
                placeholder={t.contactForm.email}
              />
              {formState.fieldErrors?.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {formState.fieldErrors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-ink-secondary mb-2"
              >
                {t.contactForm.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={inputClass(formState.fieldErrors?.subject)}
                placeholder={t.contactForm.subject}
              />
              {formState.fieldErrors?.subject && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {formState.fieldErrors.subject}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-ink-secondary mb-2"
              >
                <MessageSquare className="inline h-4 w-4 mr-2" />
                {t.contactForm.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`${inputClass(formState.fieldErrors?.message)} resize-none`}
                placeholder={t.contactForm.message}
              />
              {formState.fieldErrors?.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {formState.fieldErrors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-accent hover:bg-accent-hover text-white py-3 px-6 rounded-full font-medium focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isPending ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  {t.contactForm.sending}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {t.contactForm.send}
                </>
              )}
            </button>

            {formState.success && (
              <div className="p-3 bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 rounded-field text-sm">
                {t.contactForm.success}
              </div>
            )}

            {formState.error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 rounded-field text-sm">
                {formState.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
