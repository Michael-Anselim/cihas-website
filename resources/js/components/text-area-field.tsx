import type { TextAreaFields } from '@/types';
import { Field, FieldError, FieldLabel } from './ui/field';
import { Textarea } from './ui/textarea';

// text area props
export default function TextAreaField({
    name,
    label,
    errors,
    required,
    defaultValue,
}: TextAreaFields) {
    return (
        <Field>
            <FieldLabel htmlFor={name}>{label}</FieldLabel>
            <Textarea
                name={name}
                required={required}
                id={name}
                defaultValue={defaultValue}
            />
            {errors && <FieldError>{errors}</FieldError>}
        </Field>
    );
}
