import Heading from '@/components/heading';

const admissionSteps = [
    {
        step: '1',
        title: 'Fill application form',
        description:
            'Complete and submit the online application form with required documents.',
        stepColor: 'bg-primary text-primary-foreground',
        cardColor: 'border-primary/20 bg-primary/5',
    },
    {
        step: '2',
        title: 'Online application',
        description:
            'You will be assisted to complete the online application process on CAS-NACTIVET.',
        stepColor: 'bg-chart-2 text-white',
        cardColor: 'border-chart-2/20 bg-chart-2/5',
    },
    {
        step: '3',
        title: 'Get Admission letter',
        description:
            'For selected applicants our admission officer will contact you to get admission letter.',
        stepColor: 'bg-chart-5 text-white',
        cardColor: 'border-chart-5/20 bg-chart-5/5',
    },
    {
        step: '4',
        title: 'Enrollment',
        description:
            'Reporting and registration as a course student at our institute.',
        stepColor: 'bg-chart-3 text-foreground',
        cardColor: 'border-chart-3/20 bg-chart-3/5',
    },
];

export default function AdmissionProcess() {
    return (
        <section className="bg-accent/20 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12 text-center">
                    <Heading title="Admission Process" />
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Simple steps to join our institute in provided course
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {admissionSteps.map((step, index) => (
                        <div
                            key={index}
                            className={`group rounded-2xl border-2 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${step.cardColor}`}
                        >
                            <div className={`mx-auto mb-4 flex size-16 items-center justify-center rounded-full text-2xl font-bold ${step.stepColor}`}>
                                {step.step}
                            </div>
                            <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
