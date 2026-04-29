import { Phone, Mail, MapPin } from 'lucide-react';
import Heading from '@/components/heading';
import TextLink from '@/components/text-link';

const contacts = [
    {
        icon: Phone,
        title: 'Phone',
        content: <TextLink href="tel:+255769957583" className="font-medium hover:underline">+255 769957583</TextLink>,
        iconColor: 'bg-primary text-primary-foreground',
        cardColor: 'bg-primary/5 border-primary/20',
    },
    {
        icon: Mail,
        title: 'Email',
        content: <TextLink href="mailto:admissions@cihas.tz" className="font-medium hover:underline">admissions@cihas.tz</TextLink>,
        iconColor: 'bg-chart-2 text-white',
        cardColor: 'bg-chart-2/5 border-chart-2/20',
    },
    {
        icon: MapPin,
        title: 'Office Hours',
        content: <p className="text-muted-foreground">Monday - Friday<br />8:00 AM - 4:00 PM</p>,
        iconColor: 'bg-chart-5 text-white',
        cardColor: 'bg-chart-5/5 border-chart-5/20',
    },
];

export default function AdmissionContact() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12 text-center">
                    <Heading title="Contact Admissions Office" />
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        We're here to help with your admission questions
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border-2 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${contact.cardColor}`}
                        >
                            <div className={`mx-auto mb-4 flex size-12 items-center justify-center rounded-full ${contact.iconColor}`}>
                                <contact.icon className="size-6" />
                            </div>
                            <h3 className="mb-3 font-semibold">{contact.title}</h3>
                            {contact.content}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
