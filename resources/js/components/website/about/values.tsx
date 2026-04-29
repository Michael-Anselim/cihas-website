import Heading from '@/components/heading';

const values = [
    {
        title: 'Excellence',
        description:
            'We strive for the highest standards in teaching, learning, and personal development.',
        color: 'bg-primary/10 border-primary/30 hover:bg-primary/20',
        numColor: 'bg-primary text-primary-foreground',
        num: '01',
    },
    {
        title: 'Integrity',
        description:
            'We foster honesty, responsibility, and ethical behavior in all aspects of school life.',
        color: 'bg-chart-2/10 border-chart-2/30 hover:bg-chart-2/20',
        numColor: 'bg-chart-2 text-white',
        num: '02',
    },
    {
        title: 'Innovation',
        description:
            'We embrace creative thinking and modern approaches to deliver exceptional education.',
        color: 'bg-chart-5/10 border-chart-5/30 hover:bg-chart-5/20',
        numColor: 'bg-chart-5 text-white',
        num: '03',
    },
    {
        title: 'Community',
        description:
            'We build a supportive, inclusive environment where every member belongs and thrives.',
        color: 'bg-chart-3/10 border-chart-3/30 hover:bg-chart-3/20',
        numColor: 'bg-chart-3 text-foreground',
        num: '04',
    },
];

export default function Values() {
    return (
        <section className="bg-accent/20 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12 text-center">
                    <Heading title="Our Core Values" />
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        The principles that guide everything we do
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={`group rounded-2xl border-2 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${value.color}`}
                        >
                            <div className={`mx-auto mb-4 flex size-12 items-center justify-center rounded-full text-lg font-bold ${value.numColor}`}>
                                {value.num}
                            </div>
                            <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
