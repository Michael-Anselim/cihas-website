import { Calendar, Users, Award, Target } from 'lucide-react';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const milestones = [
    {
        year: 'Our founders',
        title: 'Mr Gerhard Burger',
        description:
            'Charlotte IHAS was established with a vision to provide quality education to the community.',
        icon: Calendar,
        cardColor: 'border-primary/40 bg-primary/5',
        iconColor: 'bg-primary text-primary-foreground',
        labelColor: 'text-primary',
    },
    {
        year: 'Our background',
        title: 'Expansion Phase',
        description:
            'Added new facilities and expanded academic programs to serve more students.',
        icon: Users,
        cardColor: 'border-chart-2/40 bg-chart-2/5',
        iconColor: 'bg-chart-2 text-white',
        labelColor: 'text-chart-2',
    },
    {
        year: 'Our leaders',
        title: 'Excellence Recognition',
        description:
            'Received multiple awards for academic excellence and community impact.',
        icon: Award,
        cardColor: 'border-chart-3/40 bg-chart-3/5',
        iconColor: 'bg-chart-3 text-foreground',
        labelColor: 'text-chart-3',
    },
];

export default function OurStory() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12 text-center">
                    <Heading title="Our Story" />
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        A journey of growth, excellence, and community impact
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className={`group rounded-2xl border-2 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${milestone.cardColor}`}
                        >
                            <div
                                className={`mx-auto mb-4 flex size-14 items-center justify-center rounded-full ${milestone.iconColor}`}
                            >
                                <milestone.icon className="size-7" />
                            </div>
                            <div
                                className={`mb-2 text-sm font-semibold tracking-wider uppercase ${milestone.labelColor}`}
                            >
                                {milestone.year}
                            </div>
                            <h3 className="mb-3 text-lg font-bold">
                                {milestone.title}
                            </h3>
                            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                                {milestone.description}
                            </p>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                    >
                                        Read more
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <p>Dialog here</p>
                                </DialogContent>
                            </Dialog>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
