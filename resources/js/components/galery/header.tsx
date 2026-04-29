import Heading from '@/components/heading';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function GaleryHeader() {
    return (
        <div className="flex flex-col space-y-4">
            <Heading
                title="Manage Gallery"
                description="Upload, edit, and manage gallery images"
            />
        </div>
    );
}
