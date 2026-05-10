'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const initiatives = [
  {
    slug: 'geospatial-python',
    title: 'Geospatial Python',
    body: 'Open-source curriculum for cloud-native geospatial analysis in Spanish and English.',
    status: 'live' as const,
  },
  {
    slug: 'data-dialogues',
    title: 'Data Dialogues',
    body: 'Monthly conversations between local experts and global technologists.',
    status: 'live' as const,
  },
  {
    slug: 'community-sensors',
    title: 'Community Sensors',
    body: 'Low-cost environmental monitoring deployed and maintained by local partners.',
    status: 'upcoming' as const,
  },
];

export function Initiatives() {
  const t = useTranslations('initiatives');
  const locale = useLocale();

  return (
    <section className="nsec" id="initiatives">
      {/* Section header */}
      <div className="head">
        <span className="meta">{t('label')}</span>
        <div>
          <h2>{t('title')}</h2>
          <p>{t('body')}</p>
        </div>
      </div>

      {/* Horizontal scroll / vertical on mobile */}
      <div className="init-scroll">
        {initiatives.map((init) => (
          <InitiativeCard key={init.slug} {...init} locale={locale} />
        ))}
      </div>
    </section>
  );
}

interface InitiativeCardProps {
  slug: string;
  title: string;
  body: string;
  status: 'live' | 'upcoming';
  locale: string;
}

function InitiativeCard({
  slug,
  title,
  body,
  status,
  locale,
}: InitiativeCardProps) {
  return (
    <Link href={`/${locale}/initiatives#${slug}`} className="init-card">
      {/* Image placeholder */}
      <div className="pic">
        <div className="corner">
          <span>Initiative</span>
          <span>Ongoing</span>
        </div>
        <div className={`badge ${status === 'live' ? 'live' : ''}`}>
          {status === 'live' ? 'Active' : 'Coming soon'}
        </div>
      </div>

      {/* Card body */}
      <h4>{title}</h4>
      <p>{body}</p>
      <div className="crow">
        <span>Learn more →</span>
      </div>
    </Link>
  );
}
