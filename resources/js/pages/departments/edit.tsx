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
} from '@/components/ui/select';
import { update } from '@/routes/departments';

interface FormFields {
    name: string;
    type: string;
    label: string;
    required: boolean;
    placeHolder?: string;
}

const departmentFields: FormFields[] = [
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
    const { department } = usePage().props;

    return (
        <>
            <Head title="Edit-department" />
            <div className="p-4">
                <Heading
                    title="Create department"
                    description="Fill the form below to edit a department"
                />
                {/** form */}
                <Form
                    className="flex max-w-7xl flex-col gap-4"
                    action={update({ id: department.id })}
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

                            <Select
                                name="status"
                                defaultValue={department.status}
                            >
                                <SelectTrigger className="w-48">
                                    Status
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
