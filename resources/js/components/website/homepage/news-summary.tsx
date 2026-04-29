import { Calendar, Download } from 'lucide-react';
import Heading from '@/components/heading';
import TextLink from '@/components/text-link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Post } from '@/types';
import logo from '../../../images/logo.png';

interface NewsSummaryProps {
    posts: Post[];
}

export default function NewsSummary({ posts }: NewsSummaryProps) {
    return (
        <section className="relative py-16">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-secondary/50" />
            <div className="relative mx-auto max-w-6xl px-4">
                <Card className="border-none shadow-sm">
                    <CardHeader className="pb-8 text-center">
                        <Badge className="mx-auto mb-4 bg-primary text-primary-foreground">
                            Latest News
                        </Badge>
                        <Heading title="School Updates & Announcements" />
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                            Stay informed about the latest happenings at
                            Charlotte IHAS
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {posts.length > 0 ? (
                                posts.map((post) => (
                                    <Card
                                        key={post.id}
                                        className="group border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        <CardHeader className="pb-4">
                                            <img src={logo} alt="CIHAS" />
                                            <div className="mb-3 flex items-center justify-between">
                                                <Badge
                                                    variant="secondary"
                                                    className="text-xs font-medium"
                                                >
                                                    {post.category}
                                                </Badge>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
                                            </div>
                                            <h3 className="mb-2 text-xl leading-tight font-bold transition-colors duration-300 group-hover:text-primary">
                                                {post.title}
                                            </h3>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <p className="mb-6 leading-relaxed text-muted-foreground">
                                                {post.description.substring(
                                                    0,
                                                    150,
                                                )}
                                                ...
                                            </p>
                                            <div className="flex items-center justify-between border-t border-border/50 pt-2">
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Download className="size-4" />
                                                    Download
                                                </div>
                                                <TextLink
                                                    href="#"
                                                    className="text-sm font-medium transition-colors hover:text-primary"
                                                >
                                                    Read more →
                                                </TextLink>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                            ) : (
                                <div className="col-span-full py-8 text-center">
                                    <p className="text-muted-foreground">
                                        No news items available at the moment.
                                    </p>
                                </div>
                            )}
                            <div className="col-span-full mt-12 text-center">
                                <div className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90">
                                    <TextLink
                                        href="#"
                                        className="font-semibold text-primary-foreground"
                                    >
                                        View all news
                                    </TextLink>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
