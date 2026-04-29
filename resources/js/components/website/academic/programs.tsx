import { usePage } from '@inertiajs/react';
import { BookOpen } from 'lucide-react';
import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Program } from '@/types';

export default function AcademicPrograms() {
    const { programs } = usePage<{ programs: Program[] }>().props;

    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12 text-center">
                    <Heading title="Academic Programs" />
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Explore our comprehensive range of academic programs
                        designed to prepare students for success
                    </p>
                </div>
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
                                        <div className={`flex h-full w-full items-center justify-center ${index % 2 === 0 ? 'bg-linear-to-br from-primary/20 to-accent/20' : 'bg-linear-to-br from-chart-2/20 to-chart-4/20'}`}>
                                            <div className="text-center">
                                                <div className={`mx-auto mb-2 flex size-12 items-center justify-center rounded-full ${index % 2 === 0 ? 'bg-primary/30' : 'bg-chart-2/30'}`}>
                                                    <BookOpen className={`size-6 ${index % 2 === 0 ? 'text-primary' : 'text-chart-2'}`} />
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    No Image Available
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
                                            <Badge variant="outline" className="mb-3">
                                                {program.department?.name || 'General'}
                                            </Badge>
                                        </div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-muted-foreground">
                                        {program.description}
                                    </p>
                                </CardHeader>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center">
                            <p className="text-muted-foreground">
                                No programs available at the moment.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
