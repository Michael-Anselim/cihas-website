import type { PageProps } from '@inertiajs/core';
import { usePage } from '@inertiajs/react';
import GaleryForm from '@/components/galery/form';
import type { Galery } from '@/types';

interface EditGaleryProps extends PageProps {
    galery: Galery;
}

export default function EditGalery() {
    const { galery } = usePage<EditGaleryProps>().props;

    return <GaleryForm galery={galery} isEditing />;
}
