import { Head } from '@inertiajs/react';
import { Calendar, Users, Award, Target } from 'lucide-react';
import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import logo from '../../images/logo.png';

const milestones = [
    {
        year: 'Our founders',
        title: 'Mr Gerhard Burger',
        description:
            'Charlotte IHAS was established with a vision to provide quality education to the community.',
        icon: Calendar,
    },
    {
        year: 'Our background',
        title: 'Expansion Phase',
        description:
            'Added new facilities and expanded academic programs to serve more students.',
        icon: Users,
    },
    {
        year: 'Our parteners',
        title: 'Technology Integration',
        description:
            'Implemented modern ICT infrastructure and digital learning platforms.',
        icon: Target,
    },
    {
        year: 'Our leaders',
        title: 'Excellence Recognition',
        description:
            'Received multiple awards for academic excellence and community impact.',
        icon: Award,
    },
];

const values = [
    {
        title: 'Excellence',
        description:
            'We strive for the highest standards in teaching, learning, and personal development.',
    },
    {
        title: 'Integrity',
        description:
            'We foster honesty, responsibility, and ethical behavior in all aspects of school life.',
    },
    {
        title: 'Community',
        description:
            'We build strong relationships and create a supportive, inclusive environment.',
    },
    {
        title: 'Innovation',
        description:
            'We embrace new ideas and approaches to prepare students for the future.',
    },
];

export default function AboutUs() {
    return (
        <>
            <Head title="About Us" />

            <div className="scroll-smooth">
                {/** Our Story Section */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none">
                            <CardHeader className="pb-8 text-center">
                                <Heading title="Our Story" />
                                <p className="mx-auto max-w-2xl text-muted-foreground">
                                    A journey of growth, excellence, and
                                    community impact
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                                    {milestones.map((milestone, index) => (
                                        <Card
                                            key={index}
                                            className="border-2 border-primary/30 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <CardHeader>
                                                <img
                                                    src={logo}
                                                    alt="logo"
                                                    className="mx-auto max-h-48 max-w-48"
                                                />
                                                <div className="mb-2 text-2xl font-bold text-primary">
                                                    {milestone.year}
                                                </div>
                                                <h3 className="text-lg font-semibold">
                                                    {milestone.title}
                                                </h3>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm leading-relaxed text-muted-foreground">
                                                    {milestone.description}
                                                </p>
                                            </CardContent>

                                            <CardFooter className="flex justify-center">
                                                <Button variant="secondary">
                                                    Click to read more
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/** Mission & Vision */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <Card className="border-none shadow-sm">
                                <CardHeader>
                                    <Badge className="w-fit">Mission</Badge>
                                    <h3 className="text-2xl font-bold">
                                        Our Mission
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="leading-relaxed text-muted-foreground">
                                        To provide a transformative educational
                                        experience that empowers students to
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-sm">
                                <CardHeader>
                                    <Badge className="w-fit">Vision</Badge>
                                    <h3 className="text-2xl font-bold">
                                        Our Vision
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="leading-relaxed text-muted-foreground">
                                        To be a leading educational institution
                                        challenges of a rapidly changing world.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/** Our Values Section */}
                <section className="bg-muted/20 py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none">
                            <CardHeader className="pb-8 text-center">
                                <Heading title="Our Core Values" />
                                <p className="mx-auto max-w-2xl text-muted-foreground">
                                    The principles that guide everything we do
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                                    {values.map((value, index) => (
                                        <Card
                                            key={index}
                                            className="group text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <CardHeader>
                                                <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
                                                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                                                    {value.title}
                                                </h3>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm leading-relaxed text-muted-foreground">
                                                    {value.description}
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
