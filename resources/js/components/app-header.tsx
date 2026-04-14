import { Link } from '@inertiajs/react';
import { Menu, Sun, Phone, MapPin, Mail } from 'lucide-react';
import { Fragment, useState } from 'react';
import AppearanceTabs from '@/components/appearance-tabs';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import type { BreadcrumbItem } from '@/types';
import AppLogo from './app-logo';
import { navMenus } from './data/nav-menu';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';

interface AppHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AppHeader({ breadcrumbs = [] }: AppHeaderProps) {
    return (
        <>
            {/* Top bar with contact info */}
            <div className="hidden bg-primary py-2 text-primary-foreground md:block">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between text-sm">
                        <div className="hidden items-center gap-6 md:flex">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>Call us: 255 769 957 583</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>info@cihas.ac.tz</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span className="hidden md:inline">
                                    Kilimanjaro, Tanzania
                                </span>
                            </div>
                            <Button asChild variant="secondary" size="sm">
                                <Link href="/apply">Apply Now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <header className="sticky top-0 z-30 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    {/* Logo */}
                    <Link
                        href="/"
                        prefetch
                        className="flex items-center gap-3 text-xl font-bold tracking-tight transition-colors hover:text-primary"
                    >
                        <AppLogo />
                    </Link>

                    {/* Mobile Navigation */}
                    <div className="lg:hidden">
                        <Sheet>
                            {/* Mobile menu theme switcher */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-foreground hover:text-primary"
                                    >
                                        <Sun className="h-5 w-5" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="w-84 p-4">
                                    <DialogHeader>
                                        <DialogTitle>
                                            Select a theme
                                        </DialogTitle>
                                    </DialogHeader>
                                    <AppearanceTabs />
                                </DialogContent>
                            </Dialog>

                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="ml-2 h-8.5 w-8.5 text-foreground hover:text-primary"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="flex h-full w-80 flex-col items-stretch justify-between bg-background"
                            >
                                <SheetTitle className="sr-only">
                                    Navigation Menu
                                </SheetTitle>
                                <SheetHeader className="border-b pb-4">
                                    <AppLogo />
                                </SheetHeader>
                                <div className="flex h-full flex-1 flex-col space-y-2 p-4">
                                    <div className="flex h-full flex-col justify-between">
                                        <div className="flex flex-col space-y-2">
                                            {navMenus.map((item) => (
                                                <SheetClose
                                                    asChild
                                                    key={item.title}
                                                >
                                                    <Link
                                                        key={item.title}
                                                        href={item.href}
                                                        className="flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                                    >
                                                        <span>
                                                            {item.title}
                                                        </span>
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                            <Button
                                                asChild
                                                variant="default"
                                                className="mt-4"
                                            >
                                                <Link href="/apply">
                                                    Apply now
                                                </Link>
                                            </Button>
                                        </div>

                                        {/* Mobile contact info */}
                                        <div className="space-y-2 border-t pt-4 text-sm">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Phone className="h-4 w-4" />
                                                <span>
                                                    Call us: 255 769 957 583
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Mail className="h-4 w-4" />
                                                <span>info@cihas.ac.tz</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <MapPin className="h-4 w-4" />
                                                <span>
                                                    Kilimanjaro, Tanzania
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center space-x-8 lg:flex">
                        <NavigationMenu>
                            <NavigationMenuList className="flex space-x-1">
                                {navMenus.map((item) => (
                                    <Fragment key={item.title}>
                                        <NavigationMenuItem>
                                            <Link
                                                href={item.href}
                                                className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                            >
                                                {item.title}
                                            </Link>
                                        </NavigationMenuItem>
                                    </Fragment>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

                        <div className="flex items-center gap-4">
                            {/* Theme Switcher */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-foreground hover:text-primary"
                                    >
                                        <Sun className="h-5 w-5" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="w-84 p-4">
                                    <DialogHeader>
                                        <DialogTitle>
                                            Select a theme
                                        </DialogTitle>
                                    </DialogHeader>
                                    <AppearanceTabs />
                                </DialogContent>
                            </Dialog>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Breadcrumbs */}
            {breadcrumbs.length > 1 && (
                <div className="border-b border-border/40 bg-background/50">
                    <div className="container mx-auto flex h-12 items-center px-4 text-neutral-500">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </>
    );
}
