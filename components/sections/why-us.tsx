import { Droplets, Gauge, HeartHandshake, Layers } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Stagger, StaggerItem } from '@/components/motion/reveal';

const reasons = [
    {
        icon: HeartHandshake,
        title: 'Professional service',
        text: 'A reliable exterior cleaning experience, built around your property and your schedule.',
    },
    {
        icon: Gauge,
        title: 'Powerful cleaning',
        text: 'The right pressure, chemistry and attention for stubborn outdoor buildup — without damaging the surface.',
    },
    {
        icon: Layers,
        title: 'Made for both',
        text: 'Homes, businesses, communities and larger properties, handled by one trusted team.',
    },
    {
        icon: Droplets,
        title: 'A cleaner finish',
        text: 'Thoughtful work that leaves surfaces looking refreshed, not rushed.',
    },
];

export function WhyUs() {
    return (
        <section className="section-y bg-white">
            <div className="container-x">
                <SectionHeading
                    eyebrow="Why 2Glaciares"
                    title="The power is in the details."
                    description="Exterior care with a higher standard — built around water, precision and pride in the details."
                    align="center"
                    className="mx-auto"
                />
                <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason, index) => (
                        <StaggerItem
                            key={reason.title}
                            className="group relative overflow-hidden rounded-3xl border border-frost-200 bg-frost-50 p-7 transition-colors hover:border-ice-300 hover:bg-white"
                        >
                            <span className="absolute right-5 top-5 font-display text-5xl font-bold text-frost-200 transition-colors group-hover:text-ice-100">
                                0{index + 1}
                            </span>
                            <span className="grid size-12 place-items-center rounded-2xl bg-navy-950 text-ice-300 shadow-soft">
                                <reason.icon className="size-5" aria-hidden />
                            </span>
                            <h3 className="mt-8 text-xl font-bold">{reason.title}</h3>
                            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{reason.text}</p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
