import { Head } from '@inertiajs/react';
import {
    Calendar,
    Clock,
    MapPin,
    User,
    ArrowRight,
    Filter,
} from 'lucide-react';
import Heading from '@/components/heading';
import TextLink from '@/components/text-link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const newsArticles = [
    {
        id: 1,
        title: 'Charlotte IHAS Wins Regional Science Competition',
        excerpt:
            'Our students brought home first place in the annual regional science fair with their innovative renewable energy project.',
        date: '2024-04-15',
        author: 'Science Department',
        category: 'Achievements',
        image: '/images/news/science-fair.jpg',
        readTime: '3 min read',
    },
    {
        id: 2,
        title: 'New Library and Technology Center Opening',
        excerpt:
            'We are excited to announce the grand opening of our new state-of-the-art library and technology center next month.',
        date: '2024-04-12',
        author: 'Administration',
        category: 'Facilities',
        image: '/images/news/library.jpg',
        readTime: '4 min read',
    },
    {
        id: 3,
        title: 'Student Council Organizes Community Service Day',
        excerpt:
            'Over 200 students participated in our annual community service day, making a positive impact in the local area.',
        date: '2024-04-10',
        author: 'Student Council',
        category: 'Community',
        image: '/images/news/service.jpg',
        readTime: '2 min read',
    },
    {
        id: 4,
        title: 'Spring Sports Season Kicks Off with Victories',
        excerpt:
            'Our basketball and soccer teams started the spring season with impressive wins against rival schools.',
        date: '2024-04-08',
        author: 'Athletics Department',
        category: 'Sports',
        image: '/images/news/sports.jpg',
        readTime: '3 min read',
    },
    {
        id: 5,
        title: 'Annual Art Showcases Student Creativity',
        excerpt:
            'The annual student art exhibition featured over 150 pieces of artwork from students across all grade levels.',
        date: '2024-04-05',
        author: 'Arts Department',
        category: 'Arts',
        image: '/images/news/art-show.jpg',
        readTime: '5 min read',
    },
    {
        id: 6,
        title: 'Parent-Teacher Conference Schedule Released',
        excerpt:
            'Mark your calendars for the upcoming parent-teacher conferences scheduled for later this month.',
        date: '2024-04-03',
        author: 'Academic Office',
        category: 'Announcements',
        image: '/images/news/conference.jpg',
        readTime: '2 min read',
    },
];

const categories = [
    'All',
    'Admissions',
    'Academic',
    'Announcements',
    'Downloads',
    'Sports',
];

export default function NewsEvents() {
    return (
        <>
            <Head title="News & Events" />

            <div className="scroll-smooth">
                {/** Hero Section */}
                <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none shadow-sm">
                            <CardHeader className="pb-8 text-center">
                                <Badge className="mx-auto mb-4">
                                    Stay Connected
                                </Badge>
                                <Heading title="News & Events" />
                                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
                                    Keep up with the latest happenings at
                                    Charlotte IHAS. From student achievements to
                                    upcoming events, stay informed about our
                                    vibrant school community.
                                </p>
                            </CardHeader>
                        </Card>
                    </div>
                </section>

                {/** Latest News */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none">
                            <CardHeader className="pb-8">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <Heading title="Latest News" />
                                        <p className="mt-2 text-muted-foreground">
                                            Recent updates and announcements
                                            from our school community
                                        </p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="mt-4 sm:mt-0"
                                    >
                                        <Filter className="mr-2 size-4" />
                                        Filter
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {categories.map((category) => (
                                        <Badge
                                            key={category}
                                            variant={
                                                category === 'All'
                                                    ? 'default'
                                                    : 'secondary'
                                            }
                                            className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                                        >
                                            {category}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {newsArticles.map((article) => (
                                        <Card
                                            key={article.id}
                                            className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <div className="relative aspect-video overflow-hidden bg-muted">
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                                                <div className="absolute top-4 left-4">
                                                    <Badge className="bg-background/80 backdrop-blur-sm">
                                                        {article.category}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <CardHeader className="pb-3">
                                                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Calendar className="size-4" />
                                                    {new Date(
                                                        article.date,
                                                    ).toLocaleDateString(
                                                        'en-US',
                                                        {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric',
                                                        },
                                                    )}
                                                    <span>·</span>
                                                    <Clock className="size-4" />
                                                    {article.readTime}
                                                </div>
                                                <h3 className="text-lg leading-tight font-bold transition-colors duration-300 group-hover:text-primary">
                                                    {article.title}
                                                </h3>
                                            </CardHeader>
                                            <CardContent className="pt-0">
                                                <p className="mb-4 line-clamp-3 leading-relaxed text-muted-foreground">
                                                    {article.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <User className="size-4" />
                                                        {article.author}
                                                    </div>
                                                    <TextLink
                                                        href="#"
                                                        className="flex items-center gap-1 text-sm font-medium group-hover:text-primary"
                                                    >
                                                        Read more
                                                        <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
                                                    </TextLink>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                <div className="mt-8 text-center">
                                    <Button variant="outline" size="lg">
                                        Load More Articles
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </>
    );
}
