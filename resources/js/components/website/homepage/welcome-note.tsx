import Heading from '@/components/heading';
import logo from '../../../images/logo.png';

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
                                Where excellence in education meets a nurturing community environment
                            </p>
                        </div>
                        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                            <div className="space-y-4">
                                <p className="text-justify leading-relaxed text-muted-foreground">
                                    At Charlotte IHAS, we believe in fostering academic excellence
                                    while creating a warm, inclusive environment where every student
                                    can thrive. Our dedicated faculty and comprehensive programs
                                    ensure that each child receives the personalized attention they
                                    need to succeed.
                                </p>
                                <p className="text-justify leading-relaxed text-muted-foreground">
                                    We invite you to explore our vibrant community and discover how
                                    we can partner with you in your child's educational journey.
                                    Together, we can build a foundation for lifelong learning and
                                    success.
                                </p>
                                <div className="pt-2">
                                    <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                        — Derick Titus, Principal
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative rounded-2xl bg-primary/5 p-4">
                                    <img
                                        src={logo}
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
