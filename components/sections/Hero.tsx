'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export function Hero() {
  const t = useTranslations('hero');
  const tStats = useTranslations('stats');
  const locale = useLocale();

  return (
    <section className="hero">
      {/* Hero bleed area with background */}
      <div className="hero-bleed">
        {/* Background image */}
        <div className="hero-photo">
          <Image
            src="/hero-belgrano.jpg"
            alt="Sunset over Belgrano neighborhood in Buenos Aires"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Side tag (rotated) */}
        <div className="hero-sidetag">
          {t('initiative')} <span className="tick" />{' '}
          <b>{t('org')}</b>
        </div>

        {/* Content overlay */}
        <div className="hero-overlay">
          {/* Top corners */}
          <div className="hero-corners">
            <span />
            <span>{t('credit')}</span>
          </div>

          {/* Hero text */}
          <div className="hero-text">
            <h1>
              {t.rich('title', {
                em: (chunks) => <em>{chunks}</em>,
              })}
            </h1>
            <p className="body">
              {t('body')}
            </p>
            <div className="ctas">
              <Link href={`/${locale}#pilots`} className="btn ink">
                {t('ctaRead')} <span className="arrow">→</span>
              </Link>
              <Link href={`/${locale}#method`} className="btn ghost-light">
                {t('ctaMethod')} <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Footer row with caption */}
          <div className="hero-foot">
            <span />
            <span />
            <span className="meta" style={{ color: 'rgba(255,255,255,0.6)', justifySelf: 'end' }}>
              {t('caption')}
            </span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-bottom">
        <StatItem label={tStats('latest')} value={tStats('latestValue')} />
        <StatItem label={tStats('inFlight')} value={tStats('inFlightValue')} />
        <StatItem label={tStats('writing')} value={tStats('writingValue')} />
        <StatItem label={tStats('code')} value={tStats('codeValue')} />
        <StatItem label={tStats('contact')} value={tStats('contactValue')} />
      </div>

    </section>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="meta">{label}</span>
      <div className="vv">{value}</div>
    </div>
  );
}
