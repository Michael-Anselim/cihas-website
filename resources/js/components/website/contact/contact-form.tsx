import Heading from '../../heading';
import { Card, CardContent, CardHeader } from '../../ui/card';

export default function ContactForm() {
    return (
        <section className="bg-muted/20 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <Heading title="Send Us a Message" />
                            <p className="text-muted-foreground">
                                Fill out the form below and we'll get back to
                                you soon.
                            </p>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                <p>form here</p>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
