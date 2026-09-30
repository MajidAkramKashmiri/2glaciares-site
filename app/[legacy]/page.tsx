import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { legacyRoutes } from '@/lib/legacy-routes';
import { asset } from '@/lib/asset';
import { getService } from '@/lib/services';

interface Params {
    params: Promise<{ legacy: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(legacyRoutes).map((legacy) => ({ legacy }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { legacy } = await params;
    const slug = legacyRoutes[legacy];
    const target = `/services/${slug}/`;
    return {
        title: getService(slug)?.name ?? 'Redirecting',
        robots: { index: false },
        alternates: { canonical: target },
        other: { refresh: `0;url=${asset(target)}` },
    };
}

export default async function LegacyRedirectPage({ params }: Params) {
    const { legacy } = await params;
    const slug = legacyRoutes[legacy];
    if (!slug) {
        notFound();
    }
    const target = `/services/${slug}/`;
    return (
        <section className="flex min-h-[60vh] items-center bg-navy-950 pt-24 text-white">
            <div className="container-x text-center">
                <p className="text-white/70">This page has moved.</p>
                <Link href={target} className="mt-3 inline-block font-semibold text-ice-300 underline underline-offset-4">
                    Continue to {getService(slug)?.name}
                </Link>
            </div>
        </section>
    );
}
