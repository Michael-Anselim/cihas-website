import type { PageProps } from '@inertiajs/core';
import { Head, usePage, Link } from '@inertiajs/react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { create, destroy, edit } from '@/routes/galery';
import type { Galery } from '@/types';

interface GaleryIndexProps extends PageProps {
    galeiries: {
        data: Galery[];
        links: Record<string, any>;
        meta: Record<string, any>;
    };
}

export default function GaleryIndex() {
    const { galeiries } = usePage<GaleryIndexProps>().props;

    return (
        <>
            <Head title="Gallery Management" />

            <div className="flex flex-col space-y-8 p-4">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Gallery Management"
                        description="Manage gallery images"
                    />
                    <Link href={create()}>
                        <Button>
                            <Plus className="mr-2 size-4" />
                            Add Image
                        </Button>
                    </Link>
                </div>

                <Card className="border-none shadow-sm">
                    <CardHeader>
                        <h3 className="text-lg font-semibold">
                            Gallery Images ({galeiries.data.length})
                        </h3>
                    </CardHeader>
                    <CardContent>
                        {galeiries.data.length > 0 ? (
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {galeiries.data.map((image) => (
                                    <Card
                                        key={image.id}
                                        className="group overflow-hidden border-2 border-primary/10 transition-all duration-300 hover:shadow-lg"
                                    >
                                        <div className="relative aspect-square overflow-hidden bg-muted">
                                            <img
                                                src={`/storage/${image.image_path}`}
                                                alt={image.label}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <CardContent className="p-3">
                                            <h4 className="mb-2 line-clamp-2 font-semibold">
                                                {image.label}
                                            </h4>
                                            {image.description && (
                                                <p className="mb-2 line-clamp-2 text-xs text-muted-foreground">
                                                    {image.description}
                                                </p>
                                            )}
                                            <div className="mb-3 flex items-center gap-2">
                                                <Badge
                                                    variant="outline"
                                                    className="text-xs"
                                                >
                                                    {image.category}
                                                </Badge>
                                            </div>
                                            <div className="flex gap-2">
                                                <Link
                                                    href={edit({
                                                        id: image.id,
                                                    })}
                                                    className="flex-1"
                                                >
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="w-full"
                                                    >
                                                        <Pencil className="mr-2 size-3" />
                                                        Edit
                                                    </Button>
                                                </Link>
                                                <Link
                                                    href={destroy({
                                                        id: image.id,
                                                    })}
                                                    method="delete"
                                                    as="button"
                                                    className="flex-1"
                                                >
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        className="w-full"
                                                    >
                                                        <Trash2 className="size-3" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="py-12 text-center">
                                <p className="text-muted-foreground">
                                    No gallery images yet. Get started by
                                    uploading your first image!
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
