import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';
import { GalleryGrid, type GalleryItem } from '@/components/sections/gallery-grid';
import { BeforeAfterSlider } from '@/components/sections/before-after';
import { CtaBand } from '@/components/sections/cta-band';
import { Reveal } from '@/components/motion/reveal';
import { SectionHeading } from '@/components/site/section-heading';

export const metadata: Metadata = {
    title: 'Gallery',
    description: 'Before-and-after results from 2Glaciares pressure washing projects across South Florida.',
};

const items: GalleryItem[] = [
    { id: 'g1', title: 'Paver driveway reset', service: 'Residential', tone: 'ice', tall: true, src: '/images/driveway.jpg' },
    { id: 'g2', title: 'Storefront sidewalk', service: 'Commercial', tone: 'navy', src: '/images/commercial.jpg' },
    { id: 'g3', title: 'Clubhouse walkways', service: 'Communities & Condos', tone: 'frost', src: '/images/walkway.jpg' },
    { id: 'g4', title: 'Tile roof soft wash', service: 'Roof', tone: 'navy', src: '/images/roof.jpg' },
    { id: 'g5', title: 'Pool deck refresh', service: 'Residential', tone: 'frost', src: '/images/pool-deck.jpg' },
    { id: 'g6', title: 'Plaza frontage', service: 'Commercial', tone: 'ice', tall: true, src: '/images/plaza.jpg' },
    { id: 'g7', title: 'Breezeway concrete', service: 'Sidewalks', tone: 'navy', src: '/images/sidewalk.jpg' },
    { id: 'g8', title: 'Gutter line brightening', service: 'Gutters', tone: 'ice', src: '/images/gutter.jpg' },
    { id: 'g9', title: 'Condo pool deck', service: 'Communities & Condos', tone: 'frost', src: '/images/waterfront.jpg' },
];

export default function GalleryPage() {
    return (
        <>
            <PageHero
                eyebrow="Gallery"
                title={
                    <>
                        Before the rinse. <span className="text-gradient-ice">After the reset.</span>
                    </>
                }
                description="A professional clean is not subtle. Browse recent work across homes, businesses and communities."
            />
            <section className="section-y">
                <div className="container-x">
                    <Reveal>
                        <BeforeAfterSlider afterSrc="/images/driveway.jpg" alt="Home driveway and garage before and after pressure washing" />
                    </Reveal>
                </div>
            </section>
            <section className="pb-20 lg:pb-32">
                <div className="container-x">
                    <SectionHeading eyebrow="Recent work" title="Every surface tells a story." className="mb-10" />
                    <GalleryGrid items={items} />
                </div>
            </section>
            <CtaBand />
        </>
    );
}
