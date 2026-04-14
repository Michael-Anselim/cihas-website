import { Head } from '@inertiajs/react';
import { Camera, Calendar, Users, Heart, Share2, Filter } from 'lucide-react';
import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const galleryCategories = [
    'All',
    'Academic',
    'Sports',
    'Arts',
    'Events',
    'Campus',
    'Students',
    'Faculty',
];

const galleryImages = [
    {
        id: 1,
        title: 'Science Fair Winners',
        category: 'Academic',
        date: '2024-04-10',
        description: 'Students showcasing their innovative science projects.',
        likes: 45,
        views: 234,
    },
    {
        id: 2,
        title: 'Basketball Championship',
        category: 'Sports',
        date: '2024-04-08',
        description:
            'Our team celebrating their regional championship victory.',
        likes: 89,
        views: 567,
    },
    {
        id: 3,
        title: 'Spring Music Concert',
        category: 'Arts',
        date: '2024-04-05',
        description: 'Students performing in our annual spring concert.',
        likes: 67,
        views: 445,
    },
    {
        id: 4,
        title: 'Graduation Ceremony 2024',
        category: 'Events',
        date: '2024-03-28',
        description: 'Celebrating our graduating seniors.',
        likes: 156,
        views: 890,
    },
    {
        id: 5,
        title: 'New Library Opening',
        category: 'Campus',
        date: '2024-03-15',
        description:
            'Grand opening of our new state-of-the-art library facility.',
        likes: 78,
        views: 456,
    },
    {
        id: 6,
        title: 'Community Service Day',
        category: 'Students',
        date: '2024-03-10',
        description:
            'Students giving back to the community through service projects.',
        likes: 92,
        views: 623,
    },
    {
        id: 7,
        title: 'Teacher Appreciation Week',
        category: 'Faculty',
        date: '2024-03-05',
        description: 'Celebrating our dedicated teaching staff.',
        likes: 73,
        views: 412,
    },
    {
        id: 8,
        title: 'Art Exhibition',
        category: 'Arts',
        date: '2024-02-28',
        description: 'Student artwork displayed in our annual exhibition.',
        likes: 58,
        views: 389,
    },
    {
        id: 9,
        title: 'Soccer Tournament',
        category: 'Sports',
        date: '2024-02-20',
        description:
            'Intense competition in the inter-school soccer tournament.',
        likes: 81,
        views: 534,
    },
    {
        id: 10,
        title: 'Science Lab Renovation',
        category: 'Campus',
        date: '2024-02-15',
        description:
            'Newly renovated science laboratories with modern equipment.',
        likes: 64,
        views: 423,
    },
    {
        id: 11,
        title: 'Debate Competition',
        category: 'Academic',
        date: '2024-02-10',
        description: 'Students showcasing their public speaking skills.',
        likes: 71,
        views: 489,
    },
    {
        id: 12,
        title: 'Cultural Festival',
        category: 'Events',
        date: '2024-02-05',
        description:
            'Celebrating diversity through our annual cultural festival.',
        likes: 134,
        views: 756,
    },
];

const featuredAlbums = [
    {
        id: 1,
        title: 'Academic Year 2023-2024',
        coverImage: '/images/gallery/yearbook.jpg',
        imageCount: 156,
        description:
            'A comprehensive collection of memories from the academic year.',
        category: 'Featured',
    },
    {
        id: 2,
        title: 'Sports Championship 2024',
        coverImage: '/images/gallery/sports.jpg',
        imageCount: 89,
        description: 'Celebrating our athletes and their achievements.',
        category: 'Sports',
    },
    {
        id: 3,
        title: 'Arts & Culture Showcase',
        coverImage: '/images/gallery/arts.jpg',
        imageCount: 124,
        description: 'Student performances and artistic expressions.',
        category: 'Arts',
    },
    {
        id: 4,
        title: 'Campus Life',
        coverImage: '/images/gallery/campus.jpg',
        imageCount: 98,
        description: 'Daily life and activities around our beautiful campus.',
        category: 'Campus',
    },
];

export default function Gallery() {
    return (
        <>
            <Head title="Gallery" />

            <div className="scroll-smooth">
                {/** Featured Albums */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none">
                            <CardHeader className="pb-8">
                                <Heading title="Featured Albums" />
                                <p className="text-muted-foreground">
                                    Curated collections of our most memorable
                                    moments
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                                    {featuredAlbums.map((album) => (
                                        <Card
                                            key={album.id}
                                            className="group cursor-pointer overflow-hidden border-2 border-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <div className="relative aspect-square overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Camera className="size-12 text-white/50" />
                                                </div>
                                                <div className="absolute top-4 right-4">
                                                    <Badge className="bg-background/80 backdrop-blur-sm">
                                                        {album.imageCount}{' '}
                                                        photos
                                                    </Badge>
                                                </div>
                                                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-4">
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
                                                    <Badge
                                                        variant="secondary"
                                                        className="text-xs"
                                                    >
                                                        {album.category}
                                                    </Badge>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                    >
                                                        View Album
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </>
    );
}
