'use client';

import { useCallback, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, MoveHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Photo } from '@/components/site/photo';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/motion/reveal';
import { cn } from '@/lib/utils';

interface BeforeAfterProps {
    beforeSrc?: string;
    afterSrc?: string;
    alt?: string;
    className?: string;
    compact?: boolean;
}

export function BeforeAfterSlider({ beforeSrc, afterSrc, alt = 'Driveway before and after pressure washing', className, compact }: BeforeAfterProps) {
    const [position, setPosition] = useState(52);
    const [dragging, setDragging] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    const update = useCallback((clientX: number) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) {
            return;
        }
        const next = ((clientX - rect.left) / rect.width) * 100;
        setPosition(Math.min(100, Math.max(0, next)));
    }, []);

    return (
        <div
            ref={ref}
            className={cn(
                'relative aspect-[16/10] w-full touch-pan-y select-none overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-frost-200',
                compact && 'aspect-[4/3]',
                className,
            )}
            onPointerDown={(event) => {
                setDragging(true);
                event.currentTarget.setPointerCapture(event.pointerId);
                update(event.clientX);
            }}
            onPointerMove={(event) => dragging && update(event.clientX)}
            onPointerUp={() => setDragging(false)}
            onPointerCancel={() => setDragging(false)}
        >
            <Photo src={afterSrc} alt={`${alt} — after`} tone="frost" className="absolute inset-0" label={afterSrc ? undefined : 'After'} />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
                <Photo
                    src={beforeSrc ?? afterSrc}
                    alt={`${alt} — before`}
                    tone="navy"
                    className="absolute inset-0"
                    imgClassName={!beforeSrc && afterSrc ? 'saturate-[0.35] brightness-[0.62] sepia-[0.45] contrast-[0.9]' : undefined}
                    label={beforeSrc || afterSrc ? undefined : 'Before'}
                />
            </div>

            <span className="pointer-events-none absolute left-5 top-5 rounded-full bg-navy-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                Before
            </span>
            <span className="pointer-events-none absolute right-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-navy-950 backdrop-blur">
                After
            </span>

            <div className="pointer-events-none absolute inset-y-0 w-px bg-white/90 shadow-[0_0_0_1px_rgb(11_31_58_/_0.15)]" style={{ left: `${position}%` }} />
            <label htmlFor={id} className="sr-only">
                Compare before and after
            </label>
            <input
                id={id}
                type="range"
                min={0}
                max={100}
                value={Math.round(position)}
                onChange={(event) => setPosition(Number(event.target.value))}
                aria-valuetext={`${Math.round(position)} percent before`}
                className="absolute inset-0 z-10 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
            />
            <div
                className={cn(
                    'pointer-events-none absolute top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-navy-950 shadow-lift ring-4 ring-white/40 transition-transform',
                    dragging && 'scale-95',
                )}
                style={{ left: `${position}%` }}
            >
                <MoveHorizontal className="size-5" aria-hidden />
            </div>
        </div>
    );
}

export function BeforeAfter() {
    return (
        <section className="section-y bg-white">
            <div className="container-x grid items-center gap-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <SectionHeading
                        eyebrow="See the difference"
                        title="Before the rinse. After the reset."
                        description="A professional clean is not subtle. Drag the handle to see the kind of transformation 2Glaciares is built to deliver."
                    >
                        <Button asChild variant="primary" size="lg" className="mt-2 self-start">
                            <Link href="/gallery">
                                View the gallery <ArrowUpRight aria-hidden />
                            </Link>
                        </Button>
                    </SectionHeading>
                </div>
                <Reveal className="lg:col-span-7" delay={0.1}>
                    <BeforeAfterSlider afterSrc="/images/driveway.jpg" alt="Home driveway and garage before and after pressure washing" />
                </Reveal>
            </div>
        </section>
    );
}
