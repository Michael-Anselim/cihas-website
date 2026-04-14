import { Head } from '@inertiajs/react';
import CarouselSection from '@/components/website/homepage/carousel';
import FeaturesSection from '@/components/website/homepage/features';
import NewsSummary from '@/components/website/homepage/news-summary';
import ProgramsSummary from '@/components/website/homepage/programs-summary';
import WelcomeNote from '@/components/website/homepage/welcome-note';

export default function Welcome() {
    return (
        <>
            <Head title="Home page" />
            
            <div className="scroll-smooth">
                {/** Carousel section */}
                <section className="animate-fade-in">
                    <CarouselSection />
                </section>

                {/** Welcome note */}
                <section className="animate-slide-up">
                    <WelcomeNote />
                </section>

                {/** Features */}
                <section className="animate-fade-in-up bg-gradient-to-b from-background to-muted/20">
                    <FeaturesSection />
                </section>

                {/** Programs Summary */}
                <section className="animate-slide-up">
                    <ProgramsSummary />
                </section>

                {/** News Summary */}
                <section className="animate-fade-in-up bg-muted/30">
                    <NewsSummary />
                </section>
            </div>
        </>
    );
}
