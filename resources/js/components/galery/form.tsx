import { Form, Head } from '@inertiajs/react';
import DescriptionField from '@/components/description-field';
import Heading from '@/components/heading';
import SelectField from '@/components/select-field';
import SubmitButtons from '@/components/submit-buttons';
import TextField from '@/components/text-field';
import { FieldGroup } from '@/components/ui/field';
import { index, store, update } from '@/routes/galery';
import type { Galery, SelectFields, TextInputFields } from '@/types';

interface GaleryFormProps {
    galery?: Galery;
    isEditing?: boolean;
}

const galeryInputFields: TextInputFields[] = [
    {
        name: 'label',
        type: 'text',
        label: 'Image Label',
        required: true,
        placeHolder: 'e.g., Science Fair Winners',
    },
    {
        name: 'image',
        type: 'file',
        label: 'Image',
        required: true,
        placeHolder: 'Upload gallery image (JPEG, PNG, GIF, SVG)',
    },
];

export default function GaleryForm({
    galery,
    isEditing = false,
}: GaleryFormProps) {
    const galerySelectFields: SelectFields[] = [
        {
            name: 'category',
            placeHolder: 'Select category',
            label: 'Category',
            required: true,
            items: [
                { value: 'Academic', label: 'Academic' },
                { value: 'Sports', label: 'Sports' },
                { value: 'Arts', label: 'Arts' },
                { value: 'Events', label: 'Events' },
                { value: 'Campus', label: 'Campus' },
                { value: 'Students', label: 'Students' },
                { value: 'Faculty', label: 'Faculty' },
            ],
            defaultValue: galery?.category,
        },
    ];

    return (
        <>
            <Head title={isEditing ? 'Edit Gallery' : 'Upload Gallery Image'} />

            <div className="p-4">
                <Heading
                    title={
                        isEditing ? 'Edit Gallery Image' : 'Upload New Image'
                    }
                    description={
                        isEditing
                            ? `Editing: ${galery?.label}`
                            : 'Add a new image to the gallery'
                    }
                />

                <Form
                    className="flex max-w-4xl flex-col gap-4"
                    action={
                        isEditing && galery
                            ? update({ id: galery.id })
                            : store()
                    }
                    method={isEditing ? 'put' : 'post'}
                >
                    {({ processing, errors }) => (
                        <>
                            <FieldGroup className="grid grid-cols-1 gap-4">
                                {galeryInputFields.map((field) => (
                                    <TextField
                                        key={field.name}
                                        name={field.name}
                                        type={field.type}
                                        label={field.label}
                                        errors={
                                            errors[
                                                field.name as keyof typeof errors
                                            ] as string | undefined
                                        }
                                        placeholder={field.placeHolder}
                                        defaultValue={
                                            field.name === 'label' && galery
                                                ? galery.label
                                                : undefined
                                        }
                                    />
                                ))}

                                <DescriptionField
                                    error={
                                        errors.description as string | undefined
                                    }
                                    required={false}
                                />

                                {galerySelectFields.map((field) => (
                                    <SelectField
                                        key={field.name}
                                        name={field.name}
                                        label={field.label}
                                        placeHolder={field.placeHolder}
                                        items={field.items}
                                        errors={
                                            errors[
                                                field.name as keyof typeof errors
                                            ] as string | undefined
                                        }
                                        defaultValue={field.defaultValue}
                                        required={field.required}
                                    />
                                ))}
                            </FieldGroup>

                            <SubmitButtons
                                processing={processing}
                                fallBackLink={index()}
                            />
                        </>
                    )}
                </Form>
            </div>
        </>
    );
}
