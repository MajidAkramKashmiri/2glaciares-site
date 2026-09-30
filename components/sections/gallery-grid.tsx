'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Photo } from '@/components/site/photo';
import { services } from '@/lib/services';
import { cn } from '@/lib/utils';

export interface GalleryItem {
    id: string;
    title: string;
    service: string;
    tone: 'navy' | 'ice' | 'frost';
    tall?: boolean;
    src?: string;
}

const filters = ['All', ...services.slice(0, 6).map((service) => service.shortName)];

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
    const [active, setActive] = useState('All');
    const reduce = useReducedMotion();
    const visible = active === 'All' ? items : items.filter((item) => item.service === active);

    return (
        <div>
            <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Filter gallery">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        type="button"
                        role="tab"
                        aria-selected={active === filter}
                        onClick={() => setActive(filter)}
                        className={cn(
                            'h-11 shrink-0 cursor-pointer rounded-full border px-5 text-sm font-semibold transition-colors',
                            active === filter
                                ? 'border-navy-950 bg-navy-950 text-white'
                                : 'border-frost-300 bg-white text-ink hover:border-navy-900',
                        )}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <motion.div layout className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                    {visible.map((item) => (
                        <motion.figure
                            key={item.id}
                            layout={!reduce}
                            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className={cn('group relative overflow-hidden rounded-3xl', item.tall ? 'row-span-2 aspect-[3/4]' : 'aspect-square sm:aspect-[4/3]')}
                        >
                            <Photo src={item.src} alt={item.title} tone={item.tone} className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]" />
                            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-4 text-white sm:p-5">
                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ice-300">{item.service}</p>
                                <p className="mt-1 font-display text-base font-semibold sm:text-lg">{item.title}</p>
                            </figcaption>
                        </motion.figure>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
