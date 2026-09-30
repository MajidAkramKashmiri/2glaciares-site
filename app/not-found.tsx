import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <section className="flex min-h-[70vh] items-center bg-navy-950 pt-24 text-white">
            <div className="container-x text-center">
                <p className="eyebrow justify-center text-ice-300">404</p>
                <h1 className="mt-4 text-5xl font-bold sm:text-6xl">That page got washed away.</h1>
                <p className="mx-auto mt-4 max-w-md text-white/70">The link may be old. Head back home or browse our services.</p>
                <Button asChild variant="accent" size="lg" className="mt-8">
                    <Link href="/">
                        <ArrowLeft aria-hidden /> Back home
                    </Link>
                </Button>
            </div>
        </section>
    );
}
