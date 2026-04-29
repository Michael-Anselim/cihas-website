import { Head } from '@inertiajs/react';
import HeroSection from '@/components/website/about/hero';
import OurStory from '@/components/website/about/our-story';
import MissionVision from '@/components/website/about/mission-vision';
import Values from '@/components/website/about/values';

export default function AboutUs() {
    return (
        <>
            <Head title="About Us" />

            <div className="scroll-smooth">
                <HeroSection />
                <OurStory />
                <MissionVision />
                <Values />
            </div>
        </>
    );
}
