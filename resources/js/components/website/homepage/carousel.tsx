import { GraduationCap, Users, Award, Building, Play, Pause } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { CarouselApi } from '@/components/ui/carousel';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

const carouselItems = [
    {
        title: 'Excellence in Education',
        description: 'Providing quality education with modern facilities and experienced faculty to nurture young minds.',
        icon: GraduationCap,
        badge: 'Academics',
        color: 'bg-blue-500',
    },
    {
        title: 'Diverse Community',
        description: 'A welcoming environment where students from all backgrounds come together to learn and grow.',
        icon: Users,
        badge: 'Community',
        color: 'bg-green-500',
    },
    {
        title: 'Award-Winning Programs',
        description: 'Recognized for outstanding achievements in academics, sports, and extracurricular activities.',
        icon: Award,
        badge: 'Achievements',
        color: 'bg-purple-500',
    },
    {
        title: 'Modern Campus',
        description: 'State-of-the-art facilities including science labs, library, sports complex, and digital classrooms.',
        icon: Building,
        badge: 'Facilities',
        color: 'bg-orange-500',
    },
];

export default function CarouselSection() {
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
                    {carouselItems.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                                    <CardContent className="flex aspect-video items-center justify-center p-8">
                                        <div className="text-center space-y-6">
                                            <div className={`mx-auto flex size-24 items-center justify-center rounded-full ${item.color} text-white transition-transform duration-300 hover:scale-110`}>
                                                <item.icon className="size-12" />
                                            </div>
                                            <div className="space-y-3">
                                                <Badge className="mx-auto text-sm font-medium px-3 py-1">{item.badge}</Badge>
                                                <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">{item.title}</h3>
                                                <p className="max-w-lg mx-auto text-muted-foreground text-lg leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-background/80 backdrop-blur-sm border hover:bg-background" />
                <CarouselNext className="right-2 bg-background/80 backdrop-blur-sm border hover:bg-background" />
            </Carousel>
            <div className="flex justify-center mt-4 gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={togglePlayPause}
                    className="rounded-full"
                >
                    {isPlaying ? (
                        <><Pause className="size-4 mr-2" /> Pause</>
                    ) : (
                        <><Play className="size-4 mr-2" /> Play</>
                    )}
                </Button>
            </div>
        </div>
    );
}
