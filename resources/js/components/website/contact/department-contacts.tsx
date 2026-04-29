import { Building, Mail, Phone } from 'lucide-react';
import Heading from '@/components/heading';
import TextLink from '@/components/text-link';

const iconColors = [
    'bg-primary text-primary-foreground',
    'bg-chart-2 text-white',
    'bg-chart-5 text-white',
    'bg-chart-3 text-foreground',
    'bg-secondary text-secondary-foreground',
];

const cardColors = [
    'border-primary/20 bg-primary/5',
    'border-chart-2/20 bg-chart-2/5',
    'border-chart-5/20 bg-chart-5/5',
    'border-chart-3/20 bg-chart-3/5',
    'border-secondary/20 bg-secondary/5',
];

const departments = [
    {
        name: 'Admissions Office',
        contact: 'admission@cihas.tz',
        phone: '+1 (234) 567-891',
        description: 'New student enrollment and applications',
    },
    {
        name: 'Academic Affairs',
        contact: 'academic@cihas.tz',
        phone: '+255 769 957 583',
        description: 'Curriculum, grades, and academic policies',
    },
    {
        name: 'Finance Office',
        contact: 'accounting@cihas.tz',
        phone: '+255 769 957 583',
        description: 'Tuition, fees, and financial aid',
    },
    {
        name: 'Athletics Department',
        contact: 'sport@cihas.tz',
        phone: '+255 769 957 583',
        description: 'Sports programs and athletic events',
    },
    {
        name: 'IT Support',
        contact: 'it@cihas.tz',
        phone: '+255 769 957 583',
        description: 'Technical support and technology services',
    },
];
export default function DepartmentContact() {
    return (
        <section className="bg-accent/20 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12 text-center">
                    <Heading title="Department Contacts" />
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Reach out directly to the specific department you need
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {departments.map((dept, index) => (
                        <div
                            key={index}
                            className={`group rounded-2xl border-2 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${cardColors[index % cardColors.length]}`}
                        >
                            <div className="mb-3 flex items-start gap-3">
                                <div className={`flex size-10 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${iconColors[index % iconColors.length]}`}>
                                    <Building className="size-5" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold">{dept.name}</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">{dept.description}</p>
                                </div>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <Mail className="size-4 text-muted-foreground" />
                                    <TextLink href={`mailto:${dept.contact}`} className="text-muted-foreground hover:text-primary">
                                        {dept.contact}
                                    </TextLink>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="size-4 text-muted-foreground" />
                                    <TextLink href={`tel:${dept.phone}`} className="text-muted-foreground hover:text-primary">
                                        {dept.phone}
                                    </TextLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
