'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BadgeCheck, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroVideo, type HeroClip } from '@/components/sections/hero-video';
import { site } from '@/lib/site';

const ease = [0.22, 1, 0.36, 1] as const;

const clips: HeroClip[] = [
    {
        mp4: '/video/hero-driveway.mp4',
        webm: '/video/hero-driveway.webm',
        poster: '/video/hero-driveway.jpg',
        caption: 'Driveway surface cleaning',
    },
    {
        mp4: '/video/hero-siding.mp4',
        webm: '/video/hero-siding.webm',
        poster: '/video/hero-siding.jpg',
        caption: 'House siding soft wash',
    },
];

function Words({ words, className, start = 0 }: { words: string[]; className?: string; start?: number }) {
    const reduce = useReducedMotion();
    return (
        <span className={className}>
            {words.map((word, index) => (
                <span key={word} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
                    <motion.span
                        className="inline-block"
                        initial={reduce ? false : { y: '110%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9, delay: start + index * 0.1, ease }}
                    >
                        {word}
                    </motion.span>
                    {index < words.length - 1 ? <span>&nbsp;</span> : null}
                </span>
            ))}
        </span>
    );
}

const trust = [
    { icon: ShieldCheck, label: 'Residential & commercial' },
    { icon: BadgeCheck, label: 'Free estimates' },
    { icon: MapPin, label: `Serving ${site.region}` },
];

export function Hero() {
    const reduce = useReducedMotion();
    const fade = (delay: number) => ({
        initial: reduce ? false : { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay, ease },
    });

    return (
        <section className="relative">
            <div className="container-x grid items-center gap-12 pt-28 pb-14 sm:pt-36 lg:grid-cols-12 lg:gap-12 lg:pt-40 lg:pb-16">
                <div className="lg:col-span-5">
                    <motion.p
                        {...fade(0)}
                        className="inline-flex items-center gap-2 rounded-full border border-ice-300/40 bg-ice-400/15 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ice-200"
                    >
                        <Sparkles className="size-3.5 text-ice-300" aria-hidden /> {site.region} pressure washing
                    </motion.p>
                    <h1 className="mt-7 text-[3rem] leading-[0.96] tracking-[-0.02em] sm:text-6xl lg:text-[4.6rem] xl:text-[5.4rem]">
                        <Words words={['Powerful', 'cleaning.']} className="block font-extrabold text-white" start={0.05} />
                        <Words
                            words={['Fresher', 'surfaces.']}
                            start={0.3}
                            className="block font-bold bg-[linear-gradient(95deg,#8fd8ff_0%,#5cc4fb_50%,#bde8ff_100%)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]"
                        />
                    </h1>
                    <motion.p {...fade(0.55)} className="mt-6 max-w-lg text-lg leading-relaxed text-white/75 sm:text-xl">
                        Professional pressure washing for homes, businesses and communities across {site.region}.{' '}
                        <span className="font-semibold text-white">Results you can see from the street.</span>
                    </motion.p>
                    <motion.div {...fade(0.7)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <span className="relative inline-flex w-full sm:w-auto">
                            {!reduce ? (
                                <span className="pointer-events-none absolute inset-0 rounded-full bg-ice-400/50 animate-[pulse-ring_2.4s_ease-out_infinite]" aria-hidden />
                            ) : null}
                            <Button asChild variant="accent" size="lg" className="relative w-full sm:w-auto">
                                <Link href="/contact">
                                    Get a free quote <ArrowRight aria-hidden className="transition-transform group-hover/btn:translate-x-0.5" />
                                </Link>
                            </Button>
                        </span>
                        <Button asChild variant="inverse" size="lg" className="w-full sm:w-auto">
                            <a href={site.phoneHref}>
                                <Phone aria-hidden /> Call {site.phoneDisplay}
                            </a>
                        </Button>
                    </motion.div>
                    <motion.ul {...fade(0.85)} className="mt-9 flex flex-wrap gap-2.5 text-sm">
                        {trust.map(({ icon: Icon, label }) => (
                            <li
                                key={label}
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 font-medium text-white/90 backdrop-blur"
                            >
                                <Icon className="size-4 text-ice-300" aria-hidden /> {label}
                            </li>
                        ))}
                    </motion.ul>
                </div>

                <motion.div
                    initial={reduce ? false : { opacity: 0, scale: 0.96, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.1, delay: 0.3, ease }}
                    className="relative lg:col-span-7"
                >
                    <div className="absolute -inset-4 -z-10 rounded-[2.75rem] bg-gradient-to-br from-ice-400/50 via-ice-500/20 to-transparent blur-xl" />
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-navy-900 shadow-lift ring-1 ring-white/20 sm:aspect-[16/10]">
                        <HeroVideo clips={clips} />
                        <div className="pointer-events-none absolute top-5 left-5 flex overflow-hidden rounded-full text-[0.65rem] font-bold uppercase tracking-[0.18em] shadow-soft sm:top-6 sm:left-6">
                            <span className="bg-navy-950/85 px-3 py-1.5 text-white backdrop-blur">Before</span>
                            <span className="bg-ice-400 px-3 py-1.5 text-navy-950">After</span>
                        </div>
                    </div>
                    <motion.div
                        {...fade(1)}
                        className="absolute -bottom-6 left-6 flex max-w-[18rem] items-center gap-3 rounded-2xl bg-white p-3 pr-5 text-navy-950 shadow-lift sm:left-8"
                    >
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-950 text-ice-300">
                            <Sparkles className="size-5" aria-hidden />
                        </span>
                        <span>
                            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-navy-600">One visit</span>
                            <span className="block font-display text-base leading-tight font-bold">Results you can see from the street.</span>
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
