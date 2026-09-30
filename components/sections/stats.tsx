import { BadgeCheck, Building2, Sparkles, type LucideIcon } from 'lucide-react';
import { Stagger, StaggerItem } from '@/components/motion/reveal';
import { site } from '@/lib/site';

interface Stat {
    icon: LucideIcon;
    value: string;
    label: string;
    sub: string;
}

const stats: Stat[] = [
    { icon: Sparkles, value: '10+', label: 'Specialized services', sub: 'Roofs, driveways, sidewalks, windows and more' },
    { icon: Building2, value: 'Residential + Commercial', label: 'One trusted team', sub: 'Homes, HOAs, storefronts and communities' },
    { icon: BadgeCheck, value: 'Free estimates', label: `Across ${site.region}`, sub: 'One call to get started' },
];

export function Stats() {
    return (
        <section className="relative pt-6 pb-20 lg:pt-8 lg:pb-24">
            <div className="container-x">
                <Stagger className="relative grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-[0_24px_60px_-24px_rgb(6_18_36_/_0.8)] backdrop-blur-md sm:grid-cols-3">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ice-300/70 to-transparent" />
                    <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-ice-400/15 blur-3xl" />
                    {stats.map((stat) => (
                        <StaggerItem
                            key={stat.label}
                            className="group relative flex items-start gap-5 p-7 transition-colors hover:bg-white/[0.04] sm:p-8 not-first:border-t sm:not-first:border-t-0 sm:not-first:border-l border-white/10"
                        >
                            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ice-400/15 text-ice-300 ring-1 ring-ice-300/30 transition-colors group-hover:bg-ice-400 group-hover:text-navy-950">
                                <stat.icon className="size-5" aria-hidden />
                            </span>
                            <div>
                                <p className="font-display text-2xl leading-tight font-bold text-gradient-ice sm:text-3xl">{stat.value}</p>
                                <p className="mt-2 text-base font-semibold text-white">{stat.label}</p>
                                <p className="mt-0.5 text-sm text-white/60">{stat.sub}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
