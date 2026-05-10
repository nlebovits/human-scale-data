/**
 * Collaborator logos and data
 */

export interface Collaborator {
  name: string;
  logo?: string; // Path to logo in /public/collaborators/
  url?: string;
}

export const collaborators: Collaborator[] = [
  {
    name: 'Radiant Earth',
    logo: '/collaborators/radiant-earth.png',
    url: 'https://radiant.earth',
  },
  {
    name: 'Red de Innovación Local',
    logo: '/collaborators/ril.png',
    url: 'https://www.redinnovacionlocal.org',
  },
  {
    name: 'Source Cooperative',
    logo: '/collaborators/source-coop.svg',
    url: 'https://source.coop',
  },
  {
    name: 'Cloud-Native Geo',
    logo: '/collaborators/cng-icon.svg',
    url: 'https://cloudnativegeo.org',
  },
  {
    name: 'CIUT · UNLP',
    logo: '/collaborators/ciut-unlp.png',
    url: 'https://ciut.fau.unlp.edu.ar',
  },
  {
    name: 'Municipalidad de Pergamino',
    logo: '/collaborators/pergamino.svg',
    url: 'https://pergamino.ar',
  },
  {
    name: 'Municipalidad de Esperanza',
    logo: '/collaborators/esperanza.png',
    url: 'https://esperanza.gob.ar',
  },
];
