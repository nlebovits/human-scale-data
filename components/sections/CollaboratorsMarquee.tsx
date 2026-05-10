'use client';

import { useTranslations } from 'next-intl';

// Collaborators from the reference prototype
const collaborators = [
  'Radiant Earth',
  'RIL',
  'Source Cooperative',
  'Cloud-Native Geo',
  'CONICET',
  'Pergamino',
  'UNL',
  'Bezos Earth Fund',
  'McGovern Foundation',
  'Techo',
  'INDEC',
  'Microsoft Planetary',
];

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
          {doubledCollabs.map((name, i) => (
            <span key={i} style={{ display: 'contents' }}>
              <span className="logo">{name}</span>
              <span className="sep" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
