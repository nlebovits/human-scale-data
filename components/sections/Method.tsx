import { useTranslations } from 'next-intl';

export function Method() {
  const t = useTranslations('method');

  const steps = [
    { title: t('s1Title'), body: t('s1Body') },
    { title: t('s2Title'), body: t('s2Body') },
    { title: t('s3Title'), body: t('s3Body') },
    { title: t('s4Title'), body: t('s4Body') },
  ];

  return (
    <section className="nsec" id="method">
      {/* Section header */}
      <div className="head">
        <span className="meta">{t('label')}</span>
        <div>
          <h2>{t('title')}</h2>
          <p>{t('body')}</p>
        </div>
      </div>

      {/* Four steps */}
      <div className="method-steps">
        {steps.map((step, i) => (
          <div key={i} className="method-step">
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <h4>{step.title}</h4>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
