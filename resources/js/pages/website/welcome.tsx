import type { PageProps } from '@inertiajs/core';
import { Head, usePage } from '@inertiajs/react';
import CarouselSection from '@/components/website/homepage/carousel';
import FeaturesSection from '@/components/website/homepage/features';
import NewsSummary from '@/components/website/homepage/news-summary';
import ProgramsSummary from '@/components/website/homepage/programs-summary';
import WelcomeNote from '@/components/website/homepage/welcome-note';
import type { Program, Post, CarouselItem } from '@/types';

interface CarouselIndexProps extends PageProps {
    carousels: CarouselItem[];
}
export default function Welcome({ carousels }: CarouselIndexProps) {
    const { programs, posts } = usePage<{
        programs: Program[];
        posts: Post[];
    }>().props;

    console.log(carousels);

    return (
        <>
            <Head title="Home page" />

            <div className="scroll-smooth">
                {/** Carousel section */}
                <section className="animate-fade-in">
                    <CarouselSection data={carousels} />
                </section>

                {/** Welcome note */}
                <section className="animate-slide-up">
                    <WelcomeNote />
                </section>

                {/** Features */}
                <section className="animate-fade-in-up bg-gradient-to-linear from-background to-muted/20">
                    <FeaturesSection />
                </section>

                {/** Programs Summary */}
                <section className="animate-slide-up">
                    <ProgramsSummary data={programs} />
                </section>

                {/** News Summary */}
                <section className="animate-fade-in-up bg-muted/30">
                    <NewsSummary posts={posts} />
                </section>
            </div>
        </>
    );
}
