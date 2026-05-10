/**
 * Pilot case study content
 *
 * Full content for each pilot's case study page.
 * Gallery images, press, and videos are in separate files.
 */

export interface PilotContent {
  slug: string;
  index: string;
  location: {
    city: string;
    region: string;
    country: string;
    year: number;
  };
  status: 'live' | 'upcoming';
  badge: string;
  title: string;
  subtitle: string;
  partner: string;
  partnerFull: string;
  duration: string;
  datasets: string[];

  // Long-form content (supports basic markdown)
  challenge: string;
  approach: string;
  impact: string;
  techNotes: string;

  // Citation
  citation: string;

  // Links
  repoUrl?: string;
  dataUrl?: string;
  reportUrl?: string;
}

export const pilots: PilotContent[] = [
  {
    slug: 'pergamino',
    index: '01 / 06',
    location: {
      city: 'Pergamino',
      region: 'Buenos Aires',
      country: 'Argentina',
      year: 2025,
    },
    status: 'live',
    badge: 'adopted in CAP',
    title: 'Heat at the edge of the city.',
    subtitle: 'Block-resolution heat exposure & climate action plan',
    partner: 'with RIL · municipality',
    partnerFull: 'Municipalidad de Pergamino, Red de Innovación Local (RIL)',
    duration: 'August 2025 – December 2025',
    datasets: [
      'Landsat 8/9 Surface Temperature',
      'Sentinel-2 NDVI',
      'OpenStreetMap buildings',
      'Municipal census blocks',
      'Field temperature surveys',
    ],

    challenge: `Pergamino sits in the heart of Argentina's agricultural belt, where summer temperatures regularly exceed 40°C. The city of 110,000 has grown rapidly, with new peripheral neighborhoods often lacking tree cover and green space. Municipal staff knew heat was a problem but lacked block-level data to prioritize interventions.

The 2022-2023 heat waves hit hard — emergency room visits spiked, and residents in newer neighborhoods reported indoor temperatures exceeding outdoor readings. The municipal environmental team, led by Valeria Pereyra and Federico Gazaba, wanted evidence to support their climate action plan but didn't have the technical capacity to process satellite data.`,

    approach: `We embedded with the municipal GIS and environmental teams for four months. The work had three phases:

**Remote sensing analysis**: Using Landsat thermal bands and Sentinel-2 vegetation indices, we mapped land surface temperature at 30m resolution across the urban footprint. We correlated temperature anomalies with land cover, building density, and vegetation presence.

**Field validation**: In November 2025, we conducted ground-truth temperature surveys across 12 neighborhoods, measuring air and surface temperatures at 50+ locations. This validated the satellite-derived patterns and identified microclimates not visible from space.

**Integration with planning**: We overlaid heat exposure with census vulnerability data (age, income, housing quality) to create a composite heat risk index. The results fed directly into the municipal Climate Action Plan, adopted in December 2025.`,

    impact: `The analysis identified three priority intervention zones where high heat exposure overlaps with vulnerable populations. The municipal council adopted the Climate Action Plan in December 2025, with specific budget allocations for:

- Urban tree planting in identified heat islands (2,000 trees by 2027)
- Cool roof pilot program for public buildings
- Heat early warning system integration with municipal emergency services

Federico Gazaba presented the methodology at the provincial "Decidir con datos" webinar series, sharing the approach with 40+ Buenos Aires municipalities. The code and methodology are open source, and two other Argentine cities have begun adapting the analysis.`,

    techNotes: `**Data pipeline**: Python + Google Earth Engine for satellite processing, GeoPandas for spatial analysis, Jupyter notebooks for reproducibility. All analysis runs on a standard laptop — no cloud compute required beyond Earth Engine.

**Key finding**: Land surface temperature differences of up to 8°C between neighborhoods within the same city. Peripheral neighborhoods built after 2010 showed consistently higher temperatures than older, tree-lined areas.

**Validation**: Field measurements correlated with satellite-derived LST at r² = 0.78, sufficient for planning-grade analysis.`,

    citation: `Lebovits, N., Gazaba, F., & Pereyra, V. (2025). Block-resolution heat exposure analysis for climate action planning: Pergamino, Argentina. Human Scale Data. https://human-scale-data.org/pilots/pergamino`,

    repoUrl: 'https://github.com/human-scale-data/pergamino-heat',
  },

  {
    slug: 'la-plata',
    index: '02 / 06',
    location: {
      city: 'La Plata',
      region: 'Buenos Aires',
      country: 'Argentina',
      year: 2026,
    },
    status: 'live',
    badge: 'in flight',
    title: 'When the river rises.',
    subtitle: 'Pluvial flooding & informal settlement exposure',
    partner: 'CIUT · UNLP · municipality',
    partnerFull: 'Centro de Investigaciones Urbanas y Territoriales (CIUT), Facultad de Ingeniería Hídrica (UNLP), Municipalidad de La Plata',
    duration: 'August 2024 – December 2026',
    datasets: [
      'FLO-2D hydrological model outputs',
      'Google-Microsoft-OSM Open Buildings',
      'RENABAP informal settlement boundaries',
      'Municipal cadastre',
      'LiDAR-derived DEM',
    ],

    challenge: `La Plata experienced catastrophic flooding in April 2013, killing over 89 people and displacing thousands. The city's grid layout, designed in the 1880s, didn't account for the streams that once crossed the site — many now channeled underground. When heavy rainfall overwhelms the drainage system, water follows the old stream paths through basements and ground floors.

A critical challenge is understanding exposure in informal settlements (barrios populares). Official RENABAP data significantly underestimates the number of structures — our analysis found approximately 41,575 buildings missing from official records, representing 137,000–229,000 uncounted people. Traditional areal interpolation methods overestimate proportional exposure by assuming uniform population distribution.`,

    approach: `This project combines flood hazard modeling with building-level exposure analysis:

**Flood visualization**: Using GRASS GIS, we applied Chaikin smoothing to flood hazard polygons from the Facultad de Ingeniería Hídrica. The process converted vector data to 2.5m raster, added edge noise for natural boundaries, and applied six iterations of smoothing. An interactive web map allows comparison of original and smoothed data against municipal cadastre.

**Building-level exposure**: Rather than areal interpolation, we count individual building footprints within flood hazard zones. This reveals that 17,014 buildings in barrios populares (23.5% of total) are exposed to flood hazard under the maximum probable precipitation scenario — 6,112 in high-hazard zones and 10,902 in medium-hazard zones.

**Watershed analysis**: Cuenca Arroyo del Gato has highest exposure with 7,943 buildings at risk, followed by Cuenca Maldonado (3,316) and Cuenca Martín-Carnaval (1,096).`,

    impact: `The analysis demonstrates that building footprint data improves both precision and comprehensiveness of risk mapping in informal settlements:

- Identified ~41,575 structures missing from official RENABAP records
- Villa Montoro leads exposure with 669 buildings in high-hazard zones (21.7% of neighborhood)
- Comparison of return periods shows PMP exposure can be 13x higher than 25-year return period — critical for relocation policy decisions
- Interactive flood map deployed for municipal planning use
- Methodology published as open-source Quarto book for replication`,

    techNotes: `**Data pipeline**: GRASS GIS for polygon smoothing (Chaikin algorithm), Python/GeoPandas for spatial analysis, PMTiles for web mapping.

**Key finding**: Traditional areal interpolation overestimates proportional exposure (26.3% vs 23.5%) while underestimating absolute numbers. Building-level analysis provides more reliable estimates for both.

**Validation**: Building footprint methodology cross-validated against high-resolution satellite imagery in sample neighborhoods.`,

    citation: `Lebovits, N., Etulaín, J.C., & Duarte, C. (2025). Building-level flood exposure analysis in informal settlements: La Plata, Argentina. CIUT-UNLP. https://nlebovits.github.io/ciut-riesgo/`,

    repoUrl: 'https://github.com/nlebovits/ciut-riesgo',
    dataUrl: 'https://github.com/nlebovits/ciut-inundaciones-mapeo/tree/main/public/data',
  },

  {
    slug: 'villa-del-rosario',
    index: '03 / 06',
    location: {
      city: 'Villa del Rosario',
      region: 'Córdoba',
      country: 'Argentina',
      year: 2026,
    },
    status: 'upcoming',
    badge: 'scoping',
    title: 'Fire risk in the Sierras.',
    subtitle: 'Wildfire mapping & early warning',
    partner: 'municipality · CONAE',
    partnerFull: 'Municipalidad de Villa del Rosario, CONAE',
    duration: '2026 (dates TBD)',
    datasets: [
      'VIIRS active fire',
      'Sentinel-2 burn severity',
      'Vegetation fuel load',
      'WUI mapping',
    ],

    challenge: `The Sierras de Córdoba face increasingly severe wildfire seasons. Villa del Rosario sits at the wildland-urban interface, with residential areas extending into fire-prone vegetation. The municipality lacks the technical capacity to produce fire risk maps or integrate satellite fire detection into emergency response.`,

    approach: `Scoping phase. Planned approach includes wildfire history mapping, fuel load assessment, and WUI delineation for evacuation planning.`,

    impact: `Project in early scoping.`,

    techNotes: `Will leverage CONAE's fire monitoring infrastructure and Sentinel-2 time series for burn severity mapping.`,

    citation: `Human Scale Data. (2026). Wildfire risk mapping: Villa del Rosario, Argentina. [Planned]. https://human-scale-data.org/pilots/villa-del-rosario`,
  },

  {
    slug: 'medellin',
    index: '04 / 06',
    location: {
      city: 'Medellín',
      region: 'Antioquia',
      country: 'Colombia',
      year: 2026,
    },
    status: 'upcoming',
    badge: 'scoping',
    title: 'Green corridors for the valley.',
    subtitle: 'Biodiversity connectivity',
    partner: 'municipality · EAFIT',
    partnerFull: 'Alcaldía de Medellín, Universidad EAFIT',
    duration: '2026 (dates TBD)',
    datasets: [
      'Sentinel-2 vegetation',
      'GEDI canopy height',
      'OpenStreetMap',
      'Municipal green space inventory',
    ],

    challenge: `Medellín's famous green corridors need expansion and connection. The municipality wants to identify priority areas for new corridors that would link existing parks and natural areas while providing heat relief and habitat connectivity.`,

    approach: `Scoping phase. Will combine vegetation mapping with network analysis to identify optimal corridor routes.`,

    impact: `Project in early scoping.`,

    techNotes: `Will use graph-based connectivity analysis on vegetation patches derived from Sentinel-2.`,

    citation: `Human Scale Data. (2026). Green corridor connectivity: Medellín, Colombia. [Planned]. https://human-scale-data.org/pilots/medellin`,
  },

  {
    slug: 'mexico-city',
    index: '05 / 06',
    location: {
      city: 'Mexico City',
      region: 'CDMX',
      country: 'Mexico',
      year: 2027,
    },
    status: 'upcoming',
    badge: 'in conversation',
    title: 'Subsidence and aquifers.',
    subtitle: 'Ground movement & water risk',
    partner: 'tbd',
    partnerFull: 'Partner TBD',
    duration: '2027 (dates TBD)',
    datasets: ['Sentinel-1 InSAR', 'Groundwater monitoring', 'Building footprints'],

    challenge: `Mexico City is sinking — in some areas, by 30+ centimeters per year. The subsidence is uneven, causing differential settlement that damages buildings and infrastructure. Residents in affected areas need better information about ground movement risk.`,

    approach: `Early conversations. Planned approach uses InSAR time series to map subsidence rates at building scale.`,

    impact: `Project in early conversation.`,

    techNotes: `Will require processing of Sentinel-1 InSAR time series — computationally intensive but feasible with cloud processing.`,

    citation: `Human Scale Data. (2027). Subsidence mapping: Mexico City, Mexico. [Planned]. https://human-scale-data.org/pilots/mexico-city`,
  },

  {
    slug: 'lima',
    index: '06 / 06',
    location: {
      city: 'Lima',
      region: 'Lima',
      country: 'Peru',
      year: 2027,
    },
    status: 'upcoming',
    badge: 'in conversation',
    title: 'Fog-catching urbanism.',
    subtitle: 'Water harvesting potential',
    partner: 'tbd',
    partnerFull: 'Partner TBD',
    duration: '2027 (dates TBD)',
    datasets: ['MODIS fog frequency', 'Topography', 'Settlement mapping'],

    challenge: `Lima receives almost no rainfall but is bathed in coastal fog for much of the year. Informal settlements on the hillsides have pioneered fog-catching nets, but there's no systematic mapping of fog harvesting potential across the metropolitan area.`,

    approach: `Early conversations. Would combine fog frequency mapping with topographic analysis to identify optimal fog-catching sites.`,

    impact: `Project in early conversation.`,

    techNotes: `Fog detection from MODIS cloud products; will need to develop methodology for relating fog frequency to harvesting potential.`,

    citation: `Human Scale Data. (2027). Fog harvesting potential: Lima, Peru. [Planned]. https://human-scale-data.org/pilots/lima`,
  },
];

/**
 * Get a pilot by slug
 */
export function getPilot(slug: string): PilotContent | undefined {
  return pilots.find((p) => p.slug === slug);
}

/**
 * Get the next pilot in sequence
 */
export function getNextPilot(currentSlug: string): PilotContent | undefined {
  const currentIndex = pilots.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === pilots.length - 1) {
    return pilots[0]; // Loop back to first
  }
  return pilots[currentIndex + 1];
}

/**
 * Get all pilot slugs for static generation
 */
export function getAllPilotSlugs(): string[] {
  return pilots.map((p) => p.slug);
}
