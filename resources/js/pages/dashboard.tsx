import { Head, usePage } from '@inertiajs/react';
import SummaryCard from '@/components/summary-card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';

export default function Dashboard() {
    const { departments, posts, programs } = usePage<{ 
        departments: number; 
        posts: number; 
        programs: number; 
    }>().props;

    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <SummaryCard 
                        title="Active Departments" 
                        count={departments} 
                        description='Total active departments'
                        variant="default"
                    />
                    <SummaryCard 
                        title="Total Posts" 
                        count={posts} 
                        description="Published content"
                        variant="secondary"
                    />
                    <SummaryCard 
                        title="Active Programs" 
                        count={programs} 
                        description="Available academic programs"
                        variant="default"
                    />
                </div>
                <div className="relative min-h-screen flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
