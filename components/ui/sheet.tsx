'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetTitle = DialogPrimitive.Title;
const SheetDescription = DialogPrimitive.Description;

function SheetContent({
    className,
    children,
    side = 'right',
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & { side?: 'right' | 'left' | 'bottom' }) {
    return (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
            <DialogPrimitive.Content
                className={cn(
                    'fixed z-50 flex flex-col bg-navy-950 text-white shadow-lift outline-none transition ease-out data-[state=closed]:duration-300 data-[state=open]:duration-400 data-[state=closed]:animate-out data-[state=open]:animate-in',
                    side === 'right' &&
                        'inset-y-0 right-0 h-dvh w-full max-w-md data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
                    side === 'left' &&
                        'inset-y-0 left-0 h-dvh w-full max-w-md data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
                    side === 'bottom' &&
                        'inset-x-0 bottom-0 max-h-[92dvh] rounded-t-3xl data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
                    className,
                )}
                {...props}
            >
                {children}
                <DialogPrimitive.Close className="absolute top-4 right-4 grid size-11 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
                    <X className="size-5" aria-hidden />
                    <span className="sr-only">Close menu</span>
                </DialogPrimitive.Close>
            </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
    );
}

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetTitle, SheetDescription };
