import { Link } from '@inertiajs/react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { navMenus } from '@/components/data/nav-menu';

export default function WebFooter() {
    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="h-1 bg-linear-to-r from-primary via-chart-2 to-chart-5" />
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* School Info */}
                    <div className="space-y-4">
                        <h3 className="mb-4 text-lg font-bold text-secondary-foreground">Charlotte IHAS</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3 text-secondary-foreground/70">
                                <MapPin className="size-4 flex-shrink-0 text-chart-2" />
                                <span>Kilimanjaro, Tanzania</span>
                            </div>
                            <div className="flex items-center gap-3 text-secondary-foreground/70">
                                <Phone className="size-4 flex-shrink-0 text-chart-3" />
                                <span>+255 769 957 583</span>
                            </div>
                            <div className="flex items-center gap-3 text-secondary-foreground/70">
                                <Mail className="size-4 flex-shrink-0 text-primary" />
                                <span>info@cihas.ac.tz</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="mb-4 text-lg font-bold text-secondary-foreground">Quick Links</h3>
                        <div className="flex flex-col space-y-2">
                            {navMenus.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Programs */}
                    <div className="space-y-4">
                        <h3 className="mb-4 text-lg font-bold text-secondary-foreground">Programs</h3>
                        <div className="flex flex-col space-y-2 text-sm">
                            <Link href="/admission" className="text-secondary-foreground/70 transition-colors hover:text-primary">Admission</Link>
                            <Link href="/academic" className="text-secondary-foreground/70 transition-colors hover:text-primary">Academic Programs</Link>
                            <Link href="/news-events" className="text-secondary-foreground/70 transition-colors hover:text-primary">News &amp; Events</Link>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h3 className="mb-4 text-lg font-bold text-secondary-foreground">Follow Us</h3>
                        <div className="flex gap-3">
                            <Link
                                href="#"
                                className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                                aria-label="Facebook"
                            >
                                <Facebook className="size-5" />
                            </Link>
                            <Link
                                href="#"
                                className="flex size-10 items-center justify-center rounded-full bg-chart-2/20 text-chart-2 transition-colors hover:bg-chart-2 hover:text-white"
                                aria-label="Twitter"
                            >
                                <Twitter className="size-5" />
                            </Link>
                            <Link
                                href="#"
                                className="flex size-10 items-center justify-center rounded-full bg-chart-5/20 text-chart-5 transition-colors hover:bg-chart-5 hover:text-white"
                                aria-label="Instagram"
                            >
                                <Instagram className="size-5" />
                            </Link>
                            <Link
                                href="#"
                                className="flex size-10 items-center justify-center rounded-full bg-chart-3/20 text-chart-3 transition-colors hover:bg-chart-3 hover:text-foreground"
                                aria-label="YouTube"
                            >
                                <Youtube className="size-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-secondary-foreground/10 pt-8 text-center">
                    <p className="text-sm text-secondary-foreground/50">
                        © {new Date().getFullYear()} Charlotte IHAS. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
