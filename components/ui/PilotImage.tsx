import Image from 'next/image';
import {
  GalleryImage,
  formatAttribution,
  getPilotHeroImage,
} from '@/lib/pilot-gallery';

interface PilotImageProps {
  /** Pilot slug to look up image from gallery */
  slug?: string;
  /** Or provide image directly */
  image?: GalleryImage;
  className?: string;
}

/**
 * Displays a pilot card image with optional attribution overlay.
 * Falls back to gradient placeholder if no image provided.
 *
 * Usage:
 * ```tsx
 * // By slug (looks up from pilot-gallery.ts)
 * <PilotImage slug="la-plata" />
 *
 * // Or with direct image data
 * <PilotImage image={galleryImage} />
 * ```
 */
export function PilotImage({ slug, image, className = '' }: PilotImageProps) {
  // Look up image from gallery if slug provided
  const resolvedImage = image || (slug ? getPilotHeroImage(slug) : undefined);

  if (!resolvedImage) {
    // Gradient placeholder (matches original CSS)
    return (
      <div className={`pilot-image-placeholder ${className}`}>
        <div className="swatch-bw" />
        <div className="swatch-color" />
      </div>
    );
  }

  const attribution = formatAttribution(resolvedImage);

  return (
    <div className={`pilot-image ${className}`}>
      {/* B&W version */}
      <div className="swatch-bw">
        <Image
          src={resolvedImage.src}
          alt={resolvedImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          style={{ objectFit: 'cover', filter: 'grayscale(1) contrast(1.1)' }}
        />
      </div>
      {/* Color version (shown on hover) */}
      <div className="swatch-color">
        <Image
          src={resolvedImage.src}
          alt={resolvedImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {/* Attribution overlay - uses span to avoid nested <a> inside card link */}
      <span
        className="pilot-image-attribution"
        title={resolvedImage.sourceUrl}
      >
        {attribution}
      </span>
    </div>
  );
}

// Re-export for convenience
export { getPilotHeroImage, getPilotAllImages } from '@/lib/pilot-gallery';
export type { GalleryImage } from '@/lib/pilot-gallery';
