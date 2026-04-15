import type { PaginatedResponse } from './api-response';
import type { Department } from './department';

export type Program = {
    id: number;
    name: string;
    image: string;
    description: string;
    requirements: string;
    department: Department;
    type: string;
    levels: string;
    status: string;
};

export type ProgramResponse = PaginatedResponse<Program>;
