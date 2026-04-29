import { FlaskConical, BookOpen, Monitor, Trophy } from 'lucide-react';
import Heading from '@/components/heading';

const facilities = [
    {
        name: 'Science Laboratories',
        description:
            'Modern, well-equipped labs for physics, chemistry, and biology experiments.',
        icon: FlaskConical,
        color: 'bg-primary/5 border-primary/30',
        iconColor: 'bg-primary text-primary-foreground',
    },
    {
        name: 'Library',
        description:
            'Extensive collection of books, journals, and digital resources for research and learning.',
        icon: BookOpen,
        color: 'bg-chart-2/5 border-chart-2/30',
        iconColor: 'bg-chart-2 text-white',
    },
    {
        name: 'Computer Labs',
        description:
            'State-of-the-art technology infrastructure with high-speed internet and modern software.',
        icon: Monitor,
        color: 'bg-chart-5/5 border-chart-5/30',
        iconColor: 'bg-chart-5 text-white',
    },
    {
        name: 'Sports & Entertainment',
        description:
            'A modern football stadium, basketball court, and a gym for fitness and recreational activities.',
        icon: Trophy,
        color: 'bg-chart-3/5 border-chart-3/30',
        iconColor: 'bg-chart-3 text-foreground',
    },
];

export default function Facilities() {
    return (
        <section className="bg-muted/20 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12 text-center">
                    <Heading title="Our Facilities" />
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        State-of-the-art resources supporting academic excellence
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className={`group flex gap-5 rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${facility.color}`}
                        >
                            <div className={`flex size-12 flex-shrink-0 items-center justify-center rounded-xl ${facility.iconColor}`}>
                                <facility.icon className="size-6" />
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-bold">{facility.name}</h3>
                                <p className="leading-relaxed text-muted-foreground">
                                    {facility.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
