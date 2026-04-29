import { Camera } from 'lucide-react';
import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Galery } from '@/types';

type Props = {
    albums: Galery[];
};

export default function FeaturedAlbums({ albums }: Props) {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <Card className="border-none">
                    <CardHeader className="pb-8">
                        <Heading title="Gallery" />
                        <p className="text-muted-foreground">
                            A taste of how our enviroment feels and look
                        </p>
                    </CardHeader>
                    <CardContent>
                        {albums.length === 0 ? (
                            <div className="py-12 text-center text-muted-foreground">
                                No gallery images yet.
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                                {albums.map((album) => (
                                    <Card
                                        key={album.id}
                                        className="group cursor-pointer overflow-hidden border-2 border-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <div className="relative aspect-square overflow-hidden">
                                            {album.image_path ? (
                                                <img
                                                    src={album.image_path}
                                                    alt={album.label}
                                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            ) : (
                                                <>
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <Camera className="size-12 text-white/50" />
                                                    </div>
                                                </>
                                            )}
                                            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                                <h3 className="font-semibold text-white">
                                                    {album.label}
                                                </h3>
                                            </div>
                                        </div>
                                        <CardContent className="p-4">
                                            {album.description && (
                                                <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                                                    {album.description}
                                                </p>
                                            )}
                                            <Badge
                                                variant="secondary"
                                                className="text-xs"
                                            >
                                                {album.category}
                                            </Badge>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
