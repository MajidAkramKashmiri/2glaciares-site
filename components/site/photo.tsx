import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PhotoProps {
    src?: string;
    alt: string;
    className?: string;
    imgClassName?: string;
    priority?: boolean;
    sizes?: string;
    tone?: 'navy' | 'ice' | 'frost';
    label?: string;
}

const tones = {
    navy: 'from-navy-800 via-navy-900 to-navy-950',
    ice: 'from-ice-200 via-ice-400 to-navy-700',
    frost: 'from-frost-100 via-ice-100 to-ice-300',
};

export function Photo({ src, alt, className, imgClassName, priority, sizes, tone = 'navy', label }: PhotoProps) {
    if (src) {
        return (
            <div className={cn('relative overflow-hidden', className)}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    sizes={sizes ?? '(min-width: 1024px) 50vw, 100vw'}
                    className={cn('object-cover', imgClassName)}
                />
            </div>
        );
    }
    return (
        <div
            role="img"
            aria-label={alt}
            className={cn('relative overflow-hidden bg-gradient-to-br grain grain-after', tones[tone], className)}
        >
            <div className="absolute inset-0 dot-grid opacity-30" />
            <div className="absolute -right-1/4 -bottom-1/3 aspect-square w-3/4 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute top-1/4 -left-1/4 aspect-square w-1/2 rounded-full bg-ice-300/30 blur-3xl" />
            {label ? (
                <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                    {label}
                </span>
            ) : null}
        </div>
    );
}
