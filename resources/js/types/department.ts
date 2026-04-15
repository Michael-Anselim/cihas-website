import type { PaginatedResponse } from './api-response';

export type Department = {
    id: number;
    name: string;
    code: string;
    description: string;
    status: 'active' | 'inactive';
};

export type DepartmentResponse = PaginatedResponse<Department>;
