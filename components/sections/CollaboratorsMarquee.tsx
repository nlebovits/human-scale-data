'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { collaborators } from '@/lib/collaborators';

export function CollaboratorsMarquee() {
  const t = useTranslations('collaborators');

  // Duplicate for seamless loop
  const doubledCollabs = [...collaborators, ...collaborators];

  return (
    <section className="collab" id="collaborators">
      {/* Section header */}
      <div className="head">
        <span className="meta">{t('label')}</span>
        <div>
          <h2>{t('title')}</h2>
          <p>{t('body')}</p>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          {doubledCollabs.map((collab, i) => (
            <span key={i} style={{ display: 'contents' }}>
              {collab.url ? (
                <a
                  href={collab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo"
                  title={collab.name}
                >
                  {collab.logo ? (
                    <Image
                      src={collab.logo}
                      alt={collab.name}
                      width={120}
                      height={48}
                      style={{ objectFit: 'contain', height: '48px', width: 'auto' }}
                    />
                  ) : (
                    <span className="logo-text">{collab.name}</span>
                  )}
                </a>
              ) : (
                <span className="logo">
                  {collab.logo ? (
                    <Image
                      src={collab.logo}
                      alt={collab.name}
                      width={120}
                      height={48}
                      style={{ objectFit: 'contain', height: '48px', width: 'auto' }}
                    />
                  ) : (
                    <span className="logo-text">{collab.name}</span>
                  )}
                </span>
              )}
              <span className="sep" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
