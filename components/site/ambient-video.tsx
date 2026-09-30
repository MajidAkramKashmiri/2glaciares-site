'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/utils';

export interface VideoSource {
    mp4: string;
    webm?: string;
    poster: string;
}

interface AmbientVideoProps extends VideoSource {
    alt: string;
    className?: string;
    videoClassName?: string;
}

export function AmbientVideo({ mp4, webm, poster, alt, className, videoClassName }: AmbientVideoProps) {
    const ref = useRef<HTMLVideoElement>(null);
    const reduce = useReducedMotion();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const video = ref.current;
        if (!video || reduce) {
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => undefined);
                }
                else {
                    video.pause();
                }
            },
            { threshold: 0.2 },
        );
        observer.observe(video);
        return () => observer.disconnect();
    }, [reduce]);

    return (
        <div className={cn('relative overflow-hidden bg-navy-950', className)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={asset(poster)}
                alt={alt}
                className={cn('absolute inset-0 size-full object-cover transition-opacity duration-700', ready && !reduce && 'opacity-0')}
            />
            {!reduce ? (
                <video
                    ref={ref}
                    className={cn('absolute inset-0 size-full object-cover', videoClassName)}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={asset(poster)}
                    aria-hidden
                    onPlaying={() => setReady(true)}
                >
                    <source src={asset(mp4)} type="video/mp4" />
                    {webm ? <source src={asset(webm)} type="video/webm" /> : null}
                </video>
            ) : null}
        </div>
    );
}
