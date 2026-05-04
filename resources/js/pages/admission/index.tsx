import { Head } from '@inertiajs/react';
import { PlusCircle } from 'lucide-react';
import Heading from '@/components/heading';
import AdmiWindowTable from '@/components/tables/admission-windows-table';
import TextLink from '@/components/text-link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { AdmissionWindowResponse } from '@/types';

type props = {
    admWindows: AdmissionWindowResponse[];
};
export default function AdmissionWindows({ admWindows }: props) {
    return (
        <>
            <Head title="Admission" />
            <div className="flex flex-col space-y-8 p-4">
                <Heading title="Admission windows" />

                <div className="flex justify-between">
                    <Badge variant="secondary">
                        {admWindows.total}- records found
                    </Badge>
                    <Button asChild>
                        <TextLink href="/admission-windows/create">
                            <PlusCircle /> Add Window
                        </TextLink>
                    </Button>
                </div>

                {/** table */}
                <AdmiWindowTable
                    data={admWindows.data}
                    pagination={admWindows}
                />
            </div>
        </>
    );
}
