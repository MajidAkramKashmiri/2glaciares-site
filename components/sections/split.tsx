import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AmbientVideo } from '@/components/site/ambient-video';
import { Reveal } from '@/components/motion/reveal';

export function ResidentialCommercial() {
    return (
        <section className="section-y">
            <div className="container-x grid gap-6 lg:grid-cols-2">
                <Reveal className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-frost-200 sm:p-10">
                    <AmbientVideo
                        mp4="/video/residential-house.mp4"
                        webm="/video/residential-house.webm"
                        poster="/video/residential-house.jpg"
                        alt="Aerial view of a freshly cleaned two-storey home"
                        className="absolute inset-x-0 top-0 h-72 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
                    />
                    <div className="relative pt-56">
                        <p className="eyebrow text-navy-600">For the places you call home</p>
                        <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Give your home <span className="text-ice-600">a fresh, clean look.</span>
                        </h3>
                        <p className="mt-4 text-ink-soft">
                            Driveways, sidewalks, walls, windows, gutters, roofs and vehicles — we help make the outside of your home feel new again.
                        </p>
                        <ul className="mt-6 space-y-3 text-[0.95rem] text-ink">
                            {[
                                'Thoughtful service around your surfaces',
                                'Clear communication from quote to finish',
                                'Results that lift the whole property',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ice-100 text-navy-900">
                                        <Check className="size-3" aria-hidden />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button asChild variant="primary" size="lg" className="mt-8">
                            <Link href="/services/residential-pressure-washing">
                                Explore residential <ArrowRight aria-hidden />
                            </Link>
                        </Button>
                    </div>
                </Reveal>

                <Reveal delay={0.1} className="group relative overflow-hidden rounded-[2rem] bg-navy-950 p-8 text-white shadow-lift sm:p-10">
                    <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-ice-500/30 blur-3xl" />
                    <div className="pointer-events-none absolute inset-0 dot-grid opacity-10" />
                    <div className="relative flex h-full flex-col">
                        <p className="eyebrow text-ice-300">For the properties that welcome people</p>
                        <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Professional cleaning <span className="text-gradient-ice">for commercial properties.</span>
                        </h3>
                        <p className="mt-4 text-white/70">
                            Keep parking areas, garages, sidewalks, communities and exterior walls looking ready for business — on a schedule that works around yours.
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                            {['Retail & plazas', 'Offices', 'HOAs & condos', 'Parking structures'].map((item) => (
                                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-medium">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-8">
                            <Button asChild variant="accent" size="lg">
                                <Link href="/services/commercial-pressure-washing">
                                    Request commercial service <ArrowRight aria-hidden />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
