'use client';

import { useTranslations } from 'next-intl';

const SUBSTACK_URL = 'https://datosaescalahumana.substack.com/';

export function Cta() {
  const t = useTranslations('cta');

  return (
    <section className="cta" id="cta">
      <div className="cta-grid">
        {/* Left: headline */}
        <div>
          <h2>
            {t.rich('title', {
              em: (chunks) => <em className="hi">{chunks}</em>,
            })}
          </h2>
        </div>

        {/* Right: newsletter card */}
        <div className="news">
          <span className="meta">{t('newsLabel')}</span>
          <p>{t('newsBody')}</p>

          {/* Substack embed link */}
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn sun"
            style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
          >
            {t('subscribe')} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
