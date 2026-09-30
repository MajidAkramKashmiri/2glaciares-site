import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/site/page-hero';
import { Photo } from '@/components/site/photo';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { BeforeAfterSlider } from '@/components/sections/before-after';
import { Process } from '@/components/sections/process';
import { QuoteForm } from '@/components/sections/quote-form';
import { getService, relatedServices, services } from '@/lib/services';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

interface Params {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const service = getService(slug);
    if (!service) {
        return {};
    }
    return { title: service.name, description: service.summary };
}

export default async function ServicePage({ params }: Params) {
    const { slug } = await params;
    const service = getService(slug);
    if (!service) {
        notFound();
    }
    const related = relatedServices(service);

    return (
        <>
            <PageHero eyebrow={`Service · ${service.category === 'both' ? 'Residential & commercial' : service.category}`} title={service.name} description={service.description}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="accent" size="lg">
                        <a href={site.phoneHref}>
                            <Phone aria-hidden /> Call {site.phoneDisplay}
                        </a>
                    </Button>
                    <Button asChild variant="inverse" size="lg">
                        <a href="#quote">
                            Request this service <ArrowRight aria-hidden />
                        </a>
                    </Button>
                </div>
            </PageHero>

            <section className="section-y">
                <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-7">
                        <Reveal>
                            <p className="eyebrow text-navy-600">{service.tagline}</p>
                            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">What’s included</h2>
                        </Reveal>
                        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
                            {service.includes.map((item) => (
                                <StaggerItem key={item} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-frost-200">
                                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ice-100 text-navy-900">
                                        <Check className="size-3.5" aria-hidden />
                                    </span>
                                    <span className="font-medium text-ink">{item}</span>
                                </StaggerItem>
                            ))}
                        </Stagger>
                        <Reveal className="mt-12">
                            <h3 className="text-2xl font-bold">Ideal for</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {service.idealFor.map((item) => (
                                    <span key={item} className="rounded-full border border-frost-300 bg-white px-4 py-2 text-sm font-medium text-ink">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                        <Reveal className="mt-12">
                            <BeforeAfterSlider afterSrc={service.image} alt={`${service.name} before and after`} compact />
                        </Reveal>
                    </div>
                    <aside className="lg:col-span-5">
                        <Reveal delay={0.1} className="lg:sticky lg:top-32">
                            <div className={cn('relative overflow-hidden rounded-[2rem] bg-gradient-to-br p-1', service.accent)}>
                                <Photo src={service.image} alt={`${service.name} in progress`} tone="navy" className="aspect-[4/3] rounded-[1.8rem]" sizes="(min-width: 1024px) 40vw, 100vw" />
                            </div>
                            <div id="quote" className="mt-6 scroll-mt-32">
                                <QuoteForm defaultService={service.name} />
                            </div>
                        </Reveal>
                    </aside>
                </div>
            </section>

            <Process />

            <section className="section-y">
                <div className="container-x">
                    <Reveal className="flex items-end justify-between gap-6">
                        <h2 className="text-3xl font-bold sm:text-4xl">Related services</h2>
                        <Link href="/services" className="hidden items-center gap-1 text-sm font-semibold text-navy-900 sm:inline-flex">
                            All services <ArrowUpRight className="size-4" aria-hidden />
                        </Link>
                    </Reveal>
                    <Stagger className="mt-8 grid gap-4 sm:grid-cols-3">
                        {related.map((item) => (
                            <StaggerItem key={item.slug}>
                                <Link href={`/services/${item.slug}`} className="group flex h-full flex-col rounded-3xl border border-frost-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-ice-300 hover:shadow-lift">
                                    <span className={cn('grid size-11 place-items-center rounded-2xl bg-gradient-to-br text-navy-950', item.accent)}>
                                        <item.icon className="size-5" aria-hidden />
                                    </span>
                                    <h3 className="mt-6 text-xl font-bold">{item.name}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.summary}</p>
                                </Link>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </section>
        </>
    );
}
