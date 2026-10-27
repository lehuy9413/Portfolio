import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const FloatingDock: React.FC = () => {
  return (
    <aside
      aria-label="Social connections"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-3.5 bg-white dark:bg-neutral-900/90 backdrop-blur-md border-l border-y border-neutral-200 dark:border-neutral-800 rounded-l-2xl py-4 px-2.5 shadow-lg shadow-black/5"
    >
      <a
        href={PERSONAL_INFO.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors hover:scale-110"
      >
        <GithubIcon size={18} />
      </a>

      <a
        href={`tel:${PERSONAL_INFO.phone}`}
        aria-label="Call directly"
        className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors hover:scale-110"
      >
        <Phone className="w-4 h-4 stroke-[1.75]" />
      </a>

      <a
        href={PERSONAL_INFO.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors hover:scale-110"
      >
        <LinkedinIcon size={18} />
      </a>

      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        aria-label="Send Email"
        className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors hover:scale-110"
      >
        <Mail className="w-4 h-4 stroke-[1.75]" />
      </a>
    </aside>
  );
};
