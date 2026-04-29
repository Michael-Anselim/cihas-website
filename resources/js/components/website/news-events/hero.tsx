export default function NewsEventsHero() {
    return (
        <section className="relative overflow-hidden bg-primary/80 py-24">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 h-1 bg-linear-to-r from-chart-2 via-chart-3 to-chart-5" />
            <div className="relative mx-auto max-w-6xl px-4 text-center">
                <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                    Stay Connected
                </span>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-secondary-foreground md:text-5xl">
                    News &amp; Events
                </h1>
                <p className="mx-auto max-w-3xl text-lg text-secondary-foreground/80">
                    Keep up with the latest happenings at Charlotte IHAS. From
                    student achievements to upcoming events, stay informed about
                    our vibrant school community.
                </p>
            </div>
        </section>
    );
}
