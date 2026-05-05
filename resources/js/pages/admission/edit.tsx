import { Form, Head, usePage } from '@inertiajs/react';
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
import { update, index } from '@/routes/admission-windows';
import type { PageProps } from '@inertiajs/core';
import type { AdmissionWindow } from '@/types';

interface EditAdmissionWindowProps extends PageProps {
    admissionWindow: AdmissionWindow;
}

type AdmissionWindowStringFields = Exclude<keyof AdmissionWindow, 'id'>;

interface TextInputFields {
    name: AdmissionWindowStringFields;
    type: string;
    label: string;
    required: boolean;
    placeHolder?: string;
}

const admissionFields: TextInputFields[] = [
    {
        name: 'academic_year',
        type: 'text',
        label: 'Academic year',
        required: true,
        placeHolder: '2020/2021',
    },
    {
        name: 'start_date',
        type: 'date',
        label: 'Start date',
        required: true,
    },
    {
        name: 'end_date',
        type: 'date',
        label: 'End date',
        required: true,
    },
];

export default function EditAdmissionWindow() {
    const { admissionWindow } = usePage<EditAdmissionWindowProps>().props;

    return (
        <>
            <Head title="Edit admission window" />
            <div className="flex flex-col space-y-8 p-4">
                <Heading
                    title="Edit admission window"
                    description="Update the admission window details"
                />

                <Form
                    className="flex max-w-7xl flex-col gap-4"
                    action={update({ id: admissionWindow.id })}
                    method="put"
                >
                    {({ processing, errors }) => (
                        <>
                            <FieldGroup className="grid grid-cols-1 md:grid-cols-2">
                                {admissionFields.map((field) => (
                                    <TextField
                                        key={field.name}
                                        name={field.name}
                                        type={field.type}
                                        errors={errors[field.name]}
                                        label={field.label}
                                        defaultValue={admissionWindow[field.name]}
                                        required={field.required}
                                    />
                                ))}
                            </FieldGroup>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Admission window
                                    </label>
                                    <Select
                                        name="admission_window"
                                        defaultValue={admissionWindow.admission_window}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select admission window" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="first">First</SelectItem>
                                            <SelectItem value="second">Second</SelectItem>
                                            <SelectItem value="third">Third</SelectItem>
                                            <SelectItem value="fourth">Fourth</SelectItem>
                                            <SelectItem value="fifth">Fifth</SelectItem>
                                            <SelectItem value="late_admission">Late Admission</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Status
                                    </label>
                                    <Select
                                        name="status"
                                        defaultValue={admissionWindow.status}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="open">Open</SelectItem>
                                            <SelectItem value="closed">Closed</SelectItem>
                                            <SelectItem value="upcoming">Upcoming</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

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
