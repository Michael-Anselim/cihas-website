import { Head, usePage } from '@inertiajs/react';
import { BookOpen, Sun, Monitor, Microscope } from 'lucide-react';
import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Program } from '@/types';
import logo from '../../images/logo.png';

const facilities = [
    {
        name: 'Science Laboratories',
        description:
            'Modern, well-equipped labs for physics, chemistry, and biology experiments.',
    },
    {
        name: 'Library',
        description:
            'Extensive collection of books, journals, and digital resources for research and learning.',
    },
    {
        name: 'Computer Labs',
        description:
            'State-of-the-art technology infrastructure with high-speed internet and modern software.',
    },
    {
        name: 'Sports & entertainment',
        description:
            'A modern football stadium, basketball court, and a gym for fitness and recreational activities.',
    },
];

export default function Academic() {
    const { programs } = usePage<{ programs: Program[] }>().props;

    return (
        <>
            <Head title="Academic" />

            <div className="scroll-smooth">
                {/** Academic Departments */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none">
                            <CardHeader className="pb-8 text-center">
                                <Heading title="Academic Programs" />
                                <p className="mx-auto max-w-2xl text-muted-foreground">
                                    Explore our comprehensive range of academic
                                    programs designed to prepare students for
                                    success
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                    {programs.length > 0 ? (
                                        programs.map((program, index) => (
                                            <Card
                                                key={index}
                                                className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                            >
                                                <div className="relative aspect-video overflow-hidden bg-muted">
                                                    {program.image ? (
                                                        <img
                                                            src={program.image}
                                                            alt={program.name}
                                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                                                            <div className="text-center">
                                                                <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-primary/20">
                                                                    <BookOpen className="size-6 text-primary" />
                                                                </div>
                                                                <p className="text-sm text-muted-foreground">
                                                                    No Image
                                                                    Available
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <CardHeader>
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <h3 className="mb-2 text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                                                                {program.name}
                                                            </h3>
                                                            <Badge
                                                                variant="outline"
                                                                className="mb-3"
                                                            >
                                                                {program
                                                                    .department
                                                                    ?.name ||
                                                                    'General'}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                    <p className="mb-4 leading-relaxed text-muted-foreground">
                                                        {program.description}
                                                    </p>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="space-y-3">
                                                        <div className="flex flex-wrap gap-2">
                                                            <Badge
                                                                variant="secondary"
                                                                className="text-xs"
                                                            >
                                                                {program.type}
                                                            </Badge>
                                                            <Badge
                                                                variant="secondary"
                                                                className="text-xs"
                                                            >
                                                                {program.levels}
                                                            </Badge>
                                                            <Badge
                                                                variant="secondary"
                                                                className="text-xs"
                                                            >
                                                                {program.status}
                                                            </Badge>
                                                        </div>
                                                        {program.requirements && (
                                                            <div>
                                                                <h4 className="mb-2 text-sm font-semibold">
                                                                    Requirements:
                                                                </h4>
                                                                <p className="text-xs leading-relaxed text-muted-foreground">
                                                                    {
                                                                        program.requirements
                                                                    }
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))
                                    ) : (
                                        <div className="col-span-full py-8 text-center">
                                            <p className="text-muted-foreground">
                                                No programs available at the
                                                moment.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/** Academic Facilities */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none">
                            <CardHeader className="pb-8 text-center">
                                <Heading title="Academic Facilities" />
                                <p className="mx-auto max-w-2xl text-muted-foreground">
                                    State-of-the-art facilities supporting
                                    excellence in education
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                                    {facilities.map((facility, index) => (
                                        <Card
                                            key={index}
                                            className="group text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <CardHeader>
                                                <img
                                                    src={logo}
                                                    alt="academic facilities"
                                                    className="mx-auto max-h-48 max-w-48"
                                                />
                                                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                                                    {facility.name}
                                                </h3>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm leading-relaxed text-muted-foreground">
                                                    {facility.description}
                                                </p>
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
