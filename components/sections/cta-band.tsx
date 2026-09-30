import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';
import { site } from '@/lib/site';

export function CtaBand({ title = 'Let’s make your property feel new again.', eyebrow = 'Ready to bring back the clean?' }) {
    return (
        <section className="pb-20 lg:pb-32">
            <div className="container-x">
                <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-navy-900 px-6 py-14 text-center text-white shadow-lift sm:px-12 lg:py-20">
                    <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-ice-400/30 blur-3xl" />
                    <div className="pointer-events-none absolute -right-20 -bottom-24 size-80 rounded-full bg-ice-500/25 blur-3xl" />
                    <div className="pointer-events-none absolute inset-0 dot-grid opacity-10" />
                    <div className="relative mx-auto max-w-3xl">
                        <p className="eyebrow justify-center text-ice-300">{eyebrow}</p>
                        <h2 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h2>
                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                            <Button asChild variant="accent" size="lg">
                                <a href={site.phoneHref}>
                                    <Phone aria-hidden /> Call {site.phoneDisplay}
                                </a>
                            </Button>
                            <Button asChild variant="inverse" size="lg">
                                <Link href="/contact">
                                    Get a free quote <ArrowRight aria-hidden />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
