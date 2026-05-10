/**
 * Press coverage and media for pilot case studies
 */

export interface PressItem {
  title: string;
  outlet: string;
  url: string;
  date: string;
  language: 'en' | 'es';
  excerpt?: string;
}

export interface VideoItem {
  title: string;
  platform: 'youtube' | 'vimeo';
  videoId: string;
  timestamp?: number; // Start time in seconds
  date: string;
  description?: string;
}

export const pilotPress: Record<string, PressItem[]> = {
  pergamino: [
    {
      title: 'El Municipio participó en el ciclo de webinarios "Decidir con datos"',
      outlet: 'Pergamino al Día',
      url: 'https://pergaminoaldia.ar/el-municipio-participo-en-el-ciclo-de-webinarios-decidir-con-datos-gestion-local-basada-en-evidencia/',
      date: '2025-12-17',
      language: 'es',
      excerpt:
        'Federico Gazaba presentó la investigación sobre análisis de islas de calor en Pergamino desarrollada junto al investigador Nissim Lebovits.',
    },
    {
      title: 'Pergamino recibió a investigador internacional para medir riesgo de calor extremo',
      outlet: 'Pergamino al Día',
      url: 'https://pergaminoaldia.ar/pergamino-recibio-a-investigador-internacional-para-medir-riesgo-de-calor-extremo-en-la-ciudad/',
      date: '2025-11-27',
      language: 'es',
      excerpt:
        'Nissim Lebovits, becario Fulbright y especialista en resiliencia urbana, realizó relevamientos de temperatura en distintos sectores de la ciudad.',
    },
    {
      title: 'Compromiso de Pergamino con el cambio climático y las olas de calor',
      outlet: 'La Opinión',
      url: 'https://www.laopinionline.ar/Compromiso-de-Pergamino-con-el-cambio-climatico-y-las-olas-de-calor',
      date: '2025-11-27',
      language: 'es',
      excerpt:
        'El proyecto generará mapas, datos, análisis y recomendaciones técnicas para identificar sectores urbanos vulnerables.',
    },
  ],

  // Add press for other pilots as coverage comes in:
  // 'la-plata': [],
  // 'villa-del-rosario': [],
};

export const pilotVideos: Record<string, VideoItem[]> = {
  pergamino: [
    {
      title: 'Decidir con datos: Infraestructura de Datos Espaciales',
      platform: 'youtube',
      videoId: 'vs6X1FRMa2k',
      timestamp: 3068, // 51:08
      date: '2025-12-11',
      description:
        'Federico Gazaba presents the Pergamino heat island analysis at the provincial webinar series.',
    },
  ],
};

/**
 * Get press coverage for a pilot
 */
export function getPilotPress(slug: string): PressItem[] {
  return pilotPress[slug] || [];
}

/**
 * Get videos for a pilot
 */
export function getPilotVideos(slug: string): VideoItem[] {
  return pilotVideos[slug] || [];
}

/**
 * Generate YouTube embed URL with optional timestamp
 */
export function getYouTubeEmbedUrl(videoId: string, timestamp?: number): string {
  const base = `https://www.youtube.com/embed/${videoId}`;
  return timestamp ? `${base}?start=${timestamp}` : base;
}
