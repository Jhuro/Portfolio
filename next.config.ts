import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'drive.google.com',
            pathname: '/**',
          },
        ],
    },
    reactStrictMode: true,
};

export default withNextIntl(nextConfig);