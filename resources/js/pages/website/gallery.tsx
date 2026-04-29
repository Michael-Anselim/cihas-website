import { Head } from '@inertiajs/react';
import FeaturedAlbums from '@/components/website/gallery/featured-albums';
import type { Galery } from '@/types';

type Props = {
    albums: Galery[];
};

export default function Gallery({ albums }: Props) {
    return (
        <>
            <Head title="Gallery" />

            <div className="scroll-smooth">
                <FeaturedAlbums albums={albums} />
            </div>
        </>
    );
}
