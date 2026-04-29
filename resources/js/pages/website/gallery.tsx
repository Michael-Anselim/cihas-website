import { Head } from '@inertiajs/react';
import FeaturedAlbums from '@/components/website/gallery/featured-albums';

export default function Gallery() {
    return (
        <>
            <Head title="Gallery" />

            <div className="scroll-smooth">
                <section className="relative overflow-hidden bg-primary py-24">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-chart-5 via-chart-3 to-chart-2" />
                    <div className="relative mx-auto max-w-6xl px-4 text-center">
                        <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
                            Our Gallery
                        </span>
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                            Photo Gallery
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
                            Capturing moments of learning, achievement, and community life at Charlotte IHAS.
                        </p>
                    </div>
                </section>
                <FeaturedAlbums />
            </div>
        </>
    );
}
