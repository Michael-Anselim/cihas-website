import { Building, Mail, Phone } from 'lucide-react';
import Heading from '@/components/heading';
import TextLink from '@/components/text-link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

//department contacts

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
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <Card className="border-none">
                    <CardHeader className="pb-8 text-center">
                        <Heading title="Department Contacts" />
                        <p className="mx-auto max-w-2xl text-muted-foreground">
                            Reach out directly to the specific department you
                            need
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {departments.map((dept, index) => (
                                <Card
                                    key={index}
                                    className="group border-2 border-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <CardHeader>
                                        <div className="flex items-start gap-3">
                                            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                                                <Building className="size-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold transition-colors duration-300 group-hover:text-primary">
                                                    {dept.name}
                                                </h3>
                                                <p className="mt-1 text-sm text-muted-foreground">
                                                    {dept.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Mail className="size-4 text-muted-foreground" />
                                                <TextLink
                                                    href={`mailto:${dept.contact}`}
                                                    className="text-muted-foreground hover:text-primary"
                                                >
                                                    {dept.contact}
                                                </TextLink>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Phone className="size-4 text-muted-foreground" />
                                                <TextLink
                                                    href={`tel:${dept.phone}`}
                                                    className="text-muted-foreground hover:text-primary"
                                                >
                                                    {dept.phone}
                                                </TextLink>
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
    );
}
