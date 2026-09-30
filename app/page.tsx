import { HomeStage } from '@/components/sections/home-stage';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { Marquee } from '@/components/sections/marquee';
import { ServicesGrid } from '@/components/sections/services-grid';
import { ResidentialCommercial } from '@/components/sections/split';
import { BeforeAfter } from '@/components/sections/before-after';
import { WhyUs } from '@/components/sections/why-us';
import { Process } from '@/components/sections/process';
import { FaqPreview } from '@/components/sections/faq-preview';
import { CtaBand } from '@/components/sections/cta-band';

export default function HomePage() {
    return (
        <>
            <HomeStage>
                <Hero />
                <Stats />
            </HomeStage>
            <Marquee />
            <ServicesGrid />
            <ResidentialCommercial />
            <BeforeAfter />
            <WhyUs />
            <Process />
            <FaqPreview />
            <CtaBand />
        </>
    );
}
