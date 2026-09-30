import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className, inverse = false }: { className?: string; inverse?: boolean }) {
    return (
        <Link href="/" className={cn('group inline-flex items-center gap-2.5', className)} aria-label="2Glaciares home">
            <span className="relative grid size-10 place-items-center">
                <svg viewBox="0 0 40 40" className="size-10" aria-hidden>
                    <defs>
                        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stopColor="#8fd8ff" />
                            <stop offset="1" stopColor="#2fabef" />
                        </linearGradient>
                    </defs>
                    <path d="M4 30 L14 10 L20 20 L26 8 L36 30 Z" fill="url(#lg)" />
                    <path d="M4 30 L14 10 L20 20 Z" fill="#ffffff" fillOpacity="0.35" />
                    <path d="M2 33 Q10 29 20 33 T38 33" stroke={inverse ? '#ffffff' : '#0b1f3a'} strokeWidth="2.2" fill="none" strokeLinecap="round" />
                </svg>
            </span>
            <span className="flex flex-col leading-none">
                <span className={cn('font-display text-[1.15rem] font-bold tracking-tight', inverse ? 'text-white' : 'text-ink')}>
                    2Glaciares
                </span>
                <span className={cn('text-[0.62rem] font-semibold uppercase tracking-[0.22em]', inverse ? 'text-ice-300' : 'text-navy-600')}>
                    Pressure Washing
                </span>
            </span>
        </Link>
    );
}
