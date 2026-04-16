import type { PaginatedResponse } from './api-response';

export type Post = {
    id: number;
    department_id: number;
    title: string;
    date: string;
    image: string;
    description: string;
    attachment: string;
    category: 'admissions' | 'academic' | 'announcements' | 'downloads' | 'sports';
    department?: {
        id: number;
        name: string;
    };
};

export type PostResponse = PaginatedResponse<Post>;
