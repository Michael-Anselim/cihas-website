import type { PaginatedResponse } from './api-response';

export type AdmissionWindow = {
    id: number;
    academic_year: string;
    start_date: string;
    end_date: string;
    admission_window: string;
    status: string;
};

export type AdmissionWindowResponse = PaginatedResponse<AdmissionWindow>;
