import Image from 'next/image';

export interface PilotImageData {
  src: string;
  alt: string;
  attribution?: string;
  attributionUrl?: string;
}

interface PilotImageProps {
  image?: PilotImageData;
  className?: string;
}

/**
 * Displays a pilot card image with optional attribution overlay.
 * Falls back to gradient placeholder if no image provided.
 *
 * Usage:
 * ```tsx
 * <PilotImage
 *   image={{
 *     src: '/pilots/la-plata-flooding.jpg',
 *     alt: 'Satellite view of flooding in La Plata, Argentina',
 *     attribution: 'NASA/ASTER',
 *     attributionUrl: 'https://commons.wikimedia.org/wiki/File:...'
 *   }}
 * />
 * ```
 */
export function PilotImage({ image, className = '' }: PilotImageProps) {
  if (!image) {
    // Gradient placeholder (matches original CSS)
    return (
      <div className={`pilot-image-placeholder ${className}`}>
        <div className="swatch-bw" />
        <div className="swatch-color" />
      </div>
    );
  }

  return (
    <div className={`pilot-image ${className}`}>
      {/* B&W version */}
      <div className="swatch-bw">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          style={{ objectFit: 'cover', filter: 'grayscale(1) contrast(1.1)' }}
        />
      </div>
      {/* Color version (shown on hover) */}
      <div className="swatch-color">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {/* Attribution overlay - uses span to avoid nested <a> inside card link */}
      {image.attribution && (
        <span
          className="pilot-image-attribution"
          title={image.attributionUrl || undefined}
        >
          {image.attribution}
        </span>
      )}
    </div>
  );
}

/**
 * Registry of pilot images.
 * Add new images here as they become available.
 */
export const pilotImages: Record<string, PilotImageData> = {
  'pergamino': {
    src: '/pilots/parana-floodplain.jpg',
    alt: 'Paraná River floodplain in Northern Argentina, photographed from the ISS',
    attribution: 'NASA/ISS Expedition 27',
    attributionUrl: 'https://commons.wikimedia.org/wiki/File:Paran%C3%A1_River_Floodplain,_Northern_Argentina.jpg',
  },
  'la-plata': {
    src: '/pilots/la-plata-flooding.jpg',
    alt: 'Satellite view of severe flooding in La Plata, Argentina from NASA ASTER',
    attribution: 'NASA/ASTER',
    attributionUrl: 'https://commons.wikimedia.org/wiki/File:NASA_Spacecraft_Eyes_Severe_Flooding_in_Argentina.jpg',
  },
  // Add more pilot images as they become available:
  // 'rosario': { ... },
  // 'medellin': { ... },
};
