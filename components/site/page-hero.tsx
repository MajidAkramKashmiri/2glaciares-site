import { cn } from '@/lib/utils';

interface PageHeroProps {
    eyebrow: string;
    title: React.ReactNode;
    description?: string;
    children?: React.ReactNode;
    className?: string;
}

export function PageHero({ eyebrow, title, description, children, className }: PageHeroProps) {
    return (
        <section className={cn('relative isolate overflow-hidden bg-navy-950 pt-28 pb-16 text-white sm:pt-32 lg:pt-44 lg:pb-24', className)}>
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-1/2 left-1/2 aspect-square w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(47_171_239_/_0.3),transparent)]" />
                <div className="absolute inset-0 dot-grid opacity-[0.12] [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />
            </div>
            <div className="container-x">
                <p className="eyebrow text-ice-300">
                    <span className="size-1.5 rounded-full bg-ice-300" aria-hidden /> {eyebrow}
                </p>
                <h1 className="mt-5 max-w-4xl text-[2.6rem] leading-[1] font-bold sm:text-6xl lg:text-7xl">{title}</h1>
                {description ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{description}</p> : null}
                {children}
            </div>
        </section>
    );
}
