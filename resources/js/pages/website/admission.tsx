import { Head } from '@inertiajs/react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Heading from '@/components/heading';
import TextLink from '@/components/text-link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const admissionSteps = [
    {
        step: '1',
        title: 'Application Form',
        description:
            'Complete and submit the online application form with required documents.',
    },
    {
        step: '2',
        title: 'Entrance Assessment',
        description:
            'Schedule and complete the entrance assessment or interview.',
    },
    {
        step: '3',
        title: 'Review Process',
        description:
            'Our admissions committee reviews your application and assessment results.',
    },
    {
        step: '4',
        title: 'Enrollment',
        description:
            'Receive admission decision and complete enrollment procedures.',
    },
];

const requirements = [
    'Completed application form',
    'CSE index number',
    'Valid email address',
    'Valid phone number',
    'Guardian information',
    'Certificate of completion for inservice',
    'Transcript for inservice',
];

export default function Admission() {
    return (
        <>
            <Head title="Admission" />

            <div className="scroll-smooth">
                {/** Admission Process */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none">
                            <CardHeader className="pb-8 text-center">
                                <Heading title="Admission Process" />
                                <p className="mx-auto max-w-2xl text-muted-foreground">
                                    Simple steps to join our institute in
                                    provided course
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                                    {admissionSteps.map((step, index) => (
                                        <Card
                                            key={index}
                                            className="group text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <CardHeader>
                                                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                                                    {step.step}
                                                </div>
                                                <h3 className="text-lg font-semibold">
                                                    {step.title}
                                                </h3>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm leading-relaxed text-muted-foreground">
                                                    {step.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/** Requirements */}
                <section className="bg-muted/20 py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none">
                            <CardHeader className="pb-8 text-center">
                                <Heading title="Admission Requirements" />
                                <p className="mx-auto max-w-2xl text-muted-foreground">
                                    Documents and information needed for your
                                    application
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                    <Card className="border-none shadow-sm">
                                        <CardHeader>
                                            <h3 className="mb-4 text-xl font-bold">
                                                Required Documents
                                            </h3>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3">
                                                {requirements.map(
                                                    (requirement, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <div className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                                                            <span className="text-muted-foreground">
                                                                {requirement}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-none shadow-sm">
                                        <CardHeader>
                                            <h3 className="mb-4 text-xl font-bold">
                                                Important Dates
                                            </h3>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between border-b pb-2">
                                                    <span className="font-medium">
                                                        Academic year
                                                    </span>
                                                    <span className="text-muted-foreground">
                                                        2025/2025
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between border-b pb-2">
                                                    <span className="font-medium">
                                                        Application Starts at
                                                    </span>
                                                    <span className="text-muted-foreground">
                                                        March 31
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between border-b pb-2">
                                                    <span className="font-medium">
                                                        Ends at
                                                    </span>
                                                    <span className="text-muted-foreground">
                                                        April 1-30
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium">
                                                        Admission Window
                                                    </span>
                                                    <span className="text-muted-foreground">
                                                        May 15
                                                    </span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/** Contact Information */}
                <section className="bg-muted/20 py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none">
                            <CardHeader className="pb-8 text-center">
                                <Heading title="Contact Admissions Office" />
                                <p className="mx-auto max-w-2xl text-muted-foreground">
                                    We're here to help with your admission
                                    questions
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                    <Card className="border-none text-center shadow-sm">
                                        <CardHeader>
                                            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                                                <Phone className="size-6 text-primary" />
                                            </div>
                                            <h3 className="font-semibold">
                                                Phone
                                            </h3>
                                        </CardHeader>
                                        <CardContent>
                                            <TextLink
                                                href="tel:+255769957583"
                                                className="text-muted-foreground hover:text-primary"
                                            >
                                                +255 769957583
                                            </TextLink>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-none text-center shadow-sm">
                                        <CardHeader>
                                            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                                                <Mail className="size-6 text-primary" />
                                            </div>
                                            <h3 className="font-semibold">
                                                Email
                                            </h3>
                                        </CardHeader>
                                        <CardContent>
                                            <TextLink
                                                href="mailto:admissions@cihas.tz"
                                                className="text-muted-foreground hover:text-primary"
                                            >
                                                admissions@cihas.tz
                                            </TextLink>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-none text-center shadow-sm">
                                        <CardHeader>
                                            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                                                <MapPin className="size-6 text-primary" />
                                            </div>
                                            <h3 className="font-semibold">
                                                Office Hours
                                            </h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">
                                                Monday - Friday
                                                <br />
                                                8:00 AM - 4:00 PM
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </>
    );
}
