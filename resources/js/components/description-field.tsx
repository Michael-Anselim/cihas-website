import { Field, FieldError, FieldLabel } from './ui/field';
import { Textarea } from './ui/textarea';

export default function DescriptionField({
    error,
    required,
}: {
    error?: string;
    required?: boolean;
}) {
    return (
        <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Textarea
                name="description"
                id="description"
                className="border-primary/30"
                required={required}
            />
            {error && <FieldError>{error}</FieldError>}
        </Field>
    );
}
