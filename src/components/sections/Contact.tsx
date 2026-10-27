import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Copy, Check, AlertCircle, MapPin } from 'lucide-react';
import { CONTACT_STRINGS, PERSONAL_INFO } from '@/data/portfolioData';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/hooks/useLanguage';
import type { ContactFormData, ContactFormErrors, SubmissionStatus } from '@/types';
import { cn } from '@/utils/cn';

const INITIAL_FORM_DATA: ContactFormData = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
};

export const Contact: React.FC = () => {
  const { language, isVi } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};
    const errorStrings = CONTACT_STRINGS.errors;

    if (!formData.fullName.trim()) {
      newErrors.fullName = errorStrings.nameRequired[language];
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = errorStrings.nameShort[language];
    }

    if (!formData.email.trim()) {
      newErrors.email = errorStrings.emailRequired[language];
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = errorStrings.emailInvalid[language];
    }

    if (!formData.subject.trim()) {
      newErrors.subject = errorStrings.subjectRequired[language];
    }

    if (!formData.message.trim()) {
      newErrors.message = errorStrings.messageRequired[language];
    } else if (formData.message.trim().length < 10) {
      newErrors.message = errorStrings.messageShort[language];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('submitting');

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setFormData(INITIAL_FORM_DATA);
    } catch {
      setStatus('error');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block mb-2">
            {isVi ? 'KẾT NỐI' : 'CONTACT'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-900 dark:text-white">
            {CONTACT_STRINGS.heading[language]}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl">
            {CONTACT_STRINGS.subheading[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Card className="p-6 md:p-8">
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-2">
                {isVi ? 'Thông tin trực tiếp' : 'Direct Contact'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
                {isVi
                  ? 'Liên hệ trực tiếp qua email hoặc để lại lời nhắn qua biểu mẫu bên cạnh.'
                  : 'Reach out directly via email or send a message using the form.'}
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                    <div>
                      <div className="text-[10px] font-mono text-neutral-400">
                        {CONTACT_STRINGS.emailLabel[language]}
                      </div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:underline"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors cursor-pointer"
                    aria-label={isVi ? 'Sao chép email' : 'Copy email address'}
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      {CONTACT_STRINGS.locationLabel[language]}
                    </div>
                    <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                      {PERSONAL_INFO.location[language]}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 md:p-8">
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="mb-5 p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/50 flex items-start gap-2.5"
                  >
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-emerald-800 dark:text-emerald-300">
                      {CONTACT_STRINGS.successMessage[language]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      {CONTACT_STRINGS.nameLabel[language]}
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder={isVi ? 'Nguyễn Văn A' : 'Jane Doe'}
                      className={cn(
                        'w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-900 border text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 transition-all',
                        errors.fullName
                          ? 'border-rose-400 focus:ring-rose-400'
                          : 'border-neutral-200 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600 focus:ring-neutral-400'
                      )}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      {CONTACT_STRINGS.emailInputLabel[language]}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className={cn(
                        'w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-900 border text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 transition-all',
                        errors.email
                          ? 'border-rose-400 focus:ring-rose-400'
                          : 'border-neutral-200 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600 focus:ring-neutral-400'
                      )}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    {CONTACT_STRINGS.subjectLabel[language]}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={isVi ? 'Thảo luận dự án web' : 'Project Inquiry / Frontend Opportunity'}
                    className={cn(
                      'w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-900 border text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 transition-all',
                      errors.subject
                        ? 'border-rose-400 focus:ring-rose-400'
                        : 'border-neutral-200 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600 focus:ring-neutral-400'
                    )}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    {CONTACT_STRINGS.messageLabel[language]}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={isVi ? 'Nội dung chi tiết...' : 'Hi Huy, I would like to discuss...'}
                    className={cn(
                      'w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-900 border text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 transition-all resize-none',
                      errors.message
                        ? 'border-rose-400 focus:ring-rose-400'
                        : 'border-neutral-200 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600 focus:ring-neutral-400'
                    )}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    isLoading={status === 'submitting'}
                    rightIcon={<Send className="w-3.5 h-3.5" />}
                  >
                    {status === 'submitting'
                      ? CONTACT_STRINGS.sendingButton[language]
                      : CONTACT_STRINGS.sendButton[language]}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
