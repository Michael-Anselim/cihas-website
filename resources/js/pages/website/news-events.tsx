import { Head } from '@inertiajs/react';
import NewsEventsHero from '@/components/website/news-events/hero';
import LatestNews from '@/components/website/news-events/latest-news';

export default function NewsEvents() {
    return (
        <>
            <Head title="News & Events" />

            <div className="scroll-smooth">
                <NewsEventsHero />
                <LatestNews />
            </div>
        </>
    );
}
