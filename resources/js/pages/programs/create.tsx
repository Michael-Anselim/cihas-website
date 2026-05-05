import { Form, Head, usePage } from '@inertiajs/react';
import Heading from '@/components/heading';
import SelectField from '@/components/select-field';
import SubmitButtons from '@/components/submit-buttons';
import TextAreaField from '@/components/text-area-field';
import TextField from '@/components/text-field';
import { FieldGroup } from '@/components/ui/field';
import type { PageProps } from '@inertiajs/core';
import { index, store } from '@/routes/programs';
import type { Department, SelectFields, TextInputFields } from '@/types';

interface CreateProgramProps extends PageProps {
    departments: Department[];
}

// program normal input fields
const formInputFields: TextInputFields[] = [
    { name: 'name', type: 'text', label: 'Name', required: true },
    { name: 'image', type: 'file', label: 'Program image', required: true },
];

// program text area fields
const formTextAreaFields: TextInputFields[] = [
    {
        name: 'description',
        label: 'Description',
        required: true,
    },
    {
        name: 'requirements',
        label: 'Admission Requirements',
        required: true,
    },
];
export default function CreateProgram() {
    const { departments } = usePage<CreateProgramProps>().props;

    // program select fields
    const formSelectFields: SelectFields[] = [
        {
            name: 'department_id',
            placeHolder: 'Select department',
            label: 'Department',
            required: true,
            items: [
                ...departments.map((department) => ({
                    value: department.id.toString(),
                    label: department.name,
                })),
            ],
        },
        {
            name: 'levels',
            placeHolder: 'Select program level',
            label: 'Program levels',
            required: true,
            items: [
                { value: 'I to III', label: 'I to III' },
                { value: 'IV to VI', label: 'IV to VI' },
            ],
        },
        {
            name: 'type',
            placeHolder: 'Select program type',
            label: 'Program type',
            required: true,
            items: [
                {
                    value: 'short_course',
                    label: 'Short course',
                },
                {
                    value: 'long_course',
                    label: 'Long course',
                },
            ],
        },
    ];

    return (
        <>
            <Head title="Create Program" />

            <div className="flex flex-col space-y-8 p-4">
                <Heading
                    title="Create program"
                    description="Fill the form below to create a new program"
                />

                {/** form */}

                <Form
                    action={store()}
                    method="post"
                    encType="multipart/form-data"
                >
                    {({ processing, errors }) => (
                        <div className="flex flex-col gap-4">
                            {/** input fields */}
                            <FieldGroup className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                                {formInputFields.map((field) => (
                                    <TextField
                                        key={field.name}
                                        name={field.name}
                                        type={field.type}
                                        errors={errors?.[field.name]}
                                        label={field.label}
                                    />
                                ))}
                            </FieldGroup>

                            {/** select fields */}
                            <FieldGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {formSelectFields.map((field) => (
                                    <SelectField
                                        key={field.name}
                                        name={field.name}
                                        label={field.label}
                                        errors={errors?.[field.name]}
                                        items={field.items}
                                        placeHolder={field.placeHolder}
                                    />
                                ))}
                            </FieldGroup>

                            <FieldGroup>
                                {formTextAreaFields.map((field) => (
                                    <TextAreaField
                                        key={field.name}
                                        name={field.name}
                                        label={field.label}
                                        errors={errors?.[field.name]}
                                    />
                                ))}
                            </FieldGroup>

                            <SubmitButtons
                                fallBackLink={index()}
                                processing={processing}
                            />
                        </div>
                    )}
                </Form>
            </div>
        </>
    );
}

CreateProgram.layout = {
    breadcrumbs: [
        {
            title: 'Programs',
            href: '/programs',
        },
        {
            title: 'Create Program',
            href: '/programs/create',
        },
    ],
};
