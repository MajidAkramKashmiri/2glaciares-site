import { services } from '@/lib/services';
import { site } from '@/lib/site';

export function Marquee() {
    const items = [...services.map((service) => service.name), ...site.serviceAreas];
    return (
        <div className="relative overflow-hidden border-y border-frost-200 bg-white py-4" aria-hidden>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
            <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform [animation-play-state:running] hover:[animation-play-state:paused]">
                {[...items, ...items].map((item, index) => (
                    <span key={`${item}-${index}`} className="inline-flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.18em] text-navy-900/70">
                        {item}
                        <span className="size-1.5 rounded-full bg-ice-500" />
                    </span>
                ))}
            </div>
        </div>
    );
}
