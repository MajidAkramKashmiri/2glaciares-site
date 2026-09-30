'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/utils';
import type { VideoSource } from '@/components/site/ambient-video';

export interface HeroClip extends VideoSource {
    caption: string;
}

interface HeroVideoProps {
    clips: HeroClip[];
    onChange?: (index: number) => void;
}

const CROSSFADE_SECONDS = 0.9;

export function HeroVideo({ clips, onChange }: HeroVideoProps) {
    const reduce = useReducedMotion();
    const refs = useRef<(HTMLVideoElement | null)[]>([]);
    const [active, setActive] = useState(0);
    const [started, setStarted] = useState(false);
    const switching = useRef(false);

    const advance = useCallback(() => {
        if (switching.current || clips.length < 2) {
            return;
        }
        switching.current = true;
        const next = (active + 1) % clips.length;
        const video = refs.current[next];
        if (video) {
            video.currentTime = 0;
            video.play().catch(() => undefined);
        }
        setActive(next);
        onChange?.(next);
        window.setTimeout(() => {
            switching.current = false;
        }, CROSSFADE_SECONDS * 1000);
    }, [active, clips.length, onChange]);

    useEffect(() => {
        if (reduce) {
            return;
        }
        const video = refs.current[0];
        video?.play().then(() => setStarted(true)).catch(() => undefined);
    }, [reduce]);

    if (reduce) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={asset(clips[0].poster)} alt="" className="absolute inset-0 size-full object-cover" />
        );
    }

    return (
        <>
            {clips.map((clip, index) => (
                <video
                    key={clip.mp4}
                    ref={(node) => {
                        refs.current[index] = node;
                    }}
                    className={cn(
                        'absolute inset-0 size-full object-cover saturate-[1.08] transition-opacity ease-in-out',
                        index === active && started ? 'opacity-100' : 'opacity-0',
                    )}
                    style={{ transitionDuration: `${CROSSFADE_SECONDS}s` }}
                    muted
                    playsInline
                    preload={index === 0 ? 'auto' : 'metadata'}
                    poster={asset(clip.poster)}
                    aria-hidden
                    loop={clips.length === 1}
                    onPlaying={() => index === 0 && setStarted(true)}
                    onTimeUpdate={(event) => {
                        const video = event.currentTarget;
                        if (index === active && video.duration && video.duration - video.currentTime <= CROSSFADE_SECONDS) {
                            advance();
                        }
                    }}
                    onEnded={() => index === active && advance()}
                >
                    <source src={asset(clip.mp4)} type="video/mp4" />
                    {clip.webm ? <source src={asset(clip.webm)} type="video/webm" /> : null}
                </video>
            ))}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={asset(clips[0].poster)}
                alt=""
                className={cn('absolute inset-0 size-full object-cover transition-opacity duration-700', started && 'opacity-0')}
            />
        </>
    );
}
