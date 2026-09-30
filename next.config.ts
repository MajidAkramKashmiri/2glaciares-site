import path from 'node:path';
import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    basePath: basePath || undefined,
    assetPrefix: basePath || undefined,
    turbopack: {
        root: path.join(__dirname),
    },
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
