'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/site/logo';
import { nav, site } from '@/lib/site';
import { services } from '@/lib/services';
import { cn } from '@/lib/utils';

export function SiteHeader() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
    const onDark = !scrolled;
    const linkClass = (href: string) =>
        cn(
            'rounded-full px-4 py-2 text-sm font-medium transition-colors',
            onDark
                ? cn('hover:bg-white/10', isActive(href) ? 'text-white' : 'text-white/75')
                : cn('hover:bg-frost-100', isActive(href) ? 'text-navy-900' : 'text-ink-soft'),
        );

    return (
        <header className="fixed inset-x-0 top-0 z-40">
            <div className={cn('hidden text-white/85 transition-colors lg:block', onDark ? 'border-b border-white/10 bg-transparent' : 'bg-navy-950')}>
                <div className="container-x flex h-8 items-center justify-between text-xs">
                    <span className="tracking-wide">
                        Serving {site.region} · {site.hours}
                    </span>
                    <a href={site.phoneHref} className="inline-flex items-center gap-2 font-semibold text-ice-300 hover:text-white">
                        <Phone className="size-3.5" aria-hidden /> {site.phoneDisplay}
                    </a>
                </div>
            </div>
            <div
                className={cn(
                    'transition-all duration-300',
                    scrolled ? 'glass border-b border-white/60 shadow-soft' : 'bg-transparent',
                )}
            >
                <div className="container-x flex h-16 items-center justify-between gap-4">
                    <Logo inverse={onDark} />

                    <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
                        {nav.map((item) =>
                            'hasMenu' in item && item.hasMenu ? (
                                <div key={item.href} className="group relative">
                                    <Link
                                        href={item.href}
                                        className={cn('inline-flex items-center gap-1', linkClass(item.href))}
                                        aria-haspopup="true"
                                    >
                                        {item.label}
                                        <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" aria-hidden />
                                    </Link>
                                    <div className="invisible absolute left-1/2 top-full w-[44rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                                        <div className="rounded-3xl border border-frost-200 bg-white p-3 shadow-lift">
                                            <div className="grid grid-cols-2 gap-1">
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.slug}
                                                        href={`/services/${service.slug}`}
                                                        className="group/item flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-frost-50"
                                                    >
                                                        <span className={cn('mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-navy-950', service.accent)}>
                                                            <service.icon className="size-4" aria-hidden />
                                                        </span>
                                                        <span>
                                                            <span className="block text-sm font-semibold text-ink">{service.name}</span>
                                                            <span className="block text-xs leading-snug text-muted">{service.tagline}</span>
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                            <Link
                                                href="/services"
                                                className="mt-2 flex items-center justify-between rounded-2xl bg-navy-950 px-4 py-3 text-sm font-semibold text-white hover:bg-navy-900"
                                            >
                                                View all services <ArrowUpRight className="size-4" aria-hidden />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                                    {item.label}
                                </Link>
                            ),
                        )}
                    </nav>

                    <div className="flex items-center gap-2">
                        <Button asChild variant="accent" size="md" className="hidden sm:inline-flex">
                            <Link href="/contact">Free quote</Link>
                        </Button>

                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant={onDark ? 'inverse' : 'outline'} size="icon" className="lg:hidden" aria-label="Open menu">
                                    <Menu aria-hidden />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="overflow-y-auto">
                                <SheetTitle className="sr-only">Menu</SheetTitle>
                                <SheetDescription className="sr-only">Site navigation</SheetDescription>
                                <div className="flex flex-col gap-8 px-6 pt-6 pb-10">
                                    <Logo inverse />
                                    <nav className="flex flex-col" aria-label="Mobile">
                                        {nav.map((item, index) => (
                                            <SheetClose asChild key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        'flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-semibold tracking-tight transition-colors hover:text-ice-300',
                                                        isActive(item.href) ? 'text-ice-300' : 'text-white',
                                                    )}
                                                    style={{ animationDelay: `${index * 40}ms` }}
                                                >
                                                    {item.label}
                                                    <ArrowUpRight className="size-5 opacity-50" aria-hidden />
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </nav>
                                    <div>
                                        <p className="eyebrow text-ice-300">Services</p>
                                        <div className="mt-3 grid grid-cols-2 gap-2">
                                            {services.map((service) => (
                                                <SheetClose asChild key={service.slug}>
                                                    <Link
                                                        href={`/services/${service.slug}`}
                                                        className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-3 text-sm text-white/85 transition-colors hover:bg-white/10"
                                                    >
                                                        <service.icon className="size-4 text-ice-300" aria-hidden />
                                                        {service.shortName}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid gap-3">
                                        <Button asChild variant="accent" size="lg">
                                            <a href={site.phoneHref}>
                                                <Phone aria-hidden /> Call {site.phoneDisplay}
                                            </a>
                                        </Button>
                                        <SheetClose asChild>
                                            <Button asChild variant="inverse" size="lg">
                                                <Link href="/contact">Get a free quote</Link>
                                            </Button>
                                        </SheetClose>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
