export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-primary/80 py-24">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 h-1 bg-linear-to-r from-chart-2 via-chart-3 to-chart-5" />
            <div className="relative mx-auto max-w-6xl px-4 text-center">
                <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
                    About Us
                </span>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                    About Charlotte IHAS
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
                    A journey of growth, excellence, and community impact
                </p>
            </div>
        </section>
    );
}
