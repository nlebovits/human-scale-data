import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Fix workspace root detection for monorepo-like setups
  outputFileTracingRoot: __dirname,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.radiant.earth',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
