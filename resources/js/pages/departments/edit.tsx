import { Form, Head, usePage } from '@inertiajs/react';
import DescriptionField from '@/components/description-field';
import Heading from '@/components/heading';
import SubmitButtons from '@/components/submit-buttons';
import TextField from '@/components/text-field';
import { FieldGroup } from '@/components/ui/field';
import {
    Select,
    SelectItem,
    SelectTrigger,
    SelectContent,
    SelectValue,
} from '@/components/ui/select';
import type { PageProps } from '@inertiajs/core';
import { update } from '@/routes/departments';
import type { Department } from '@/types';

interface EditDepartmentProps extends PageProps {
    department: Department;
}

interface TextInputFields {
    name: string;
    type: string;
    label: string;
    required: boolean;
    placeHolder?: string;
}

const departmentFields: TextInputFields[] = [
    {
        name: 'name',
        type: 'text',
        label: 'Name',
        required: true,
    },
    {
        name: 'code',
        type: 'text',
        label: 'Code',
        required: true,
    },
];

export default function EditDepartment() {
    const { department } = usePage<EditDepartmentProps>().props;

    return (
        <>
            <Head title="Edit-department" />
            <div className="p-4">
                <Heading
                    title="Edit department"
                    description="Fill the form below to edit a department"
                />
                {/** form */}
                <Form
                    className="flex max-w-7xl flex-col gap-4"
                    action={update({ id: department.id })}
                    method="put"
                >
                    {({ processing, errors }) => (
                        <>
                            <FieldGroup className="grid grid-cols-1 md:grid-cols-2">
                                {departmentFields.map((field) => (
                                    <TextField
                                        key={field.name}
                                        name={field.name}
                                        type={field.type}
                                        errors={errors[field.name]}
                                        label={field.label}
                                        defaultValue={department[field.name]}
                                    />
                                ))}
                            </FieldGroup>
                            <DescriptionField />

                            {/** status */}
                            <Select
                                name="status"
                                defaultValue={department.status}
                            >
                                <SelectTrigger className="w-48">
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="active">
                                        Active
                                    </SelectItem>
                                    <SelectItem value="inactive">
                                        Inactive
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            {/** submit button */}
                            <SubmitButtons
                                processing={processing}
                                fallBackLink="/departments"
                            />
                        </>
                    )}
                </Form>
            </div>
        </>
    );
}
