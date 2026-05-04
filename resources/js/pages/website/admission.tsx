import { Head } from '@inertiajs/react';
import AdmissionContact from '@/components/website/admission/contact';
import AdmissionProcess from '@/components/website/admission/process';
import RequirementsAndDates from '@/components/website/admission/requirements-dates';
import type { AdmissionWindow } from '@/types';

type props = {
    admissionWindow: AdmissionWindow;
};
export default function Admission({ admissionWindow }: props) {
    return (
        <>
            <Head title="Admission" />

            <div className="scroll-smooth">
                <section className="relative overflow-hidden bg-primary/80 py-24">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent" />
                    <div className="absolute right-0 bottom-0 left-0 h-1 bg-linear-to-r from-primary via-chart-2 to-chart-3" />
                    <div className="relative mx-auto max-w-6xl px-4 text-center">
                        <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                            Join Us
                        </span>
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-secondary-foreground md:text-5xl">
                            Admission
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-secondary-foreground/80">
                            Begin your journey at Charlotte IHAS — a simple,
                            transparent process designed for every applicant.
                        </p>
                    </div>
                </section>
                <AdmissionProcess />
                <RequirementsAndDates data={admissionWindow} />
                <AdmissionContact />
            </div>
        </>
    );
}
