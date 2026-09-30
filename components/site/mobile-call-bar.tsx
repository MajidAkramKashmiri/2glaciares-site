import Link from 'next/link';
import { MessageSquareText, Phone } from 'lucide-react';
import { site } from '@/lib/site';

export function MobileCallBar() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
            <div className="pb-safe glass border-t border-white/70 shadow-[0_-8px_30px_-12px_rgb(11_31_58_/_0.25)]">
                <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
                    <a
                        href={site.phoneHref}
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy-900 text-sm font-semibold text-white active:scale-[0.98]"
                    >
                        <Phone className="size-4" aria-hidden /> Call now
                    </a>
                    <Link
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ice-400 text-sm font-semibold text-navy-950 active:scale-[0.98]"
                    >
                        <MessageSquareText className="size-4" aria-hidden /> Free quote
                    </Link>
                </div>
            </div>
        </div>
    );
}
