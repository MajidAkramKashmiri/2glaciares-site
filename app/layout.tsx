import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SiteHeader } from '@/components/site/header';
import { SiteFooter } from '@/components/site/footer';
import { MobileCallBar } from '@/components/site/mobile-call-bar';
import { site } from '@/lib/site';

const display = localFont({
    src: './fonts/bricolage-grotesque-latin.woff2',
    variable: '--font-display',
    weight: '400 800',
    display: 'swap',
});

const body = localFont({
    src: './fonts/manrope-latin.woff2',
    variable: '--font-body',
    weight: '400 800',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: `${site.name} | ${site.tagline}`,
        template: `%s | ${site.shortName}`,
    },
    description: site.description,
    openGraph: {
        type: 'website',
        siteName: site.name,
        title: `${site.name} | ${site.tagline}`,
        description: site.description,
    },
    twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
    themeColor: '#061224',
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
};

const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    telephone: site.phone,
    url: site.url,
    areaServed: site.region,
    description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
            <body className="flex min-h-full flex-col pb-[4.6rem] lg:pb-0">
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-navy-950 focus:px-4 focus:py-2 focus:text-white"
                >
                    Skip to content
                </a>
                <SiteHeader />
                <main id="main" className="flex-1">
                    {children}
                </main>
                <SiteFooter />
                <MobileCallBar />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
            </body>
        </html>
    );
}
