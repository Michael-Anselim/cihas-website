import { Head, usePage } from '@inertiajs/react';
import { PlusCircle } from 'lucide-react';
import Heading from '@/components/heading';
import TablePagination from '@/components/pagination';
import DepartmentTable from '@/components/tables/department-table';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import type { Department, DepartmentResponse } from '@/types';

export default function Departments() {
    const { departments } = usePage<{ departments: DepartmentResponse }>()
        .props;
    console.log(departments);
    const data: Department[] = departments.data;

    return (
        <>
            <Head title="Departments" />
            <div className="space-y-8 p-4">
                <Heading
                    title="Manage departments"
                    description="Manage departments details, visibility and status"
                />

                <div className="flex justify-end">
                    <Button asChild>
                        <TextLink href="/departments/create">
                            <PlusCircle /> Add department
                        </TextLink>
                    </Button>
                </div>

                {/** departments table */}
                <DepartmentTable data={data} />
                <TablePagination
                    isActive={departments.links.active}
                    currentPage={departments.current_page}
                    prevPageUrl={departments.prev_page_url}
                    nextPageUrl={departments.next_page_url}
                />
            </div>
        </>
    );
}

Departments.layout = {
    breadcrumbs: [
        {
            title: 'Departments',
            href: '/departments',
        },
    ],
};
