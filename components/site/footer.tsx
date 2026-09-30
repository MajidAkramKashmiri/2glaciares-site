import Link from 'next/link';
import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react';
import { Logo } from '@/components/site/logo';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export function SiteFooter() {
    return (
        <footer className="relative overflow-hidden bg-navy-950 text-white">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgb(92_196_251_/_0.22),transparent_75%)]" />
            <div className="container-x relative grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
                <div className="lg:col-span-4">
                    <Logo inverse />
                    <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
                        {site.tagline} {site.description}
                    </p>
                    <ul className="mt-8 space-y-3 text-sm text-white/80">
                        <li className="flex items-center gap-3">
                            <Phone className="size-4 text-ice-300" aria-hidden />
                            <a href={site.phoneHref} className="font-semibold text-white hover:text-ice-300">
                                {site.phoneDisplay}
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin className="size-4 text-ice-300" aria-hidden /> Serving {site.region}
                        </li>
                        <li className="flex items-center gap-3">
                            <Clock className="size-4 text-ice-300" aria-hidden /> {site.hours}
                        </li>
                    </ul>
                </div>
                <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
                    <div>
                        <p className="eyebrow text-ice-300">Explore</p>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {[
                                ['Services', '/services'],
                                ['About us', '/about'],
                                ['Gallery', '/gallery'],
                                ['FAQ', '/faq'],
                                ['Contact', '/contact'],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <Link href={href} className="text-white/75 transition-colors hover:text-white">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sm:col-span-2">
                        <p className="eyebrow text-ice-300">Services</p>
                        <ul className="mt-4 grid gap-2.5 text-sm sm:grid-cols-2">
                            {services.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="text-white/75 transition-colors hover:text-white"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-x relative">
                <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
                    <Link href="/contact" className="inline-flex items-center gap-1 text-white/75 hover:text-white">
                        Request a quote <ArrowUpRight className="size-3.5" aria-hidden />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
