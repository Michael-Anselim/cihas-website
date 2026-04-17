import Heading from '@/components/heading';
import TextLink from '@/components/text-link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

// contact info

const contactInfo = [
    {
        icon: Phone,
        title: 'Phone',
        details: '+255 769 957 583',
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
        details: 'Sanya juu ,kilimanjaro, Tanzania',
        description: 'Near Charlotte Hospital',
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

export default function GetInTouch() {
    return (
        <section className="bg-primary/5 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <Card className="border-none bg-primary/10">
                    <CardHeader className="pb-8 text-center">
                        <Heading title="Get in Touch" />
                        <p className="mx-auto max-w-2xl text-muted-foreground">
                            Multiple ways to reach us for your convenience
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
    );
}
