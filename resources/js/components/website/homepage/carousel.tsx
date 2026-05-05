import {
    GraduationCap,
    Users,
    Award,
    Building,
    Play,
    Pause,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { CarouselApi } from '@/components/ui/carousel';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import type { CarouselItem as CarouselRecord } from '@/types';

export default function CarouselSection({ data }: CarouselRecord[]) {
    const [api, setApi] = useState<CarouselApi>();
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (!api) {
            return;
        }

        if (isPlaying) {
            const interval = setInterval(() => {
                api.scrollNext();
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [api, isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="py-8">
            <Carousel className="mx-auto max-w-4xl" setApi={setApi}>
                <CarouselContent>
                    {data.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                                    <CardContent className="flex aspect-video items-center justify-center p-8">
                                        <img
                                            src={`/storage/${item.image_path}`}
                                            alt=""
                                            className="aspect-video w-full"
                                        />
                                    </CardContent>
                                    <CardFooter className="mx-auto text-center">
                                        {item.description}
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 border bg-background/80 backdrop-blur-sm hover:bg-background" />
                <CarouselNext className="right-2 border bg-background/80 backdrop-blur-sm hover:bg-background" />
            </Carousel>
            <div className="mt-4 flex justify-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={togglePlayPause}
                    className="rounded-full"
                >
                    {isPlaying ? (
                        <>
                            <Pause className="mr-2 size-4" /> Pause
                        </>
                    ) : (
                        <>
                            <Play className="mr-2 size-4" /> Play
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}
