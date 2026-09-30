'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

interface CounterProps {
    to: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    className?: string;
}

export function Counter({ to, suffix = '', prefix = '', duration = 1.6, className }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });
    const reduce = useReducedMotion();

    useEffect(() => {
        const node = ref.current;
        if (!node || !inView) {
            return;
        }
        if (reduce) {
            node.textContent = `${prefix}${to.toLocaleString()}${suffix}`;
            return;
        }
        const controls = animate(0, to, {
            duration,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (value) => {
                node.textContent = `${prefix}${Math.round(value).toLocaleString()}${suffix}`;
            },
        });
        return () => controls.stop();
    }, [inView, to, suffix, prefix, duration, reduce]);

    return (
        <span ref={ref} className={className}>
            {prefix}0{suffix}
        </span>
    );
}
