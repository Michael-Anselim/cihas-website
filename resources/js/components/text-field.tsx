import { Field, FieldError, FieldLabel } from './ui/field';
import { Input } from './ui/input';

// text field props interface
interface TextFieldProps {
    name: string;
    label: string;
    errors?: string;
    type?: string;
    defaultValue?: string;
    placeholder?: string;
}
export default function TextField({
    name,
    label,
    errors,
    type,
    defaultValue,
    placeholder,
}: TextFieldProps) {
    return (
        <Field>
            <FieldLabel htmlFor={name}>{label}</FieldLabel>
            <Input
                type={type}
                name={name}
                className="border-primary/30"
                defaultValue={defaultValue}
                placeholder={placeholder}
            />
            {errors && <FieldError>{errors}</FieldError>}
        </Field>
    );
}
