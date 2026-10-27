import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  MapPin,
  Clock,
  Copy,
  Check,
  Sparkles,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_INFO, PERSONAL_INFO } from '@/data/portfolioData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { ContactFormData, ContactFormErrors, SubmissionStatus } from '@/types';
import { cn } from '@/utils/cn';

const INITIAL_FORM_DATA: ContactFormData = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
};

export const Contact: React.FC = () => {
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

    // Clear error for field when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên của bạn.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Họ tên cần có ít nhất 2 ký tự.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập địa chỉ email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Địa chỉ email không hợp lệ.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Vui lòng chọn hoặc nhập tiêu đề.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Vui lòng nhập nội dung tin nhắn.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Nội dung tin nhắn tối thiểu 10 ký tự.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('submitting');

    try {
      // Simulate real-world async API call
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#06b6d4', '#10b981', '#8b5cf6'],
        });
      } catch {
        // Fallback if canvas is unavailable
      }

      setStatus('success');
      setFormData(INITIAL_FORM_DATA);
    } catch {
      setStatus('error');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Kết nối nhanh"
          badgeVariant="emerald"
          title="Khởi đầu Dự án Mới Cùng Tôi"
          gradientWord="Khởi đầu Dự án"
          description={CONTACT_INFO.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Guarantees */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card className="p-6 sm:p-8 bg-white/70 dark:bg-slate-900/60" glow>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary-500" />
                Thông tin liên hệ trực tiếp
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Bạn có thể gửi email trực tiếp hoặc để lại tin nhắn qua biểu mẫu, tôi sẽ phản hồi trong ngày.
              </p>

              <div className="mt-6 space-y-4">
                {/* Email Item with Copy Button */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary-100/60 dark:bg-primary-950/60 text-primary-600 dark:text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500">Email cá nhân</div>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-sm font-semibold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors cursor-pointer"
                    aria-label="Sao chép địa chỉ email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100/60 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500">Vị trí làm việc</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {CONTACT_INFO.location}
                    </div>
                  </div>
                </div>

                {/* Response SLA Item */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-100/60 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500">Thời gian phản hồi</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {CONTACT_INFO.responseTime}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">Tình trạng tiếp nhận:</span>
                <Badge variant="emerald" dot pulse size="sm">
                  {PERSONAL_INFO.status}
                </Badge>
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 lg:p-10 bg-white/80 dark:bg-slate-900/70" gradientBorder>
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-primary-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Gửi tin nhắn trực tiếp
                </h3>
              </div>

              {/* Success Notification */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                        Tin nhắn đã được gửi thành công!
                      </div>
                      <div className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                        Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi lại email của bạn sớm nhất.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name Field */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Họ và tên <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Ví dụ: Nguyễn Văn A"
                      className={cn(
                        'w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-950/60 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all',
                        errors.fullName
                          ? 'border-rose-400 focus:ring-rose-500/30'
                          : 'border-slate-200 dark:border-slate-800 focus:ring-primary-500/30 focus:border-primary-500'
                      )}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <p
                        id="fullName-error"
                        className="mt-1 text-xs text-rose-500 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Địa chỉ Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                      className={cn(
                        'w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-950/60 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all',
                        errors.email
                          ? 'border-rose-400 focus:ring-rose-500/30'
                          : 'border-slate-200 dark:border-slate-800 focus:ring-primary-500/30 focus:border-primary-500'
                      )}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1 text-xs text-rose-500 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Tiêu đề công việc <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Ví dụ: Thảo luận dự án Web App / Cơ hội việc làm Senior React"
                    className={cn(
                      'w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-950/60 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all',
                      errors.subject
                        ? 'border-rose-400 focus:ring-rose-500/30'
                        : 'border-slate-200 dark:border-slate-800 focus:ring-primary-500/30 focus:border-primary-500'
                    )}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p
                      id="subject-error"
                      className="mt-1 text-xs text-rose-500 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Nội dung chi tiết <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mô tả sơ lược về yêu cầu dự án, tech stack hoặc timeline mong muốn của bạn..."
                    className={cn(
                      'w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-950/60 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all resize-none',
                      errors.message
                        ? 'border-rose-400 focus:ring-rose-500/30'
                        : 'border-slate-200 dark:border-slate-800 focus:ring-primary-500/30 focus:border-primary-500'
                    )}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1 text-xs text-rose-500 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    isLoading={status === 'submitting'}
                    rightIcon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    {status === 'submitting' ? 'Đang gửi...' : 'Gửi tin nhắn ngay'}
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
