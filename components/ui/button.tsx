import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'group/btn inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 ease-out outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-[0.98]',
    {
        variants: {
            variant: {
                primary:
                    'bg-navy-900 text-white shadow-soft hover:bg-navy-800 hover:shadow-lift',
                accent:
                    'bg-ice-400 text-navy-950 shadow-soft hover:bg-ice-300 hover:shadow-glow',
                outline:
                    'border border-frost-300 bg-white/70 text-ink backdrop-blur hover:border-navy-900 hover:bg-white',
                ghost: 'text-ink hover:bg-frost-100',
                inverse:
                    'border border-white/15 bg-white/10 text-white backdrop-blur hover:bg-white/20',
                link: 'text-ink underline-offset-4 hover:underline',
            },
            size: {
                sm: 'h-10 px-4 text-sm [&_svg]:size-4',
                md: 'h-12 px-6 text-[0.95rem] [&_svg]:size-4',
                lg: 'h-14 px-8 text-base [&_svg]:size-5',
                icon: 'size-12 [&_svg]:size-5',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
