'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export function LangToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchTo = (next: 'en' | 'es') => {
    if (next === locale) return;
    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    router.push(newPath);
  };

  return (
    <div className="lang-tabs h-[30px]">
      <button
        onClick={() => switchTo('en')}
        className={`h-full ${locale === 'en' ? 'on' : ''}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => switchTo('es')}
        className={`h-full ${locale === 'es' ? 'on' : ''}`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}
