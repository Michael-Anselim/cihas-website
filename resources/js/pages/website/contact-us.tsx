import { Head } from '@inertiajs/react';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    User,
    Building,
} from 'lucide-react';
import Heading from '@/components/heading';
import TextLink from '@/components/text-link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const contactInfo = [
    {
        icon: Phone,
        title: 'Phone',
        details: '+1 (234) 567-890',
        description: 'Monday - Friday, 8:00 AM - 4:00 PM',
        link: 'tel:+1234567890',
    },
    {
        icon: Mail,
        title: 'Email',
        details: 'info@cihas.tz',
        description: 'General inquiries and information',
        link: 'mailto:info@cihas.tz',
    },
    {
        icon: MapPin,
        title: 'Address',
        details: '123 Education Street, Charlotte, NC 28202',
        description: 'Main campus location',
        link: '#',
    },
    {
        icon: Clock,
        title: 'Office Hours',
        details: 'Monday - Friday: 8:00 AM - 4:00 PM',
        description: 'Administrative offices',
        link: '#',
    },
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
        phone: '+1 (234) 567-892',
        description: 'Curriculum, grades, and academic policies',
    },
    {
        name: 'Finance Office',
        contact: 'accounting@cihas.tz',
        phone: '+1 (234) 567-894',
        description: 'Tuition, fees, and financial aid',
    },
    {
        name: 'Athletics Department',
        contact: 'sport@cihas.tz',
        phone: '+1 (234) 567-895',
        description: 'Sports programs and athletic events',
    },
    {
        name: 'IT Support',
        contact: 'it@cihas.tz',
        phone: '+1 (234) 567-896',
        description: 'Technical support and technology services',
    },
];

export default function ContactUs() {
    return (
        <>
            <Head title="Contact Us" />

            <div className="scroll-smooth">
                {/** Hero Section */}
                <section className="bg-gradient-to-linear from-primary/5 to-accent/5 py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none shadow-sm">
                            <CardHeader className="pb-8 text-center">
                                <Badge className="mx-auto mb-4">
                                    Get in Touch
                                </Badge>
                                <Heading title="Contact Us" />
                                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
                                    We're here to help! Whether you have
                                    questions about admissions, need information
                                    about our programs, or want to visit our
                                    campus, our team is ready to assist you.
                                </p>
                            </CardHeader>
                        </Card>
                    </div>
                </section>

                {/** Contact Information */}
                <section className="bg-primary/5 py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none bg-primary/10">
                            <CardHeader className="pb-8 text-center">
                                <Heading title="Get in Touch" />
                                <p className="mx-auto max-w-2xl text-muted-foreground">
                                    Multiple ways to reach us for your
                                    convenience
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                                    {contactInfo.map((info, index) => (
                                        <Card
                                            key={index}
                                            className="group border-2 border-primary/10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <CardHeader>
                                                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                                                    <info.icon className="size-6 text-primary" />
                                                </div>
                                                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                                                    {info.title}
                                                </h3>
                                            </CardHeader>
                                            <CardContent>
                                                <TextLink
                                                    href={info.link}
                                                    className="mb-2 block font-medium text-foreground hover:text-primary"
                                                >
                                                    {info.details}
                                                </TextLink>
                                                <p className="text-sm text-muted-foreground">
                                                    {info.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/** Contact Form & Map */}
                <section className="bg-muted/20 py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            {/** Contact Form */}
                            <Card className="border-none shadow-sm">
                                <CardHeader>
                                    <Heading title="Send Us a Message" />
                                    <p className="text-muted-foreground">
                                        Fill out the form below and we'll get
                                        back to you soon.
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium">
                                                    <User className="mr-2 inline size-4" />
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium">
                                                <Mail className="mr-2 inline size-4" />
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                                                placeholder="john.doe@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium">
                                                <MessageSquare className="mr-2 inline size-4" />
                                                Subject
                                            </label>
                                            <select className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-primary focus:outline-none">
                                                <option value="">
                                                    Select a topic
                                                </option>
                                                <option value="admissions">
                                                    Admissions
                                                </option>
                                                <option value="academics">
                                                    Academics
                                                </option>
                                                <option value="athletics">
                                                    Athletics
                                                </option>
                                                <option value="general">
                                                    General Inquiry
                                                </option>
                                                <option value="support">
                                                    Technical Support
                                                </option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium">
                                                Message
                                            </label>
                                            <textarea
                                                rows={5}
                                                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                                                placeholder="Tell us how we can help you..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full"
                                        >
                                            <Send className="mr-2 size-4" />
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>

                            {/** Map & Location */}
                            <Card className="border-none shadow-sm">
                                <CardHeader>
                                    <Heading title="Visit Our Campus" />
                                    <p className="text-muted-foreground">
                                        Located in the heart of Charlotte,
                                        easily accessible from major highways.
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        {/** Map Placeholder */}
                                        <div className="flex aspect-video items-center justify-center rounded-lg border border-border bg-muted">
                                            <div className="text-center">
                                                <MapPin className="mx-auto mb-4 size-12 text-muted-foreground" />
                                                <p className="text-muted-foreground">
                                                    Interactive Map
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    123 Education Street,
                                                    Charlotte, NC 28202
                                                </p>
                                            </div>
                                        </div>

                                        {/** Directions */}
                                        <div className="space-y-4">
                                            <h4 className="font-semibold">
                                                Getting Here
                                            </h4>
                                            <div className="space-y-3 text-sm text-muted-foreground">
                                                <div className="flex items-start gap-3">
                                                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                                                    <div>
                                                        <strong>By Car:</strong>{' '}
                                                        Easily accessible from
                                                        I-77 and I-85. Free
                                                        parking available on
                                                        campus.
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                                                    <div>
                                                        <strong>
                                                            By Public Transit:
                                                        </strong>{' '}
                                                        CATS bus route 12 stops
                                                        directly in front of the
                                                        school.
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                                                    <div>
                                                        <strong>
                                                            Main Entrance:
                                                        </strong>{' '}
                                                        Located on Education
                                                        Street. Please check in
                                                        at the front desk upon
                                                        arrival.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/** Departments */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <Card className="border-none">
                            <CardHeader className="pb-8 text-center">
                                <Heading title="Department Contacts" />
                                <p className="mx-auto max-w-2xl text-muted-foreground">
                                    Reach out directly to the specific
                                    department you need
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
            </div>
        </>
    );
}
