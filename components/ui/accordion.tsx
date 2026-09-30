'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            className={cn(
                'group rounded-2xl border border-frost-200 bg-white transition-colors data-[state=open]:border-ice-300 data-[state=open]:shadow-soft',
                className,
            )}
            {...props}
        />
    );
}

function AccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                className={cn(
                    'flex flex-1 cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left font-display text-lg font-semibold text-ink transition-colors sm:px-6 [&[data-state=open]>span>svg]:rotate-45',
                    className,
                )}
                {...props}
            >
                {children}
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-frost-100 text-navy-900 transition-colors group-data-[state=open]:bg-ice-100">
                    <Plus className="size-4 transition-transform duration-300" aria-hidden />
                </span>
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            className="overflow-hidden text-[0.98rem] leading-relaxed text-ink-soft data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            {...props}
        >
            <div className={cn('px-5 pb-6 sm:px-6', className)}>{children}</div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
