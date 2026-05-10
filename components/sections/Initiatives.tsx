'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const initiatives = [
  {
    slug: 'barrios-visibles',
    title: 'Barrios Visibles',
    body: 'Making informal settlements visible in official data through building footprint analysis and community mapping.',
    status: 'live' as const,
    url: 'https://www.barriosvisibles.org/es',
  },
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
          <InitiativeCard
            key={init.slug}
            slug={init.slug}
            title={init.title}
            body={init.body}
            status={init.status}
            url={'url' in init ? init.url : undefined}
            locale={locale}
          />
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
  url?: string;
  locale: string;
}

function InitiativeCard({
  slug,
  title,
  body,
  status,
  url,
  locale,
}: InitiativeCardProps) {
  const href = url || `/${locale}/initiatives#${slug}`;
  const isExternal = !!url;

  return (
    <Link
      href={href}
      className="init-card"
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
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
        <span>{isExternal ? 'Visit site →' : 'Learn more →'}</span>
      </div>
    </Link>
  );
}
