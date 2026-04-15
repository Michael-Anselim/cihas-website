import { Field, FieldError, FieldLabel } from './ui/field';
import { Textarea } from './ui/textarea';

export default function DescriptionField({ error }: { error?: string }) {
    return (
        <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Textarea
                name="description"
                id="description"
                className="border-primary/30"
            />
            {error && <FieldError>{error}</FieldError>}
        </Field>
    );
}
