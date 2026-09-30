import { CalendarCheck, PhoneCall, ReceiptText, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Stagger, StaggerItem } from '@/components/motion/reveal';
import { site } from '@/lib/site';

const steps = [
    { icon: PhoneCall, title: 'Contact us', text: `Call ${site.phoneDisplay} or tell us what needs a reset.` },
    { icon: ReceiptText, title: 'Get your quote', text: 'We discuss the property, your priorities and preferred timing.' },
    { icon: CalendarCheck, title: 'Schedule service', text: 'Choose a convenient service window that works for you.' },
    { icon: Sparkles, title: 'Enjoy the result', text: 'We handle the cleaning while you enjoy a fresher property.' },
];

export function Process() {
    return (
        <section className="section-y relative overflow-hidden bg-navy-950 text-white">
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-10" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-ice-400/60 to-transparent" />
            <div className="container-x relative">
                <SectionHeading
                    eyebrow="How it works"
                    title="Clean, without the runaround."
                    description="Four simple steps from first hello to the moment you see the difference."
                    inverse
                    align="center"
                    className="mx-auto"
                />
                <Stagger className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-ice-400/0 via-ice-400/60 to-ice-400/0 lg:block" />
                    {steps.map((step, index) => (
                        <StaggerItem key={step.title} className="relative">
                            <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                                <span className="relative grid size-16 shrink-0 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/15 backdrop-blur">
                                    <step.icon className="size-6 text-ice-300" aria-hidden />
                                    <span className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full bg-ice-400 font-display text-xs font-bold text-navy-950">
                                        {index + 1}
                                    </span>
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold lg:mt-6">{step.title}</h3>
                                    <p className="mt-2 text-[0.95rem] leading-relaxed text-white/65">{step.text}</p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
