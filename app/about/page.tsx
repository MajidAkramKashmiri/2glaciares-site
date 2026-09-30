import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Droplets, Eye, Handshake, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/site/page-hero';
import { Photo } from '@/components/site/photo';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { CtaBand } from '@/components/sections/cta-band';
import { Stats } from '@/components/sections/stats';
import { site } from '@/lib/site';

export const metadata: Metadata = {
    title: 'About',
    description: 'Meet 2Glaciares — professional exterior cleaning for homes, businesses and communities across South Florida.',
};

const values = [
    { icon: Droplets, title: 'Water, precision, pride', text: 'The right pressure and chemistry for every surface, applied with care.' },
    { icon: Eye, title: 'Visible results', text: 'If you can’t see the difference from the street, we’re not done.' },
    { icon: Handshake, title: 'Clear communication', text: 'From the first call to the final rinse, you always know what’s next.' },
    { icon: Target, title: 'One standard', text: 'Homes, HOAs or retail plazas — the finish is the same: clean.' },
];

export default function AboutPage() {
    return (
        <>
            <PageHero
                eyebrow="About 2Glaciares"
                title={
                    <>
                        A cleaner kind <span className="text-gradient-ice">of care.</span>
                    </>
                }
                description={`Built around water, precision and pride in the details, 2Glaciares brings professional exterior cleaning to homes, businesses and communities across ${site.region}.`}
            />
            <Stats />
            <section className="section-y">
                <div className="container-x grid items-center gap-12 lg:grid-cols-12">
                    <Reveal className="lg:col-span-6">
                        <div className="grid grid-cols-2 gap-4">
                            <Photo src="/images/about-team.jpg" alt="Exterior cleaning technician beside a service van" tone="ice" className="aspect-[3/4] rounded-[2rem]" sizes="(min-width: 1024px) 25vw, 50vw" />
                            <Photo src="/images/about-work.jpg" alt="Crew pressure washing a building exterior" tone="frost" className="mt-10 aspect-[3/4] rounded-[2rem]" sizes="(min-width: 1024px) 25vw, 50vw" />
                        </div>
                    </Reveal>
                    <div className="lg:col-span-6">
                        <SectionHeading
                            eyebrow="Our story"
                            title="The curb appeal reset your property has been waiting for."
                            description="Clean starts at the surface. From first call to final rinse, we make the process clear and convenient — and we treat every driveway, storefront and clubhouse like it belongs to us."
                        >
                            <p className="text-ink-soft">
                                We serve homeowners, property managers and associations across {site.region} with surface-safe methods: soft washing for roofs, stucco and paint, and hot-water surface cleaning for concrete and pavers.
                            </p>
                            <Button asChild variant="primary" size="lg" className="mt-2 self-start">
                                <Link href="/contact">
                                    Work with us <ArrowRight aria-hidden />
                                </Link>
                            </Button>
                        </SectionHeading>
                    </div>
                </div>
            </section>
            <section className="section-y bg-white">
                <div className="container-x">
                    <SectionHeading eyebrow="What we stand for" title="Exterior care with a higher standard." align="center" className="mx-auto" />
                    <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value) => (
                            <StaggerItem key={value.title} className="rounded-3xl border border-frost-200 bg-frost-50 p-7 transition-colors hover:bg-white hover:border-ice-300">
                                <span className="grid size-12 place-items-center rounded-2xl bg-navy-950 text-ice-300">
                                    <value.icon className="size-5" aria-hidden />
                                </span>
                                <h3 className="mt-7 text-xl font-bold">{value.title}</h3>
                                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{value.text}</p>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </section>
            <section className="section-y">
                <div className="container-x">
                    <SectionHeading eyebrow="Where we work" title={`Proudly serving ${site.region}.`} description="Fort Lauderdale to Boca Raton and everything in between." />
                    <Reveal className="mt-8 flex flex-wrap gap-2">
                        {site.serviceAreas.map((area) => (
                            <span key={area} className="rounded-full border border-frost-300 bg-white px-4 py-2 text-sm font-medium">
                                {area}
                            </span>
                        ))}
                    </Reveal>
                </div>
            </section>
            <CtaBand />
        </>
    );
}
