import { Database, Mail, FolderArchive, Users } from 'lucide-react';
import Heading from '@/components/heading';
import TextLink from '@/components/text-link';

const resources = [
    {
        title: 'Student Portal',
        description: 'Access grades, schedules, and personal information.',
        icon: Users,
        link: '#',
        color: 'bg-primary/5 border-primary/30',
        iconColor: 'bg-primary text-primary-foreground',
    },
    {
        title: 'Staff Mail Services',
        description:
            'School-provided email accounts for all students and staff.',
        icon: Mail,
        link: '#',
        color: 'bg-chart-2/5 border-chart-2/30',
        iconColor: 'bg-chart-2 text-white',
    },
    {
        title: 'Online Application Portal',
        description: 'Free and discounted software for educational use.',
        icon: Database,
        link: '#',
        color: 'bg-chart-5/5 border-chart-5/30',
        iconColor: 'bg-chart-5 text-white',
    },
    {
        title: 'E-Document System',
        description: 'Submit and track technical support requests.',
        icon: FolderArchive,
        link: '#',
        color: 'bg-chart-3/5 border-chart-3/30',
        iconColor: 'bg-chart-3 text-foreground',
    },
];

export default function OnlineResources() {
    return (
        <section className="bg-accent/20 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12 text-center">
                    <Heading title="Online Resources" />
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Quick access to essential digital tools and platforms
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {resources.map((resource, index) => (
                        <div
                            key={index}
                            className={`group rounded-2xl border-2 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${resource.color}`}
                        >
                            <div className={`mx-auto mb-4 flex size-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${resource.iconColor}`}>
                                <resource.icon className="size-7" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold">{resource.title}</h3>
                            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                                {resource.description}
                            </p>
                            <TextLink
                                href={resource.link}
                                className="text-sm font-medium text-primary hover:underline"
                            >
                                Access Service →
                            </TextLink>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
