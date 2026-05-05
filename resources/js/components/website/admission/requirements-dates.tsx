import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import type { AdmissionWindow } from '@/types';

const requirements = [
    'Completed application form',
    'CSE index number',
    'Valid email address',
    'Valid phone number',
    'Guardian information',
    'Certificate of completion for inservice',
    'Transcript for inservice',
];

export default function RequirementsAndDates({ data }: AdmissionWindow) {
    return (
        <section className="bg-muted/20 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12 text-center">
                    <Heading title="Admission Requirements" />
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Documents and information needed for your application
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="rounded-2xl border-l-4 border-chart-2 bg-chart-2/5 p-6 shadow-sm">
                        <h3 className="mb-6 text-xl font-bold text-chart-2">
                            Required Documents
                        </h3>
                        <ul className="space-y-3">
                            {requirements.map((requirement, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-chart-2 text-xs font-bold text-white">
                                        {index + 1}
                                    </div>
                                    <span className="text-muted-foreground">
                                        {requirement}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-6 shadow-sm">
                        <h3 className="mb-6 text-xl font-bold text-primary">
                            Important Dates
                        </h3>
                        <Badge>
                            {' '}
                            Admission winodws is: {data?.status || 'Closed'}
                        </Badge>
                        <div className="space-y-4">
                            {[
                                {
                                    label: 'Academic year',
                                    value: data?.academic_year || 'N/A',
                                },
                                {
                                    label: 'Application Starts',
                                    value: data?.start_date || 'N/A',
                                },
                                {
                                    label: 'Application Ends',
                                    value: data?.end_date || 'N/A',
                                },
                                {
                                    label: 'Admission Window',
                                    value: data?.admission_window || 'N/A',
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b border-primary/10 pb-3 last:border-0 last:pb-0"
                                >
                                    <span className="font-medium">
                                        {item.label}
                                    </span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
