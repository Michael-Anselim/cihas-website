import { Head, usePage } from '@inertiajs/react';
import {
    Calendar,
    Clock,
    User,
    ArrowRight,
    Filter,
    Download,
} from 'lucide-react';
import Heading from '@/components/heading';
import TextLink from '@/components/text-link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Post } from '@/types';

const categories = [
    'All',
    'admissions',
    'academic',
    'announcements',
    'downloads',
    'sports',
];

export default function NewsEvents() {
    const { posts } = usePage<{ posts: Post[] }>().props;
    console.log(posts);

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
                                    {posts.length > 0 ? (
                                        posts.map((post) => (
                                            <>
                                                <Card
                                                    key={post.id}
                                                    className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                                >
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="object-fit aspect-square"
                                                    />
                                                    <CardHeader className="pb-3">
                                                        <div className="flex items-center justify-between">
                                                            <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                                                                <Calendar className="size-4" />
                                                                {new Date(
                                                                    post.date,
                                                                ).toLocaleDateString(
                                                                    'en-US',
                                                                    {
                                                                        month: 'short',
                                                                        day: 'numeric',
                                                                        year: 'numeric',
                                                                    },
                                                                )}
                                                            </div>
                                                            <Badge className="bg-background/80 backdrop-blur-sm">
                                                                {post.category}
                                                            </Badge>
                                                        </div>
                                                        <h3 className="text-lg leading-tight font-bold transition-colors duration-300 group-hover:text-primary">
                                                            {post.title}
                                                        </h3>
                                                    </CardHeader>
                                                    <CardContent className="pt-0">
                                                        <p className="mb-4 line-clamp-3 leading-relaxed text-muted-foreground">
                                                            {post.description}
                                                        </p>
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                                {post.attachment ? (
                                                                    <TextLink
                                                                        download
                                                                        href={
                                                                            post.attachment
                                                                        }
                                                                        className="flex items-center gap-4"
                                                                    >
                                                                        <Download className="size-4" />
                                                                        Download
                                                                    </TextLink>
                                                                ) : (
                                                                    <span className="flex items-center gap-4">
                                                                        <User className="size-4" />
                                                                        {post
                                                                            .department
                                                                            ?.name ||
                                                                            'Admin'}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </>
                                        ))
                                    ) : (
                                        <div className="col-span-full py-8 text-center">
                                            <p className="text-muted-foreground">
                                                No news articles available at
                                                the moment.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </>
    );
}
