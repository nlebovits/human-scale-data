'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  GalleryImage,
  formatAttribution,
  licenseInfo,
} from '@/lib/pilot-gallery';

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

/**
 * Image gallery for case study pages.
 * Displays images in a grid with lightbox functionality.
 */
export function Gallery({ images, className = '' }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className={`gallery-grid ${className}`}>
        {images.map((image, index) => (
          <button
            key={image.src}
            className="gallery-item"
            onClick={() => setSelectedIndex(index)}
            type="button"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <span className="gallery-item-caption">
              {image.caption || image.alt}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={setSelectedIndex}
        />
      )}
    </>
  );
}

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const image = images[currentIndex];
  const license = licenseInfo[image.license];

  const handlePrev = () => {
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      tabIndex={0}
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          ×
        </button>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={handlePrev}
              aria-label="Previous image"
              type="button"
            >
              ←
            </button>
            <button
              className="lightbox-nav lightbox-next"
              onClick={handleNext}
              aria-label="Next image"
              type="button"
            >
              →
            </button>
          </>
        )}

        {/* Image */}
        <div className="lightbox-image-wrap">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Caption and attribution */}
        <div className="lightbox-info">
          {image.caption && <p className="lightbox-caption">{image.caption}</p>}
          <p className="lightbox-attribution">
            {formatAttribution(image)}
            {' · '}
            <a
              href={image.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
            {license.url && (
              <>
                {' · '}
                <a
                  href={license.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {license.name}
                </a>
              </>
            )}
          </p>
          {images.length > 1 && (
            <p className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
