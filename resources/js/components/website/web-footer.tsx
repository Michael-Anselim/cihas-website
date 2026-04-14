import { Link } from '@inertiajs/react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { navMenus } from '@/components/data/nav-menu';

export default function WebFooter() {
    return (
        <footer className="bg-muted/50 border-t border-border">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* School Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-4">Charlotte IHAS</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <MapPin className="size-4" />
                                <span>Kilimanjaro, Tanzania</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="size-4" />
                                <span>+255 769 957 583</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="size-4" />
                                <span>info@cihas.ac.tz</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <div className="space-y-2 flex flex-col">
                            {navMenus.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Programs */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-4">Programs</h3>
                        <div className="space-y-2 text-sm text-muted-foreground flex flex-col">
                            <Link href="/admission" className="hover:text-primary transition-colors">Admission</Link>
                            <Link href="/academic" className="hover:text-primary transition-colors">Academic Programs</Link>
                            <Link href="/news-events" className="hover:text-primary transition-colors">News & Events</Link>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <Link 
                                href="#" 
                                className="flex size-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="size-5" />
                            </Link>
                            <Link 
                                href="#" 
                                className="flex size-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="size-5" />
                            </Link>
                            <Link 
                                href="#" 
                                className="flex size-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="size-5" />
                            </Link>
                            <Link 
                                href="#" 
                                className="flex size-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube className="size-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-border text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Charlotte IHAS. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
