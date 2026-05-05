import Heading from '@/components/heading';
import { welcome } from '@/constants';

export default function WelcomeNote() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
                    <div className="bg-primary px-8 py-6 text-center">
                        <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
                            Welcome Message
                        </span>
                    </div>
                    <div className="bg-background p-8">
                        <div className="mb-6 text-center">
                            <Heading title="Welcome to Charlotte IHAS" />
                            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                                Where excellence in education meets a nurturing
                                community environment
                            </p>
                        </div>
                        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                            <div className="space-y-4">
                                <p className="text-justify leading-relaxed text-muted-foreground">
                                    On behalf of the entire Institute and
                                    staffs, I am delighted to welcome you to
                                    CIHAS. At Charlotte Institute of Health and
                                    Allied Sciences, We are committed to shaping
                                    the next generation of compassionate,
                                    skilled, and dedicated Nurses and Midwifery,
                                    Clinical Officers and Social Work experts
                                    who will lead with excellence in the
                                    healthcare field.
                                </p>
                                <p className="text-justify leading-relaxed text-muted-foreground">
                                    Our programs are designed to provide you
                                    with not only a solid academic foundation
                                    but also hands-on experience that prepares
                                    you to make a meaningful difference in the
                                    world. Join us in our mission to empower
                                    future healthcare heroes. Together, let’s
                                    make a lasting impact.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative rounded-2xl bg-primary/5 p-4">
                                    <img
                                        src={welcome}
                                        alt="Charlotte IHAS Logo"
                                        className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
