import type { ReactNode } from 'react';
import type { BreadcrumbItem } from '@/types/navigation';

export type AppLayoutProps = {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
};

export type AppVariant = 'header' | 'sidebar';

export type FlashToast = {
    type: 'success' | 'info' | 'warning' | 'error';
    message: string;
};

export type AuthLayoutProps = {
    children?: ReactNode;
    name?: string;
    title?: string;
    description?: string;
};

export type TextInputFields = {
    name: string;
    type?: string;
    label: string;
    required: boolean;
    placeHolder?: string;
};

export type SelectFields = {
    name: string;
    label: string;
    errors?: string;
    defaultValue?: string;
    required?: boolean;
    placeHolder?: string;
    items: { value: string; label: string }[];
};

export type TextAreaFields = {
    name: string;
    label: string;
    errors?: string;
    defaultValue?: string;
    required?: boolean;
};
