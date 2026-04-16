import { Form, Head, usePage } from '@inertiajs/react';
import DescriptionField from '@/components/description-field';
import Heading from '@/components/heading';
import SelectField from '@/components/select-field';
import SubmitButtons from '@/components/submit-buttons';
import TextField from '@/components/text-field';
import { FieldGroup } from '@/components/ui/field';
import { store } from '@/routes/posts';
import type { Department, SelectFields, TextInputFields } from '@/types';

const postInputFields: TextInputFields[] = [
    {
        name: 'title',
        type: 'text',
        label: 'Post title',
        required: true,
    },
    {
        name: 'image',
        type: 'file',
        label: 'Post image',
        required: true,
    },
    {
        name: 'date',
        type: 'date',
        label: 'Post date',
        required: true,
    },
    {
        name: 'attachment',
        type: 'file',
        label: 'Post attachment',
        required: true,
        placeHolder: 'this will be downloadable on the website',
    },
];

export default function CreatePosts() {
    // fetch data from inertia props
    const { departments } = usePage<{ departments: Department[] }>().props;

    //post select fields
    const postSelectFields: SelectFields[] = [
        {
            name: 'department_id',
            placeHolder: 'Select department',
            label: 'Department',
            required: true,
            items: [
                ...departments.map((department: Department) => ({
                    value: department.id.toString(),
                    label: department.name,
                })),
            ],
        },
        {
            name: 'type',
            placeHolder: 'Select post type',
            label: 'Post type',
            required: true,
            items: [
                { value: 'news', label: 'News' },
                { value: 'event', label: 'Event' },
            ],
        },
        {
            name: 'category',
            placeHolder: 'Select post category',
            label: 'Post category',
            required: true,
            items: [
                { value: 'admissions', label: 'Admissions' },
                { value: 'academic', label: 'Academic' },
                { value: 'announcements', label: 'Announcements' },
                { value: 'downloads', label: 'Downloads' },
                { value: 'sports', label: 'Sports' },
            ],
        },
    ];

    return (
        <>
            <Head title="create-department" />
            <div className="p-4">
                <Heading
                    title="Create post"
                    description="Fill the form below to create a new post"
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
                                {postInputFields.map((field) => (
                                    <TextField
                                        key={field.name}
                                        name={field.name}
                                        type={field.type}
                                        errors={errors[field.name]}
                                        label={field.label}
                                    />
                                ))}
                            </FieldGroup>

                            {/** description */}
                            <DescriptionField required={true} />

                            {/** select fields */}
                            <FieldGroup className="grid grid-cols-1 md:grid-cols-2">
                                {postSelectFields.map((field) => (
                                    <SelectField
                                        key={field.name}
                                        name={field.name}
                                        items={field.items}
                                        placeHolder={field.placeHolder}
                                        errors={errors[field.name]}
                                        label={field.label}
                                    />
                                ))}
                            </FieldGroup>

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

CreatePosts.layout = {
    breadcrumbs: [
        {
            title: 'Posts',
            href: '/posts',
        },
        {
            title: 'Create',
            href: '/posts/create',
        },
    ],
};
