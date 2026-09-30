import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/motion/reveal';
import { faqs, type FaqItem } from '@/lib/faq';

export function FaqList({ items, defaultOpen }: { items: FaqItem[]; defaultOpen?: string }) {
    return (
        <Accordion type="single" collapsible defaultValue={defaultOpen} className="grid gap-3">
            {items.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export function FaqPreview() {
    return (
        <section className="section-y">
            <div className="container-x grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <SectionHeading
                        eyebrow="Questions, answered"
                        title="A little clarity goes a long way."
                        description="Here are a few quick answers before we get started."
                    >
                        <Button asChild variant="outline" size="lg" className="mt-2 self-start">
                            <Link href="/faq">
                                View all FAQs <ArrowUpRight aria-hidden />
                            </Link>
                        </Button>
                    </SectionHeading>
                </div>
                <Reveal className="lg:col-span-7" delay={0.1}>
                    <FaqList items={faqs.slice(0, 4)} defaultOpen="item-0" />
                </Reveal>
            </div>
        </section>
    );
}
