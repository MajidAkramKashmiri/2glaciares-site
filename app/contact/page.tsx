import type { Metadata } from 'next';
import { Clock, MapPin, Phone } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { QuoteForm } from '@/components/sections/quote-form';
import { Reveal } from '@/components/motion/reveal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
    title: 'Contact',
    description: `Request a free pressure washing quote from 2Glaciares. Call ${site.phoneDisplay} or send us a few details about your property.`,
};

export default function ContactPage() {
    return (
        <>
            <PageHero
                eyebrow="Let’s get your property looking clean"
                title={
                    <>
                        Your next cleaner surface <span className="text-gradient-ice">starts with a conversation.</span>
                    </>
                }
                description="Tell us what you have in mind and we’ll help you choose the right service."
            />
            <section className="section-y">
                <div className="container-x grid gap-10 lg:grid-cols-12">
                    <Reveal className="lg:col-span-5">
                        <div className="grid gap-4">
                            <a href={site.phoneHref} className="group flex items-center gap-4 rounded-3xl bg-navy-950 p-6 text-white shadow-lift transition-transform hover:-translate-y-0.5">
                                <span className="grid size-12 place-items-center rounded-2xl bg-ice-400 text-navy-950">
                                    <Phone className="size-5" aria-hidden />
                                </span>
                                <span>
                                    <span className="block text-xs uppercase tracking-[0.18em] text-ice-300">Call or text</span>
                                    <span className="block font-display text-2xl font-bold">{site.phoneDisplay}</span>
                                </span>
                            </a>
                            <div className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-frost-200">
                                <span className="grid size-12 place-items-center rounded-2xl bg-frost-100 text-navy-900">
                                    <Clock className="size-5" aria-hidden />
                                </span>
                                <span>
                                    <span className="block text-xs uppercase tracking-[0.18em] text-muted">Hours</span>
                                    <span className="block font-semibold">{site.hours}</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-frost-200">
                                <span className="grid size-12 place-items-center rounded-2xl bg-frost-100 text-navy-900">
                                    <MapPin className="size-5" aria-hidden />
                                </span>
                                <span>
                                    <span className="block text-xs uppercase tracking-[0.18em] text-muted">Service area</span>
                                    <span className="block font-semibold">{site.region}</span>
                                    <span className="block text-sm text-muted">{site.serviceAreas.slice(0, 5).join(' · ')} & more</span>
                                </span>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1} className="lg:col-span-7">
                        <QuoteForm />
                    </Reveal>
                </div>
            </section>
        </>
    );
}
