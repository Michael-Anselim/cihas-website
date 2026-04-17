import { Head } from '@inertiajs/react';
import {
    Database,
    Mail,
    FolderArchive,
    Users,
} from 'lucide-react';
import Heading from '@/components/heading';
import TextLink from '@/components/text-link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const resources = [
    {
        title: 'Student Portal',
        description: 'Access grades, schedules, and personal information.',
        icon: Users,
        link: '#',
    },
    {
        title: 'Staff Mail Services',
        description:
            'School-provided email accounts for all students and staff.',
        icon: Mail,
        link: '#',
    },
    {
        title: 'Online application portal',
        description: 'Free and discounted software for educational use.',
        icon: Database,
        link: '#',
    },
    {
        title: 'E-Document system',
        description: 'Submit and track technical support requests.',
        icon: FolderArchive,
        link: '#',
    },
];

export default function ICTServices() {
    return (
        <>
            <Head title="ICT Services" />

            <div className="scroll-smooth">
                {/** Online Resources */}
                <section className="bg-muted/20 py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none">
                            <CardHeader className="pb-8 text-center">
                                <Heading title="Online Resources" />
                                <p className="mx-auto max-w-2xl text-muted-foreground">
                                    Quick access to essential digital tools and
                                    platforms
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                                    {resources.map((resource, index) => (
                                        <Card
                                            key={index}
                                            className="group border-2 border-primary/10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <CardHeader>
                                                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                                                    <resource.icon className="size-6 text-primary" />
                                                </div>
                                                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                                                    {resource.title}
                                                </h3>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                                                    {resource.description}
                                                </p>
                                                <TextLink
                                                    href={resource.link}
                                                    className="text-sm font-medium"
                                                >
                                                    Access Sercice
                                                </TextLink>
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
