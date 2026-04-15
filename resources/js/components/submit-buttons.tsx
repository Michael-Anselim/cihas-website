import type { RouteDefinition } from '@/wayfinder';
import TextLink from './text-link';
import { Button } from './ui/button';

// Submit buttons props interface
interface SubmitButtonsProps {
    processing: boolean;
    errors?: string[];
    fallBackLink: RouteDefinition;
}
export default function SubmitButtons({
    processing,
    errors,
    fallBackLink,
}: SubmitButtonsProps) {
    return (
        <div className="flex justify-end gap-4">
            <Button type="reset" variant="destructive" asChild>
                <TextLink href={fallBackLink}>Cancel</TextLink>
            </Button>
            <Button type="submit" disabled={processing || Boolean(errors)}>
                {processing ? 'Saving...' : 'Save'}
            </Button>
        </div>
    );
}
