import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-linear from-primary/5 to-accent/5 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <Card className="border-none shadow-sm">
                    <CardHeader className="pb-8 text-center">
                        <Badge className="mx-auto mb-4">Get in Touch</Badge>
                        <Heading title="Contact Us" />
                        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
                            We're here to help! Whether you have questions about
                            admissions, need information about our programs, or
                            want to visit our campus, our team is ready to
                            assist you.
                        </p>
                    </CardHeader>
                </Card>
            </div>
        </section>
    );
}
