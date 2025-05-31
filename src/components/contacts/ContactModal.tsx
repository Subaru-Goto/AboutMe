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

      // Reset form and close modal after success
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {t.contactForm.title}
          </h3>
          <button
            onClick={closeContactModal}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <form
            action={formAction}
            className="space-y-4"
            aria-labelledby="contact-form-title"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                <User className="inline h-4 w-4 mr-2" />
                {t.contactForm.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 ${
                  formState.fieldErrors?.name
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
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
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                <Mail className="inline h-4 w-4 mr-2" />
                {t.contactForm.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 ${
                  formState.fieldErrors?.email
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
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
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t.contactForm.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 ${
                  formState.fieldErrors?.subject
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
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
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                <MessageSquare className="inline h-4 w-4 mr-2" />
                {t.contactForm.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 resize-none ${
                  formState.fieldErrors?.message
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
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
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

            {/* Status Messages */}
            {formState.success && (
              <div className="p-3 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 rounded-lg text-sm">
                {t.contactForm.success}
              </div>
            )}

            {formState.error && (
              <div className="p-3 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg text-sm">
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
