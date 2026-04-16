import { Badge } from '@/components/ui/badge';

interface SummaryCardProps {
    title: string;
    count: number;
    description?: string;
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export default function SummaryCard({ 
    title, 
    count, 
    description, 
    variant = 'default' 
}: SummaryCardProps) {
    return (
        <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 p-4 dark:border-sidebar-border">
            <div className="m-auto flex flex-col gap-2">
                <Badge className="text-2xl" variant={variant}>
                    {count.toString()}
                </Badge>
                <p className="font-semibold">{title}</p>
                {description && (
                    <p className="text-sm text-muted-foreground">{description}</p>
                )}
            </div>
        </div>
    );
}
