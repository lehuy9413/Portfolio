import { useCallback } from 'react';

export function useScrollTo() {
  const scrollTo = useCallback((targetId: string, offset = 80) => {
    const cleanId = targetId.replace(/^#/, '');
    const element = document.getElementById(cleanId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);

  return { scrollTo };
}
