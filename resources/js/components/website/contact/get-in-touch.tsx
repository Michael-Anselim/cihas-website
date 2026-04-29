import Heading from '@/components/heading';
import TextLink from '@/components/text-link';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

// contact info

const contactInfo = [
    {
        icon: Phone,
        title: 'Phone',
        details: '+255 769 957 583',
        description: 'Monday - Friday, 8:00 AM - 4:00 PM',
        link: 'tel:+1234567890',
        color: 'bg-primary/5 border-primary/30',
        iconColor: 'bg-primary text-primary-foreground',
    },
    {
        icon: Mail,
        title: 'Email',
        details: 'info@cihas.tz',
        description: 'General inquiries and information',
        link: 'mailto:info@cihas.tz',
        color: 'bg-chart-2/5 border-chart-2/30',
        iconColor: 'bg-chart-2 text-white',
    },
    {
        icon: MapPin,
        title: 'Address',
        details: 'Sanya juu, Kilimanjaro, Tanzania',
        description: 'Near Charlotte Hospital',
        link: '#',
        color: 'bg-chart-5/5 border-chart-5/30',
        iconColor: 'bg-chart-5 text-white',
    },
    {
        icon: Clock,
        title: 'Office Hours',
        details: 'Mon - Fri: 8:00 AM - 4:00 PM',
        description: 'Administrative offices',
        link: '#',
        color: 'bg-chart-3/5 border-chart-3/30',
        iconColor: 'bg-chart-3 text-foreground',
    },
];

export default function GetInTouch() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12 text-center">
                    <Heading title="Get in Touch" />
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Multiple ways to reach us for your convenience
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className={`group rounded-2xl border-2 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${info.color}`}
                        >
                            <div className={`mx-auto mb-4 flex size-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${info.iconColor}`}>
                                <info.icon className="size-6" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold">{info.title}</h3>
                            <TextLink
                                href={info.link}
                                className="mb-1 block font-medium text-foreground hover:text-primary"
                            >
                                {info.details}
                            </TextLink>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
