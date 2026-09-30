import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { Photo } from '@/components/site/photo';
import { CtaBand } from '@/components/sections/cta-band';
import { Stagger, StaggerItem } from '@/components/motion/reveal';
import { services } from '@/lib/services';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Residential, commercial and community pressure washing across South Florida — roofs, sidewalks, gutters, windows, walls, parking and more.',
};

export default function ServicesPage() {
    return (
        <>
            <PageHero
                eyebrow="Services"
                title={
                    <>
                        Every surface. <span className="text-gradient-ice">One trusted team.</span>
                    </>
                }
                description="From a single sidewalk to a full commercial property, our service list is built to meet the moment."
            />
            <section className="section-y">
                <div className="container-x">
                    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <StaggerItem key={service.slug}>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-frost-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ice-300 hover:shadow-lift"
                                >
                                    <Photo
                                        src={service.image}
                                        alt={service.name}
                                        tone="frost"
                                        className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-[1.03]"
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    />
                                    <div className="relative flex flex-1 flex-col p-7">
                                        <div className="-mt-13 flex items-start justify-between">
                                            <span className={cn('grid size-12 place-items-center rounded-2xl bg-gradient-to-br text-navy-950 shadow-soft', service.accent)}>
                                                <service.icon className="size-5" aria-hidden />
                                            </span>
                                            <span className="rounded-full border border-frost-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink shadow-soft">
                                                {service.category === 'both' ? 'Res · Com' : service.category}
                                            </span>
                                        </div>
                                        <h2 className="mt-6 text-2xl font-bold">{service.name}</h2>
                                        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{service.summary}</p>
                                        <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-900">
                                            Learn more <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                                        </span>
                                    </div>
                                </Link>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </section>
            <CtaBand />
        </>
    );
}
