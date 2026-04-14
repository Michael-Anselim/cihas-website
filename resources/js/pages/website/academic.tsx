import { Head } from '@inertiajs/react';
import { BookOpen, Award, Target, Star } from 'lucide-react';
import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const departments = [
    {
        name: 'Mathematics & Sciences',
        head: 'Dr. Sarah Johnson',
        programs: [
            'Mathematics',
            'Physics',
            'Chemistry',
            'Biology',
            'Computer Science',
        ],
        description:
            'Building strong analytical and problem-solving skills through rigorous STEM education.',
    },
    {
        name: 'Languages & Literature',
        head: 'Ms. Patricia Williams',
        programs: [
            'English',
            'French',
            'Spanish',
            'Creative Writing',
            'Journalism',
        ],
        description:
            'Developing communication skills and cultural appreciation through language arts.',
    },
    {
        name: 'Social Sciences',
        head: 'Mr. Robert Davis',
        programs: ['History', 'Geography', 'Economics', 'Civics', 'Psychology'],
        description:
            'Understanding human society and developing critical thinking about global issues.',
    },
    {
        name: 'Creative Arts',
        head: 'Mrs. Emily Brown',
        programs: ['Visual Arts', 'Music', 'Drama', 'Dance', 'Digital Media'],
        description:
            'Nurturing creativity and self-expression through various artistic mediums.',
    },
];

const facilities = [
    {
        name: 'Science Laboratories',
        description:
            'Modern, well-equipped labs for physics, chemistry, and biology experiments.',
        icon: Target,
    },
    {
        name: 'Digital Library',
        description:
            'Extensive collection of books, journals, and digital resources for research and learning.',
        icon: BookOpen,
    },
    {
        name: 'Computer Labs',
        description:
            'State-of-the-art technology infrastructure with high-speed internet and modern software.',
        icon: Award,
    },
    {
        name: 'Art Studios',
        description:
            'Creative spaces for visual arts, music practice rooms, and performance areas.',
        icon: Star,
    },
];

export default function Academic() {
    return (
        <>
            <Head title="Academic" />

            <div className="scroll-smooth">
                {/** Academic Departments */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none">
                            <CardHeader className="pb-8 text-center">
                                <Heading title="Academic Departments" />
                                <p className="mx-auto max-w-2xl text-muted-foreground">
                                    Expert faculty guiding students through
                                    comprehensive subject areas
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                    {departments.map((dept, index) => (
                                        <Card
                                            key={index}
                                            className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <CardHeader>
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <h3 className="mb-2 text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                                                            {dept.name}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <p className="mb-4 leading-relaxed text-muted-foreground">
                                                    {dept.description}
                                                </p>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-2">
                                                    <h4 className="text-sm font-semibold">
                                                        Programs:
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {dept.programs.map(
                                                            (
                                                                program,
                                                                progIndex,
                                                            ) => (
                                                                <Badge
                                                                    key={
                                                                        progIndex
                                                                    }
                                                                    variant="secondary"
                                                                    className="text-xs"
                                                                >
                                                                    {program}
                                                                </Badge>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
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
                                                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                                                    <facility.icon className="size-6 text-primary" />
                                                </div>
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
