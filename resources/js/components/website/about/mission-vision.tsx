export default function MissionVision() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-lg">
                        <span className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">
                            Mission
                        </span>
                        <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
                        <p className="leading-relaxed text-primary-foreground/85">
                            To provide a transformative educational experience
                            that empowers students to reach their fullest
                            potential through rigorous academics, character
                            development, and community engagement.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-secondary p-8 text-secondary-foreground shadow-lg">
                        <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">
                            Vision
                        </span>
                        <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
                        <p className="leading-relaxed text-secondary-foreground/85">
                            To be a leading educational institution that
                            prepares students to confidently face the challenges
                            of a rapidly changing world with knowledge,
                            integrity, and purpose.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
