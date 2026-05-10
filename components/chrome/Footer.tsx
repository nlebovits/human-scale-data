import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="site">
      {/* Signoff / wordmark */}
      <div className="signoff">
        <span className="wm">
          human scale data<span className="dot">.</span>
        </span>
      </div>

      {/* Work column */}
      <div>
        <h5>{t('work')}</h5>
        <ul>
          <li><Link href={`/${locale}#pilots`}>{t('pilots')}</Link></li>
          <li><Link href={`/${locale}#initiatives`}>{t('initiatives')}</Link></li>
        </ul>
      </div>

      {/* Method column */}
      <div>
        <h5>{t('method')}</h5>
        <ul>
          <li><Link href={`/${locale}#method`}>{t('howItWorks')}</Link></li>
          <li><Link href={`/${locale}#collaborators`}>{t('collaborators')}</Link></li>
        </ul>
      </div>

      {/* About column */}
      <div>
        <h5>{t('about')}</h5>
        <ul>
          <li><Link href="#">{t('mission')}</Link></li>
          <li><Link href="#">{t('team')}</Link></li>
          <li><Link href="#">{t('contact')}</Link></li>
        </ul>
      </div>

      {/* Languages column */}
      <div>
        <h5>{t('languages')}</h5>
        <ul>
          <li><Link href="/en">{t('english')}</Link></li>
          <li><Link href="/es">{t('spanish')}</Link></li>
        </ul>
      </div>
    </footer>
  );
}
