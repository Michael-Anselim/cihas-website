import { FieldGroup } from '@/components/ui/field';
import Heading from '../../heading';
import { Card, CardContent, CardHeader } from '../../ui/card';
import TextField from '@/components/text-field';
import { Form } from '@inertiajs/react';
import TextAreaField from '@/components/text-area-field';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

//basic details
const basicDetails = [
    {
        name: 'name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Enter your full name',
    },
    {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'Enter your email address',
    },
    {
        name: 'phone',
        label: 'Phone Number',
        type: 'tel',
        placeholder: 'Enter your phone number',
    },
    {
        name: 'subject',
        label: 'Message',
        type: 'textarea',
        placeholder: 'Enter your message',
    },
];
export default function ContactForm() {
    return (
        <section className="mx-auto max-w-6xl bg-muted/20 py-16">
            <div className="px-4">
                <div className="grid grid-cols-1">
                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <Heading title="Send Us a Message" />
                            <p className="text-muted-foreground">
                                Fill out the form below and we'll get back to
                                you soon.
                            </p>
                        </CardHeader>
                        <CardContent>
                            <Form className="space-y-6">
                                {/* Basic Details */}
                                <FieldGroup className="grid grid-cols-1 md:grid-cols-2">
                                    {basicDetails.map((field) => (
                                        <TextField
                                            key={field.name}
                                            name={field.name}
                                            label={field.label}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                        />
                                    ))}
                                </FieldGroup>

                                {/* Message field */}
                                <TextAreaField
                                    name="message"
                                    required
                                    label="Message"
                                />

                                {/** Submit button */}
                                <div className="flex justify-end">
                                    <Button asChild>
                                        <span>
                                            <Send className="mr-2" />
                                            Send Message
                                        </span>
                                    </Button>
                                </div>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
