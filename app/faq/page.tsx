import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/site/page-hero';
import { FaqList } from '@/components/sections/faq-preview';
import { CtaBand } from '@/components/sections/cta-band';
import { Reveal } from '@/components/motion/reveal';
import { faqs } from '@/lib/faq';
import { site } from '@/lib/site';

export const metadata: Metadata = {
    title: 'FAQ',
    description: 'Answers to common questions about 2Glaciares pressure washing services, quotes and scheduling.',
};

export default function FaqPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
    };
    return (
        <>
            <PageHero
                eyebrow="Questions, answered"
                title={
                    <>
                        A little clarity <span className="text-gradient-ice">goes a long way.</span>
                    </>
                }
                description="Everything you might want to know before we get started. Still unsure? One call sorts it."
            />
            <section className="section-y">
                <div className="container-x grid gap-10 lg:grid-cols-12">
                    <Reveal className="lg:col-span-8">
                        <FaqList items={faqs} defaultOpen="item-0" />
                    </Reveal>
                    <Reveal delay={0.1} className="lg:col-span-4">
                        <div className="rounded-3xl bg-navy-950 p-8 text-white shadow-lift lg:sticky lg:top-32">
                            <p className="eyebrow text-ice-300">Still have a question?</p>
                            <h2 className="mt-3 text-2xl font-bold">Talk to a real person.</h2>
                            <p className="mt-3 text-white/70">We answer the phone {site.hours.toLowerCase()}.</p>
                            <div className="mt-6 grid gap-3">
                                <Button asChild variant="accent" size="lg">
                                    <a href={site.phoneHref}>
                                        <Phone aria-hidden /> {site.phoneDisplay}
                                    </a>
                                </Button>
                                <Button asChild variant="inverse" size="lg">
                                    <Link href="/contact">
                                        Send a message <ArrowRight aria-hidden />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            <CtaBand />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        </>
    );
}
