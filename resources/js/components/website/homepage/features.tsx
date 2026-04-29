import { BookOpen, Users, Award, Calendar } from 'lucide-react';
import Heading from '@/components/heading';

const features = [
    {
        icon: BookOpen,
        title: 'Academic Excellence',
        description: 'Comprehensive curriculum designed to foster critical thinking and innovation in our students.',
        color: 'bg-primary/5 border-primary/30 hover:bg-primary/10',
        iconColor: 'bg-primary text-primary-foreground',
    },
    {
        icon: Users,
        title: 'Dedicated Faculty',
        description: 'Experienced educators committed to nurturing each student\'s potential and growth.',
        color: 'bg-chart-2/5 border-chart-2/30 hover:bg-chart-2/10',
        iconColor: 'bg-chart-2 text-white',
    },
    {
        icon: Award,
        title: 'Achievement Programs',
        description: 'Recognition programs that celebrate student success and encourage continuous improvement.',
        color: 'bg-chart-5/5 border-chart-5/30 hover:bg-chart-5/10',
        iconColor: 'bg-chart-5 text-white',
    },
    {
        icon: Calendar,
        title: 'Rich Activities',
        description: 'Diverse extracurricular activities that develop well-rounded individuals with various interests.',
        color: 'bg-chart-3/5 border-chart-3/30 hover:bg-chart-3/10',
        iconColor: 'bg-chart-3 text-foreground',
    },
];

export default function FeaturesSection() {
    return (
        <section className="bg-accent/20 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12 text-center">
                    <span className="mb-3 inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                        Our Features
                    </span>
                    <Heading title="What Makes Us Special" />
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Discover the key elements that make Charlotte IHAS an exceptional learning environment
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div key={index} className={`group rounded-2xl border-2 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${feature.color}`}>
                            <div className={`mx-auto mb-4 flex size-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${feature.iconColor}`}>
                                <feature.icon className="size-7" />
                            </div>
                            <h3 className="mb-3 text-lg font-semibold">{feature.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}