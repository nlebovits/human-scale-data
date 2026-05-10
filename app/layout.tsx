import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Human Scale Data',
  description:
    'Cloud-native geospatial makes global climate data work for local decisions.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
