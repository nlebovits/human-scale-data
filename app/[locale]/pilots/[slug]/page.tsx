import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { getPilot, getNextPilot, getAllPilotSlugs } from '@/lib/pilots';
import { getPilotAllImages, formatAttribution, licenseInfo } from '@/lib/pilot-gallery';
import { getPilotPress, getPilotVideos, getYouTubeEmbedUrl } from '@/lib/pilot-press';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPilotSlugs();
  const locales = ['en', 'es'];

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export default async function PilotPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const pilot = getPilot(slug);

  if (!pilot) {
    notFound();
  }

  const t = await getTranslations('pilot');
  const images = getPilotAllImages(slug);
  const press = getPilotPress(slug);
  const videos = getPilotVideos(slug);
  const nextPilot = getNextPilot(slug);

  return (
    <article className="pilot-page">
      {/* Back link */}
      <div className="pilot-back">
        <Link href={`/${locale}#pilots`}>
          <span className="arrow">←</span> {t('backTo')}
        </Link>
      </div>

      {/* Hero section */}
      <header className="pilot-hero">
        <div className="pilot-hero-content">
          <span className="meta">{pilot.index}</span>
          <h1>{pilot.title}</h1>
          <p className="subtitle">{pilot.subtitle}</p>
          <span className={`badge ${pilot.status === 'live' ? 'live' : ''}`}>
            {pilot.badge}
          </span>
        </div>

        {/* Hero image */}
        {images[0] && (
          <div className="pilot-hero-image">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
            <span className="pilot-image-credit">
              {formatAttribution(images[0])}
            </span>
          </div>
        )}
      </header>

      {/* Metadata grid */}
      <div className="pilot-meta-grid">
        <div>
          <span className="meta">{t('location')}</span>
          <p>{pilot.location.city}, {pilot.location.region}, {pilot.location.country}</p>
        </div>
        <div>
          <span className="meta">{t('partner')}</span>
          <p>{pilot.partnerFull}</p>
        </div>
        <div>
          <span className="meta">{t('duration')}</span>
          <p>{pilot.duration}</p>
        </div>
        <div>
          <span className="meta">{t('status')}</span>
          <p style={{ textTransform: 'capitalize' }}>{pilot.status}</p>
        </div>
      </div>

      {/* Datasets */}
      <div className="pilot-datasets">
        <span className="meta">{t('datasets')}</span>
        <ul>
          {pilot.datasets.map((dataset) => (
            <li key={dataset}>{dataset}</li>
          ))}
        </ul>
      </div>

      {/* Main content sections */}
      <div className="pilot-content">
        <section>
          <h2>{t('challenge')}</h2>
          <div className="prose">
            {pilot.challenge.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        <section>
          <h2>{t('approach')}</h2>
          <div className="prose">
            {renderMarkdown(pilot.approach)}
          </div>
        </section>

        <section>
          <h2>{t('impact')}</h2>
          <div className="prose">
            {renderMarkdown(pilot.impact)}
          </div>
        </section>

        {/* Video embed */}
        {videos.length > 0 && (
          <section className="pilot-video">
            <h2>Video</h2>
            {videos.map((video) => (
              <div key={video.videoId} className="video-embed">
                <iframe
                  src={getYouTubeEmbedUrl(video.videoId, video.timestamp)}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p className="video-caption">{video.title}</p>
                {video.description && (
                  <p className="video-description">{video.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Gallery */}
        {images.length > 1 && (
          <section className="pilot-gallery">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {images.slice(1).map((image, i) => (
                <figure key={i} className="gallery-item">
                  <div className="gallery-image">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <figcaption>
                    {image.caption && <p>{image.caption}</p>}
                    <span className="meta">
                      <a
                        href={image.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {formatAttribution(image)}
                      </a>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Press coverage */}
        {press.length > 0 && (
          <section className="pilot-press">
            <h2>Press</h2>
            <ul>
              {press.map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <strong>{item.title}</strong>
                  </a>
                  <span className="meta">
                    {item.outlet} · {formatDate(item.date, item.language)}
                  </span>
                  {item.excerpt && <p>{item.excerpt}</p>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Technical notes */}
        <section>
          <h2>{t('tech')}</h2>
          <div className="prose tech-notes">
            {renderMarkdown(pilot.techNotes)}
          </div>
        </section>

        {/* Citation */}
        <section className="pilot-citation">
          <h2>{t('cite')}</h2>
          <blockquote>
            <code>{pilot.citation}</code>
          </blockquote>
          {pilot.repoUrl && (
            <p>
              <a href={pilot.repoUrl} target="_blank" rel="noopener noreferrer">
                View code on GitHub →
              </a>
            </p>
          )}
        </section>
      </div>

      {/* Next pilot */}
      {nextPilot && (
        <nav className="pilot-next">
          <span className="meta">{t('nextPilot')}</span>
          <Link href={`/${locale}/pilots/${nextPilot.slug}`}>
            <span className="next-title">{nextPilot.title}</span>
            <span className="arrow">→</span>
          </Link>
        </nav>
      )}
    </article>
  );
}

/**
 * Simple markdown renderer for bold text and lists
 */
function renderMarkdown(text: string): React.ReactNode[] {
  const paragraphs = text.split('\n\n');

  return paragraphs.map((para, i) => {
    // Check for list items
    if (para.startsWith('- ')) {
      const items = para.split('\n').filter((line) => line.startsWith('- '));
      return (
        <ul key={i}>
          {items.map((item, j) => (
            <li key={j}>{renderBold(item.slice(2))}</li>
          ))}
        </ul>
      );
    }

    return <p key={i}>{renderBold(para)}</p>;
  });
}

/**
 * Render **bold** text
 */
function renderBold(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

/**
 * Format date based on language
 */
function formatDate(dateStr: string, lang: 'en' | 'es'): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === 'es' ? 'es-AR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
