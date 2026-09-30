'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RevealProps extends HTMLMotionProps<'div'> {
    delay?: number;
    y?: number;
    once?: boolean;
}

export function Reveal({ children, className, delay = 0, y = 24, once = true, ...props }: RevealProps) {
    const reduce = useReducedMotion();
    return (
        <motion.div
            className={cn(className)}
            initial={reduce ? false : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

interface StaggerProps extends HTMLMotionProps<'div'> {
    stagger?: number;
}

export function Stagger({ children, className, stagger = 0.08, ...props }: StaggerProps) {
    const reduce = useReducedMotion();
    return (
        <motion.div
            className={className}
            initial={reduce ? false : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className, ...props }: HTMLMotionProps<'div'>) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 20, scale: 0.98 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
