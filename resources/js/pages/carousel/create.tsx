import { Form, Head } from '@inertiajs/react';
import Heading from '@/components/heading';
import SubmitButtons from '@/components/submit-buttons';
import TextAreaField from '@/components/text-area-field';
import TextField from '@/components/text-field';
import { FieldGroup } from '@/components/ui/field';
import { index, store } from '@/routes/carousel';

export default function AddCarousel() {
    return (
        <>
            <Head title="Add carousel" />
            <div className="flex flex-col space-y-8 p-4">
                <Heading
                    title="Add image"
                    description="Fill the form below to add a new crousel image"
                />

                {/** form */}
                <Form method="post" action={store()} encType="multipart/form-data" className="space-y-8">
                    {({ processing, errors }) => (
                        <>
                            <FieldGroup>
                                <TextField
                                    name="image_path"
                                    type="file"
                                    required
                                    label="Image"
                                    errors={errors.image_path}
                                />

                                <TextAreaField
                                    name="description"
                                    required
                                    label="Carousel description"
                                />
                            </FieldGroup>

                            {/** buttons */}
                            <SubmitButtons
                                fallBackLink={index()}
                                processing={processing}
                            />
                        </>
                    )}
                </Form>
            </div>
        </>
    );
}
