import { Form, Head } from '@inertiajs/react';
import DescriptionField from '@/components/description-field';
import Heading from '@/components/heading';
import SubmitButtons from '@/components/submit-buttons';
import TextField from '@/components/text-field';
import { FieldGroup } from '@/components/ui/field';
import { store } from '@/routes/departments';
import type { TextInputFields } from '@/types';

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

export default function CreateDepartment() {
    return (
        <>
            <Head title="create-department" />
            <div className="p-4">
                <Heading
                    title="Create department"
                    description="Fill the form below to create a new department"
                />
                {/** form */}
                <Form
                    className="flex max-w-7xl flex-col gap-4"
                    action={store()}
                    method="post"
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
                                    />
                                ))}
                            </FieldGroup>
                            <DescriptionField />

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
