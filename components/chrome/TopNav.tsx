'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { LangToggle } from './LangToggle';
import { DarkModeToggle } from './DarkModeToggle';

export function TopNav() {
  const t = useTranslations('topnav');
  const locale = useLocale();

  const links = [
    { href: `/${locale}#pilots`, label: t('pilots') },
    { href: `/${locale}#initiatives`, label: t('initiatives') },
    { href: `/${locale}#method`, label: t('method') },
    { href: `/${locale}#collaborators`, label: t('collaborators') },
  ];

  return (
    <nav className="topnav">
      <div className="row">
        {/* Left: Wordmark */}
        <Link href={`/${locale}`}>
          <span className="wm">
            human scale data<span className="dot">.</span>
          </span>
        </Link>

        {/* Center: Nav links (hidden on mobile) */}
        <div className="links" style={{ display: 'none' }} data-desktop>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: CTA, Lang, Mode */}
        <div className="right">
          <Link href={`/${locale}#cta`} className="btn sun" data-desktop>
            {t('getInvolved')}
          </Link>
          <LangToggle />
          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile nav strip */}
      <div className="mobile-nav-strip">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Link href={`/${locale}#cta`} style={{ color: 'var(--sun)' }}>
          {t('getInvolved')}
        </Link>
      </div>

      <style jsx>{`
        .row .links {
          display: none;
        }
        .row .btn[data-desktop] {
          display: none;
        }
        @media (min-width: 769px) {
          .row .links {
            display: flex !important;
          }
          .row .btn[data-desktop] {
            display: inline-flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
