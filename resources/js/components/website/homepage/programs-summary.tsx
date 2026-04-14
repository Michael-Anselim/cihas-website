import {
    GraduationCap,
    Palette,
    Music,
    Dumbbell,
    ArrowRight,
} from 'lucide-react';
import Heading from '@/components/heading';
import TextLink from '@/components/text-link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import logo from '../../../images/logo.png';

const programs = [
    {
        icon: GraduationCap,
        title: 'Nursing and Midwifery',
        description:
            'Advanced placement courses, honors programs, and specialized academic tracks to challenge and inspire students.',
        department: 'Nursing and Midwifery',
        color: 'bg-blue-500',
    },
    {
        icon: Palette,
        title: 'Arts & Creative',
        description:
            'Comprehensive arts education including visual arts, theater, music, and digital media programs.',
        department: 'Arts & Creative',
        color: 'bg-purple-500',
    },
    {
        icon: Dumbbell,
        title: 'Athletics & Sports',
        description:
            'Competitive sports programs and physical education focused on teamwork, health, and sportsmanship.',
        department: 'Athletics & Sports',
        color: 'bg-green-500',
    },
    {
        icon: Music,
        title: 'Music & Performance',
        description:
            'Award-winning music programs with opportunities for vocal and instrumental performance at all levels.',
        department: 'Music & Performance',
        color: 'bg-orange-500',
    },
];

export default function ProgramsSummary() {
    return (
        <section className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="relative mx-auto max-w-6xl px-4">
                <Card className="border-none bg-background/80 shadow-sm backdrop-blur-sm">
                    <CardHeader className="pb-8 text-center">
                        <Badge className="mx-auto mb-4 px-4 py-2">
                            Our Programs
                        </Badge>
                        <Heading title="Discover Your Passion" />
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                            Explore our diverse range of programs designed to
                            help every student find and develop their unique
                            talents
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {programs.map((program, index) => (
                                <Card
                                    key={index}
                                    className="group overflow-hidden border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <CardHeader className="pb-4">
                                        <Badge variant="secondary">
                                            {program.department}
                                        </Badge>
                                        <div className="flex flex-col items-center gap-4">
                                            <img
                                                src={logo}
                                                alt={program.title}
                                                aria-label={`Program name: ${program.title}`}
                                                aria-hidden="true"
                                                className="max-h-48"
                                            />
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                                                    {program.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="text-justify leading-relaxed text-muted-foreground">
                                            {program.description}
                                        </p>
                                    </CardHeader>
                                    <CardContent className="flex justify-end">
                                        <Button variant="link" asChild>
                                            <TextLink
                                                href="#"
                                                className="text-sm font-medium"
                                            >
                                                Read more →
                                            </TextLink>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-16 text-center">
                            <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 p-8">
                                <h3 className="mb-3 text-xl font-bold text-foreground">
                                    Ready to Get Started?
                                </h3>
                                <p className="mx-auto mb-6 max-w-md text-muted-foreground">
                                    Contact our admissions office to learn more
                                    about enrollment and program opportunities.
                                </p>
                                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                                    <TextLink
                                        href="#"
                                        className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                                    >
                                        Apply
                                    </TextLink>
                                    <TextLink
                                        href="#"
                                        className="rounded-lg border border-border px-6 py-3 font-semibold transition-colors hover:bg-accent"
                                    >
                                        View all Programs
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
