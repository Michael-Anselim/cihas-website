import type { PaginatedResponse } from './api-response';

export type Galery = {
    id: number;
    label: string;
    description: string;
    category: string;
    image_path: string;
    created_at: string;
    updated_at: string;
};

export type GaleryResponse = PaginatedResponse<Galery>;
