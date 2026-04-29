import { Head } from '@inertiajs/react';
import Facilities from '@/components/website/academic/facilities';
import AcademicPrograms from '@/components/website/academic/programs';

export default function Academic() {
    return (
        <>
            <Head title="Academic" />

            <div className="scroll-smooth">
                <section className="relative overflow-hidden bg-primary/80 py-24">
                    <div className="absolute inset-0 bg-linear-to-br from-chart-2/20 via-transparent to-transparent" />
                    <div className="absolute right-0 bottom-0 left-0 h-1 bg-linear-to-r from-primary via-chart-2 to-chart-3" />
                    <div className="relative mx-auto max-w-6xl px-4 text-center">
                        <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                            Academics
                        </span>
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-secondary-foreground md:text-5xl">
                            Academic Programs
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-secondary-foreground/80">
                            Explore our comprehensive programs designed to
                            prepare students for a successful future.
                        </p>
                    </div>
                </section>
                <AcademicPrograms />
                <Facilities />
            </div>
        </>
    );
}
