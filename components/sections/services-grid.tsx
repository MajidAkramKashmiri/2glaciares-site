import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Photo } from '@/components/site/photo';
import { SectionHeading } from '@/components/site/section-heading';
import { Stagger, StaggerItem } from '@/components/motion/reveal';
import { featuredServices, type Service } from '@/lib/services';
import { cn } from '@/lib/utils';

function ServiceCard({ service, large = false }: { service: Service; large?: boolean }) {
    return (
        <Link
            href={`/services/${service.slug}`}
            className={cn(
                'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-frost-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ice-300 hover:shadow-lift',
                large && 'min-h-[32rem] border-transparent bg-navy-950 text-white',
            )}
        >
            {large ? (
                <>
                    <Photo
                        src={service.image}
                        alt={service.name}
                        tone="ice"
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/10" />
                </>
            ) : (
                <Photo
                    src={service.image}
                    alt={service.name}
                    tone="frost"
                    className="aspect-[16/9] w-full transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
            )}
            <div className={cn('relative flex flex-1 flex-col p-6 sm:p-7', large && 'justify-end')}>
                <div className="flex items-start justify-between">
                    <span
                        className={cn(
                            'grid size-12 place-items-center rounded-2xl bg-gradient-to-br text-navy-950 shadow-soft',
                            service.accent,
                            !large && '-mt-13',
                        )}
                    >
                        <service.icon className="size-5" aria-hidden />
                    </span>
                    <span
                        className={cn(
                            'grid size-10 place-items-center rounded-full border transition-all duration-300 group-hover:bg-ice-400 group-hover:text-navy-950',
                            large ? 'border-white/25 bg-white/10 text-white backdrop-blur' : '-mt-13 border-frost-200 bg-white text-ink shadow-soft',
                        )}
                    >
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </span>
                </div>
                <div className={cn('mt-6', large && 'mt-8')}>
                    <p className={cn('eyebrow', large ? 'text-ice-300' : 'text-navy-600')}>{service.tagline}</p>
                    <h3 className={cn('mt-3 text-2xl font-bold', large && 'text-3xl sm:text-4xl')}>{service.name}</h3>
                    <p className={cn('mt-3 text-[0.95rem] leading-relaxed', large ? 'max-w-md text-white/75' : 'text-ink-soft')}>
                        {service.summary}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export function ServicesGrid() {
    const [first, second, ...rest] = featuredServices;
    return (
        <section className="section-y" id="services">
            <div className="container-x">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <SectionHeading
                        eyebrow="What we clean"
                        title="A brighter property starts here."
                        description="From a single sidewalk to a full commercial property, our service list is built to meet the moment."
                    />
                    <Button asChild variant="outline" size="lg" className="self-start lg:self-auto">
                        <Link href="/services">
                            Explore all services <ArrowUpRight aria-hidden />
                        </Link>
                    </Button>
                </div>
                <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <StaggerItem className="sm:col-span-2 lg:row-span-2">
                        <ServiceCard service={first} large />
                    </StaggerItem>
                    <StaggerItem className="lg:col-span-2">
                        <ServiceCard service={second} />
                    </StaggerItem>
                    {rest.map((service, index) => (
                        <StaggerItem key={service.slug} className={cn(index >= 2 && 'lg:col-span-2')}>
                            <ServiceCard service={service} />
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
