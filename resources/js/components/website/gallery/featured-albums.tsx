import { Camera } from 'lucide-react';
import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const featuredAlbums = [
    {
        id: 1,
        title: 'Academic Year 2023-2024',
        coverImage: '/images/gallery/yearbook.jpg',
        imageCount: 156,
        description: 'A comprehensive collection of memories from the academic year.',
        category: 'Featured',
        gradient: 'from-primary/60 to-primary/20',
    },
    {
        id: 2,
        title: 'Sports Championship 2024',
        coverImage: '/images/gallery/sports.jpg',
        imageCount: 89,
        description: 'Celebrating our athletes and their achievements.',
        category: 'Sports',
        gradient: 'from-chart-2/60 to-chart-2/20',
    },
    {
        id: 3,
        title: 'Arts & Culture Showcase',
        coverImage: '/images/gallery/arts.jpg',
        imageCount: 124,
        description: 'Student performances and artistic expressions.',
        category: 'Arts',
        gradient: 'from-chart-5/60 to-chart-5/20',
    },
    {
        id: 4,
        title: 'Campus Life',
        coverImage: '/images/gallery/campus.jpg',
        imageCount: 98,
        description: 'Daily life and activities around our beautiful campus.',
        category: 'Campus',
        gradient: 'from-chart-3/60 to-chart-3/20',
    },
];

export default function FeaturedAlbums() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12">
                    <Heading title="Featured Albums" />
                    <p className="text-muted-foreground">
                        Curated collections of our most memorable moments
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {featuredAlbums.map((album) => (
                        <Card
                            key={album.id}
                            className="group cursor-pointer overflow-hidden border-none shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <div className={`absolute inset-0 bg-linear-to-br ${album.gradient}`} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Camera className="size-12 text-white/60" />
                                </div>
                                <div className="absolute top-3 right-3">
                                    <Badge className="bg-black/50 text-white backdrop-blur-sm">
                                        {album.imageCount} photos
                                    </Badge>
                                </div>
                                <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/70 to-transparent p-4">
                                    <h3 className="font-semibold text-white">
                                        {album.title}
                                    </h3>
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {album.description}
                                </p>
                                <div className="mt-3 flex items-center justify-between">
                                    <Badge variant="secondary" className="text-xs">
                                        {album.category}
                                    </Badge>
                                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                                        View Album →
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
