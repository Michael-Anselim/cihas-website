import { Field, FieldError, FieldLabel } from './ui/field';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select';

// select field props interface
interface SelectFieldProps {
    name: string;
    label: string;
    errors?: string;
    defaultValue?: string;
    required?: boolean;
    placeHolder?: string;
    items: { value: string; label: string }[];
}
export default function SelectField({
    name,
    label,
    errors,
    defaultValue,
    required,
    items,
    placeHolder,
}: SelectFieldProps) {
    return (
        <Field>
            <FieldLabel htmlFor={name}>{label}</FieldLabel>
            <Select defaultValue={defaultValue} name={name} required={required}>
                <SelectTrigger>
                    <SelectValue placeholder={placeHolder} />
                </SelectTrigger>
                <SelectContent>
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {errors && <FieldError>{errors}</FieldError>}
        </Field>
    );
}
