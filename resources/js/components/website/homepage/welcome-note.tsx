import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import logo from '../../../images/logo.png';

export default function WelcomeNote() {
    return (
        <section className="py-16">
            <Card className="mx-auto max-w-6xl border-none shadow-sm">
                <CardHeader className="pb-8 text-center">
                    <Badge className="mx-auto mb-4 text-sm font-medium">
                        Welcome message
                    </Badge>
                    <Heading title="Welcome to Charlotte IHAS" />
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                        Where excellence in education meets a nurturing
                        community environment
                    </p>
                </CardHeader>
                <CardContent className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div className="order-2 md:order-1">
                        <div className="space-y-4">
                            <p className="text-justify leading-relaxed text-muted-foreground">
                                At Charlotte IHAS, we believe in fostering
                                academic excellence while creating a warm,
                                inclusive environment where every student can
                                thrive. Our dedicated faculty and comprehensive
                                programs ensure that each child receives the
                                personalized attention they need to succeed.
                            </p>
                            <p className="text-justify leading-relaxed text-muted-foreground">
                                We invite you to explore our vibrant community
                                and discover how we can partner with you in your
                                child's educational journey. Together, we can
                                build a foundation for lifelong learning and
                                success.
                            </p>
                            <div className="pt-4">
                                <Badge variant="outline" className="text-sm">
                                    Derick Titus, Principal
                                </Badge>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 flex justify-center md:order-2">
                        <div className="relative">
                            <img
                                src={logo}
                                alt="Charlotte IHAS Logo"
                                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
