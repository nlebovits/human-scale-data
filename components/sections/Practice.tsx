import { useTranslations } from 'next-intl';

export function Practice() {
  const t = useTranslations('practice');

  const pillars = [
    { num: '01', meta: t('p1Meta'), title: t('p1Title'), body: t('p1Body') },
    { num: '02', meta: t('p2Meta'), title: t('p2Title'), body: t('p2Body') },
    { num: '03', meta: t('p3Meta'), title: t('p3Title'), body: t('p3Body') },
  ];

  return (
    <section className="nsec" id="practice">
      {/* Section header */}
      <div className="head">
        <span className="meta">{t('label')}</span>
        <div>
          <h2>{t('title')}</h2>
          <p>{t('body')}</p>
        </div>
      </div>

      {/* Three pillars */}
      <div className="pitch3">
        {pillars.map((pillar) => (
          <div key={pillar.num}>
            <div className="pno">{pillar.num}</div>
            <span className="meta">{pillar.meta}</span>
            <h4>{pillar.title}</h4>
            <p>{pillar.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
