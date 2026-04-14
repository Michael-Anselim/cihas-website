import { Calendar, Download, User } from 'lucide-react';
import Heading from '@/components/heading';
import TextLink from '@/components/text-link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import logo from '../../../images/logo.png';

const newsItems = [
    {
        id: 1,
        title: 'Annual Science Fair Winners Announced',
        excerpt:
            "Congratulations to all participants in this year's science fair. The projects showcased incredible creativity and scientific thinking.",
        date: '2024-04-10',
        author: 'Science Department',
        category: 'Academics',
    },
    {
        id: 2,
        title: 'New Library Resources Available',
        excerpt:
            'Our library has expanded its digital collection with new e-books and research databases accessible to all students.',
        date: '2024-04-08',
        author: 'Library Staff',
        category: 'Resources',
    },
    {
        id: 3,
        title: 'Sports Teams Regional Champions',
        excerpt:
            'Both our basketball and soccer teams brought home regional championships after an exciting season of competition.',
        date: '2024-04-05',
        author: 'Athletics Department',
        category: 'Sports',
    },
];

export default function NewsSummary() {
    return (
        <section className="relative bg-muted/20 py-16">
            <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent" />
            <div className="relative mx-auto max-w-6xl px-4">
                <Card className="border-none shadow-sm">
                    <CardHeader className="pb-8 text-center">
                        <Badge className="mx-auto mb-4 bg-accent text-accent-foreground">
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
                            {newsItems.map((news) => (
                                <Card
                                    key={news.id}
                                    className="group border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <CardHeader className="pb-4">
                                        <img src={logo} alt="CIHAS" />
                                        <div className="mb-3 flex items-center justify-between">
                                            <Badge
                                                variant="secondary"
                                                className="text-xs font-medium"
                                            >
                                                {news.category}
                                            </Badge>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Calendar className="size-4" />
                                                {new Date(
                                                    news.date,
                                                ).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                })}
                                            </div>
                                        </div>
                                        <h3 className="mb-2 text-xl leading-tight font-bold transition-colors duration-300 group-hover:text-primary">
                                            {news.title}
                                        </h3>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <p className="mb-6 leading-relaxed text-muted-foreground">
                                            {news.excerpt}
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
                            ))}
                            <div className="mt-12 text-center">
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
