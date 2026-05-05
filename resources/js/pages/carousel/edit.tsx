import { Form, Head, usePage } from '@inertiajs/react';
import Heading from '@/components/heading';
import SubmitButtons from '@/components/submit-buttons';
import TextAreaField from '@/components/text-area-field';
import TextField from '@/components/text-field';
import { FieldGroup } from '@/components/ui/field';
import type { PageProps } from '@inertiajs/core';
import { index, update } from '@/routes/carousel';
import type { CarouselItem } from '@/types';

interface EditCarouselProps extends PageProps {
    carousel: CarouselItem;
}

export default function EditCarousel() {
    const { carousel } = usePage<EditCarouselProps>().props;

    return (
        <>
            <Head title="Edit carousel" />
            <div className="flex flex-col space-y-8 p-4">
                <Heading
                    title="Edit image"
                    description="Update the carousel image or description"
                />

                <div className="mb-4">
                    <p className="mb-1 text-sm font-medium text-muted-foreground">Current image</p>
                    <img
                        src={`/storage/${carousel.image_path}`}
                        alt={carousel.description}
                        className="h-40 w-auto rounded border object-cover"
                    />
                </div>

                <Form
                    method="post"
                    action={update({ carousel: carousel.id })}
                    encType="multipart/form-data"
                    className="space-y-8"
                >
                    {({ processing, errors }) => (
                        <>
                            <FieldGroup>
                                <TextField
                                    name="image_path"
                                    type="file"
                                    required={false}
                                    label="Replace image (optional)"
                                    errors={errors.image_path}
                                />

                                <TextAreaField
                                    name="description"
                                    required
                                    label="Carousel description"
                                    defaultValue={carousel.description}
                                    errors={errors.description}
                                />
                            </FieldGroup>

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
