import { Form, Head } from '@inertiajs/react';
import Heading from '@/components/heading';
import SubmitButtons from '@/components/submit-buttons';
import TextField from '@/components/text-field';
import { FieldGroup } from '@/components/ui/field';
import { index, store } from '@/routes/admission-windows';
import type { TextInputFields } from '@/types';

const admissionFields: TextInputFields[] = [
    {
        label: 'Academic year',
        type: 'text',
        name: 'academic_year',
        placeHolder: '2020/2021',
        required: true,
    },
    {
        label: 'Start date',
        type: 'date',
        name: 'start_date',
        required: true,
    },
    {
        label: 'End date',
        type: 'date',
        name: 'end_date',
        placeHolder: '2020/2021',
        required: true,
    },
    {
        label: 'Admission window',
        type: 'text',
        name: 'admission_window',
        placeHolder: 'First, second, third',
        required: true,
    },
];

export default function CreateAdmissinWindow() {
    return (
        <>
            <Head title="Admission" />
            <div className="flex flex-col space-y-8 p-4">
                <Heading title="Create admission window" />

                {/** form */}
                <Form method="post" action={store()}>
                    {({ processing, errors }) => (
                        <>
                            <FieldGroup>
                                {admissionFields.map((field) => (
                                    <TextField
                                        key={field.name}
                                        name={field.name}
                                        type={field.type}
                                        placeholder={field.placeHolder}
                                        label={field.label}
                                        required={field.required}
                                        errors={errors[field.name]}
                                    />
                                ))}

                                {/** submit buttons */}
                                <SubmitButtons
                                    fallBackLink={index()}
                                    processing={processing}
                                />
                            </FieldGroup>
                        </>
                    )}
                </Form>
            </div>
        </>
    );
}
