/**
 * Pilot Gallery System
 *
 * Stores multiple images per pilot for use in case study pages.
 * Each image includes licensing info for proper attribution.
 */

export type LicenseType =
  | 'public-domain'
  | 'cc-by-4.0'
  | 'cc-by-sa-4.0'
  | 'cc-by-nc-4.0'
  | 'cc0'
  | 'custom';

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  author: string;
  license: LicenseType;
  licenseUrl?: string;
  sourceUrl: string;
  date?: string;
}

export interface PilotGallery {
  /** Hero/card image (shown in pilot index) */
  hero: GalleryImage;
  /** Additional images for case study page */
  gallery: GalleryImage[];
}

/**
 * License display names and URLs
 */
export const licenseInfo: Record<LicenseType, { name: string; url: string }> = {
  'public-domain': {
    name: 'Public Domain',
    url: 'https://creativecommons.org/publicdomain/mark/1.0/',
  },
  'cc-by-4.0': {
    name: 'CC BY 4.0',
    url: 'https://creativecommons.org/licenses/by/4.0/',
  },
  'cc-by-sa-4.0': {
    name: 'CC BY-SA 4.0',
    url: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'cc-by-nc-4.0': {
    name: 'CC BY-NC 4.0',
    url: 'https://creativecommons.org/licenses/by-nc/4.0/',
  },
  cc0: {
    name: 'CC0 1.0',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  custom: {
    name: 'See source',
    url: '',
  },
};

/**
 * Format attribution string for an image
 */
export function formatAttribution(image: GalleryImage): string {
  const license = licenseInfo[image.license];
  if (image.license === 'public-domain') {
    return `${image.author} (Public Domain)`;
  }
  return `© ${image.author} / ${license.name}`;
}

/**
 * All pilot galleries
 */
export const pilotGalleries: Record<string, PilotGallery> = {
  pergamino: {
    hero: {
      src: '/pilots/pergamino-fieldwork-1.jpg',
      alt: 'Nissim Lebovits meeting with Pergamino municipal staff during field visit',
      caption: 'Field visit with municipal environmental team, November 2025',
      author: 'Municipalidad de Pergamino',
      license: 'custom',
      sourceUrl:
        'https://pergaminoaldia.ar/pergamino-recibio-a-investigador-internacional-para-medir-riesgo-de-calor-extremo-en-la-ciudad/',
      date: '2025-11-26',
    },
    gallery: [
      {
        src: '/pilots/pergamino-fieldwork-2.jpg',
        alt: 'Temperature survey fieldwork in Pergamino neighborhoods',
        caption: 'Conducting temperature surveys across different city sectors',
        author: 'Municipalidad de Pergamino',
        license: 'custom',
        sourceUrl:
          'https://pergaminoaldia.ar/pergamino-recibio-a-investigador-internacional-para-medir-riesgo-de-calor-extremo-en-la-ciudad/',
        date: '2025-11-26',
      },
      {
        src: '/pilots/pergamino-fieldwork-3.jpg',
        alt: 'Technical meeting with Pergamino GIS and environmental staff',
        caption: 'Technical meeting with Valeria Pereyra and Federico Gazaba',
        author: 'Municipalidad de Pergamino',
        license: 'custom',
        sourceUrl:
          'https://pergaminoaldia.ar/pergamino-recibio-a-investigador-internacional-para-medir-riesgo-de-calor-extremo-en-la-ciudad/',
        date: '2025-11-25',
      },
      {
        src: '/pilots/pergamino-webinar-presentation.jpg',
        alt: 'Federico Gazaba presenting heat island research at provincial webinar',
        caption: 'Presenting at "Decidir con datos" webinar series, December 2025',
        author: 'INDEC Buenos Aires',
        license: 'custom',
        sourceUrl:
          'https://pergaminoaldia.ar/el-municipio-participo-en-el-ciclo-de-webinarios-decidir-con-datos-gestion-local-basada-en-evidencia/',
        date: '2025-12-11',
      },
      {
        src: '/pilots/pergamino-webinar-screen.jpg',
        alt: 'Screen showing heat island analysis presentation',
        caption: 'Heat island analysis methodology shared with Buenos Aires municipalities',
        author: 'INDEC Buenos Aires',
        license: 'custom',
        sourceUrl:
          'https://pergaminoaldia.ar/el-municipio-participo-en-el-ciclo-de-webinarios-decidir-con-datos-gestion-local-basada-en-evidencia/',
        date: '2025-12-11',
      },
      {
        src: '/pilots/argentina-heat-2022.jpg',
        alt: 'Air temperature map of Argentina showing extreme heat event in January 2022',
        caption: 'GEOS-5 model showing air temperatures during the January 2022 heat wave',
        author: 'Lauren Dauphin / NASA Earth Observatory',
        license: 'public-domain',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Argentina_geos5_202211.jpg',
        date: '2022-01-11',
      },
      {
        src: '/pilots/parana-floodplain.jpg',
        alt: 'Paraná River floodplain in Northern Argentina, photographed from the ISS',
        caption: 'The Paraná River floodplain near Pergamino, seen from the ISS',
        author: 'NASA/ISS Expedition 27',
        license: 'public-domain',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Paran%C3%A1_River_Floodplain,_Northern_Argentina.jpg',
        date: '2011-04-09',
      },
    ],
  },

  'la-plata': {
    hero: {
      src: '/pilots/la-plata-flooding.jpg',
      alt: 'Satellite view of severe flooding in La Plata, Argentina from NASA ASTER',
      caption: 'ASTER satellite image showing flood extent during the April 2013 event',
      author: 'NASA/GSFC/METI/ERSDAC/JAROS, U.S./Japan ASTER Science Team',
      license: 'public-domain',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:NASA_Spacecraft_Eyes_Severe_Flooding_in_Argentina.jpg',
      date: '2013-04',
    },
    gallery: [
      {
        src: '/pilots/la-plata-flood-street.jpg',
        alt: 'Flooded street in La Plata during the 2013 floods',
        caption: 'Street-level flooding in La Plata, April 2013',
        author: 'Aledinamarca',
        license: 'cc-by-sa-4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Inundaci%C3%B3n_de_2013_en_La_Plata-16.jpg',
        date: '2013-04',
      },
    ],
  },

  'villa-del-rosario': {
    hero: {
      src: '/pilots/cordoba-sentinel.jpg',
      alt: 'Sentinel-2 satellite image of Córdoba province, Argentina showing fire scars',
      caption: 'Sentinel-2 imagery showing landscape around Villa del Rosario',
      author: 'Pierre Markuse / Copernicus Sentinel',
      license: 'cc-by-4.0',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Sentinel-2_L1C_from_2018-01-15_(27950696379).jpg',
      date: '2018-01-15',
    },
    gallery: [
      {
        src: '/pilots/cordoba-fire.jpg',
        alt: 'Wildfires burning in the Sierras de Córdoba mountains',
        caption: 'Wildfires in the Sierras de Córdoba near Villa del Rosario',
        author: 'Prensa Obrera',
        license: 'cc-by-4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Arden_las_Sierras_de_C%C3%B3rdoba.jpg',
      },
    ],
  },

  // Add more pilots as images become available:
  // rosario: { hero: {...}, gallery: [] },
  // medellin: { hero: {...}, gallery: [] },
};

/**
 * Get hero image for pilot card display
 */
export function getPilotHeroImage(slug: string): GalleryImage | undefined {
  return pilotGalleries[slug]?.hero;
}

/**
 * Get all images for a pilot (hero + gallery)
 */
export function getPilotAllImages(slug: string): GalleryImage[] {
  const gallery = pilotGalleries[slug];
  if (!gallery) return [];
  return [gallery.hero, ...gallery.gallery];
}
