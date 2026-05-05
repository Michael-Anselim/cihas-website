import { Head, usePage } from '@inertiajs/react';
import { PlusCircle } from 'lucide-react';
import Heading from '@/components/heading';
import ProgramsTable from '@/components/tables/program-table';
import TextLink from '@/components/text-link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { PageProps } from '@inertiajs/core';
import type { Program, ProgramResponse } from '@/types';

interface ProgramsProps extends PageProps {
    programs: ProgramResponse;
}

export default function Programs() {
    const { programs } = usePage<ProgramsProps>().props;
    console.log(programs);

    const data: Program[] = programs.data;

    return (
        <>
            <Head title="Programs" />

            <div className="flex flex-col space-y-8 p-4">
                <Heading
                    title="Manage Programs"
                    description="Manage programs details, visibility and status"
                />

                <div className="flex justify-between">
                    <Badge variant="secondary">
                        {programs.total}- records found
                    </Badge>
                    <Button asChild>
                        <TextLink href="/programs/create">
                            <PlusCircle /> Add Program
                        </TextLink>
                    </Button>
                </div>
                <ProgramsTable data={data} />
            </div>
        </>
    );
}

Programs.layout = {
    breadcrumbs: [
        {
            title: 'Programs',
            href: '/programs',
        },
    ],
};
