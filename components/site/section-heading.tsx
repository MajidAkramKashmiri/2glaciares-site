import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion/reveal';

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
    inverse?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'left',
    inverse = false,
    className,
    children,
}: SectionHeadingProps) {
    return (
        <Reveal className={cn('flex flex-col gap-5', align === 'center' && 'items-center text-center', className)}>
            {eyebrow ? (
                <p className={cn('eyebrow', inverse ? 'text-ice-300' : 'text-navy-600')}>
                    <span className={cn('size-1.5 rounded-full', inverse ? 'bg-ice-300' : 'bg-ice-500')} aria-hidden />
                    {eyebrow}
                </p>
            ) : null}
            <h2
                className={cn(
                    'max-w-3xl text-[2rem] leading-[1.05] font-bold sm:text-[2.6rem] lg:text-[3.25rem]',
                    inverse ? 'text-white' : 'text-ink',
                )}
            >
                {title}
            </h2>
            {description ? (
                <p className={cn('max-w-2xl text-[1.05rem] leading-relaxed', inverse ? 'text-white/70' : 'text-ink-soft')}>
                    {description}
                </p>
            ) : null}
            {children}
        </Reveal>
    );
}
