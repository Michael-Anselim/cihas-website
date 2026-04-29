import { usePage } from '@inertiajs/react';
import GaleryForm from '@/components/galery/form';
import type { Galery } from '@/types';

export default function EditGalery() {
    const { galery } = usePage<{ galery: Galery }>().props;

    return <GaleryForm galery={galery} isEditing />;
}
