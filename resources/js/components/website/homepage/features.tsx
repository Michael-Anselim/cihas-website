import { BookOpen, Users, Award, Calendar } from 'lucide-react';
import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const features = [
    {
        icon: BookOpen,
        title: 'Academic Excellence',
        description: 'Comprehensive curriculum designed to foster critical thinking and innovation in our students.',
    },
    {
        icon: Users,
        title: 'Dedicated Faculty',
        description: 'Experienced educators committed to nurturing each student\'s potential and growth.',
    },
    {
        icon: Award,
        title: 'Achievement Programs',
        description: 'Recognition programs that celebrate student success and encourage continuous improvement.',
    },
    {
        icon: Calendar,
        title: 'Rich Activities',
        description: 'Diverse extracurricular activities that develop well-rounded individuals with various interests.',
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-6xl px-4">
                <Card className="border-none">
                    <CardHeader className="text-center">
                        <Badge className="mx-auto">Our Features</Badge>
                        <Heading title="What Makes Us Special" />
                        <p className="mx-auto max-w-2xl text-muted-foreground">
                            Discover the key elements that make Charlotte IHAS an exceptional learning environment
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {features.map((feature, index) => (
                                <Card key={index} className="group text-center border border-border/50 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
                                    <CardHeader className="pb-4">
                                        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                                            <feature.icon className="size-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                                        </div>
                                        <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">{feature.title}</h3>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">{feature.description}</p>
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