import { Link } from '@inertiajs/react';
import {
    Album,
    Calendar,
    GraduationCap,
    LayoutGrid,
    Megaphone,
    Notebook,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { index as departmentIndex } from '@/routes/departments';
import { index as galeryIndex } from '@/routes/galery';
import { index as postIndex } from '@/routes/posts';
import { index as programIndex } from '@/routes/programs';
import type { NavItem } from '@/types';
import { index } from '@/routes/admission-windows';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Departments',
        href: departmentIndex(),
        icon: Notebook,
    },
    {
        title: 'Programs',
        href: programIndex(),
        icon: GraduationCap,
    },
    {
        title: 'Posts',
        href: postIndex(),
        icon: Megaphone,
    },
    {
        title: 'Galery',
        href: galeryIndex(),
        icon: Album,
    },
    {
        title: 'Admission',
        href: index(),
        icon: Calendar,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
