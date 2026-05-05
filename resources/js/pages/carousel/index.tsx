import type { PageProps } from '@inertiajs/core';
import { Head, Link, usePage } from '@inertiajs/react';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { create, destroy, edit } from '@/routes/carousel';
import type { CarouselItem as CarouselRecord } from '@/types';

interface CarouselIndexProps extends PageProps {
    carousels: CarouselRecord[];
}

export default function CarouselIndex() {
    const { carousels } = usePage<CarouselIndexProps>().props;

    return (
        <>
            <Head title="Carousel" />
            <div className="flex flex-col space-y-8 p-4">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Manage Carousel"
                        description="Manage homepage carousel images"
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
                            Carousel Images ({carousels.length})
                        </h3>
                    </CardHeader>
                    <CardContent>
                        {carousels.length > 0 ? (
                            <Carousel className="mx-auto max-w-3xl">
                                <CarouselContent>
                                    {carousels.map((item) => (
                                        <CarouselItem key={item.id}>
                                            <div className="p-1">
                                                <Card className="overflow-hidden border-2 border-primary/10 shadow-lg">
                                                    <div className="relative aspect-video overflow-hidden bg-muted">
                                                        <img
                                                            src={`/storage/${item.image_path}`}
                                                            alt={
                                                                item.description
                                                            }
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                    <CardContent className="p-4">
                                                        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                                                            {item.description}
                                                        </p>
                                                        <div className="flex gap-2">
                                                            <Link
                                                                href={edit({
                                                                    carousel:
                                                                        item.id,
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
                                                                    carousel:
                                                                        item.id,
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
                                                                    Delete
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="left-2 border bg-background/80 backdrop-blur-sm hover:bg-background" />
                                <CarouselNext className="right-2 border bg-background/80 backdrop-blur-sm hover:bg-background" />
                            </Carousel>
                        ) : (
                            <div className="py-12 text-center">
                                <p className="text-muted-foreground">
                                    No carousel images yet. Add your first image
                                    to get started!
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
