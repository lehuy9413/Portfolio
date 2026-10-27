import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Phone, ArrowUpRight, FileText } from 'lucide-react';
import { CONTACT_STRINGS, PERSONAL_INFO } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/hooks/useLanguage';

export const Contact: React.FC = () => {
  const { language, isVi } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Minimalist Bento Contact Grid (Form removed as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Email Card - 7 Columns */}
          <Card className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between" hoverEffect>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{CONTACT_STRINGS.statusValue[language]}</span>
                </div>
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
                {CONTACT_STRINGS.emailLabel[language]}
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xl sm:text-2xl font-mono font-semibold text-neutral-900 dark:text-white hover:text-sky-500 dark:hover:text-cyan-400 transition-colors block break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                {isVi
                  ? 'Luôn sẵn sàng phản hồi trong vòng 24 giờ làm việc.'
                  : 'Always open for inquiries; typically responds within 24 hours.'}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-xs font-mono font-medium hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
                    <span>{CONTACT_STRINGS.copySuccess[language]}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{isVi ? 'Sao chép Email' : 'Copy Email'}</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
              >
                <span>{CONTACT_STRINGS.sendEmailButton[language]}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Card>

          {/* Right Column: Phone, Location & Socials - 5 Columns */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Phone & Location Card */}
            <Card className="p-6 sm:p-7 flex flex-col gap-5" hoverEffect>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-neutral-400 dark:text-neutral-500">
                    {CONTACT_STRINGS.phoneLabel[language]}
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm sm:text-base font-mono font-medium text-neutral-900 dark:text-white hover:text-sky-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-neutral-400 dark:text-neutral-500">
                    {CONTACT_STRINGS.locationLabel[language]}
                  </div>
                  <div className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    {PERSONAL_INFO.location[language]}
                  </div>
                </div>
              </div>
            </Card>

            {/* Profiles & CV Card */}
            <Card className="p-6 sm:p-7" hoverEffect>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
                {isVi ? 'Hồ sơ & Mạng xã hội' : 'Profiles & Socials'}
              </div>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href={PERSONAL_INFO.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{isVi ? 'Xem CV' : 'View CV'}</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
