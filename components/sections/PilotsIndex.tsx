'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

// Pilot data matching the prototype
const pilots = [
  {
    slug: 'pergamino',
    index: '01 / 06',
    location: 'pergamino, ar · 2025',
    status: 'live' as const,
    badge: 'adopted in CAP',
    title: 'Heat at the edge of the city.',
    subtitle: 'Block-resolution heat exposure & climate action plan',
    partner: 'with RIL · municipality',
  },
  {
    slug: 'la-plata',
    index: '02 / 06',
    location: 'la plata, ar · 2026',
    status: 'upcoming' as const,
    badge: 'in flight',
    title: 'When the river rises.',
    subtitle: 'Pluvial flooding & basement risk',
    partner: 'municipality · conicet',
  },
  {
    slug: 'rosario',
    index: '03 / 06',
    location: 'rosario, ar · 2026',
    status: 'upcoming' as const,
    badge: 'scoping',
    title: 'Urban canopy in a dry season.',
    subtitle: 'Tree cover & heat mitigation',
    partner: 'municipality · UNR',
  },
  {
    slug: 'medellin',
    index: '04 / 06',
    location: 'medellín, co · 2026',
    status: 'upcoming' as const,
    badge: 'scoping',
    title: 'Green corridors for the valley.',
    subtitle: 'Biodiversity connectivity',
    partner: 'municipality · EAFIT',
  },
  {
    slug: 'mexico-city',
    index: '05 / 06',
    location: 'cdmx, mx · 2027',
    status: 'upcoming' as const,
    badge: 'in conversation',
    title: 'Subsidence and aquifers.',
    subtitle: 'Ground movement & water risk',
    partner: 'tbd',
  },
  {
    slug: 'lima',
    index: '06 / 06',
    location: 'lima, pe · 2027',
    status: 'upcoming' as const,
    badge: 'in conversation',
    title: 'Fog-catching urbanism.',
    subtitle: 'Water harvesting potential',
    partner: 'tbd',
  },
];

export function PilotsIndex() {
  const t = useTranslations('pilots');
  const locale = useLocale();

  return (
    <section className="nsec" id="pilots">
      {/* Section header */}
      <div className="head">
        <span className="meta">{t('label')}</span>
        <div>
          <h2>{t('title')}</h2>
          <p>{t('body')}</p>
        </div>
      </div>

      {/* Horizontal scroll / vertical on mobile */}
      <div className="cs-scroll">
        {pilots.map((pilot) => (
          <PilotCard
            key={pilot.slug}
            {...pilot}
            locale={locale}
            openLabel={pilot.status === 'live' ? t('open') : t('soon')}
          />
        ))}
      </div>
    </section>
  );
}

interface PilotCardProps {
  slug: string;
  index: string;
  location: string;
  status: 'live' | 'upcoming';
  badge: string;
  title: string;
  subtitle: string;
  partner: string;
  locale: string;
  openLabel: string;
}

function PilotCard({
  slug,
  index,
  location,
  status,
  badge,
  title,
  subtitle,
  partner,
  locale,
  openLabel,
}: PilotCardProps) {
  const isUpcoming = status === 'upcoming';

  return (
    <Link
      href={isUpcoming ? '#' : `/${locale}/pilots/${slug}`}
      className={`cs-card ${isUpcoming ? 'upcoming' : ''}`}
    >
      {/* Thumbnail with B&W to color effect */}
      <div className="thumb">
        <div className="swatch-bw" />
        <div className="swatch-color" />
        {/* Corner labels */}
        <div className="corner">
          <span>{index}</span>
          <span>{location}</span>
        </div>
        {/* Status badge */}
        <span className={`badge ${status === 'live' ? 'live' : ''}`}>
          {badge}
        </span>
      </div>

      {/* Card body */}
      <div className="body">
        <h4>{title}</h4>
        <div className="sub">{subtitle}</div>

        {/* Footer row */}
        <div className="row">
          <span>{partner}</span>
          <span className="open">
            <span>{openLabel}</span>
            <span className="arrow">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
