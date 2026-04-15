import { Form, Head, usePage } from '@inertiajs/react';
import { Pen } from 'lucide-react';
import Heading from '@/components/heading';
import SelectField from '@/components/select-field';
import SubmitButtons from '@/components/submit-buttons';
import TextAreaField from '@/components/text-area-field';
import TextField from '@/components/text-field';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { FieldGroup } from '@/components/ui/field';
import { index, update } from '@/routes/programs';
import type {
    Department,
    Program,
    SelectFields,
    TextInputFields,
} from '@/types';

// program normal input fields
const formInputFields: TextInputFields[] = [
    { name: 'name', type: 'text', label: 'Name', required: true },
    // { name: 'image', type: 'file', label: 'Program image', required: true },
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
export default function EditProgram() {
    const { departments, program } = usePage<{
        departments: Department[];
        program: Program;
    }>().props;

    console.log(program.image);

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
        {
            name: 'status',
            placeHolder: 'Select status',
            label: 'Status',
            required: true,
            items: [
                {
                    value: 'active',
                    label: 'Active',
                },
                {
                    value: 'inactive',
                    label: 'Inactive',
                },
            ],
        },
    ];

    return (
        <>
            <Head title="Edit Program" />

            <div className="flex flex-col space-y-8 p-4">
                <Heading
                    title="Edit program"
                    description="Fill the form below to edit a program"
                />
                <Card className="w-48 border border-primary/10">
                    <CardHeader>
                        <img src={program.image} alt="" className="h-48 w-48" />
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="font-semibold">
                            Program image
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button variant="secondary">
                            <Pen size={5} />
                            Update
                        </Button>
                    </CardFooter>
                </Card>

                {/** form */}

                <Form
                    action={update({ id: program.id })}
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
                                        defaultValue={program[field.name]}
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
                                        defaultValue={program[
                                            field.name
                                        ].toString()}
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
                                        defaultValue={program[field.name]}
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

EditProgram.layout = {
    breadcrumbs: [
        {
            title: 'Programs',
            href: '/programs',
        },
        {
            title: 'Edit Program',
            href: '/programs/edit',
        },
    ],
};
