export interface Launch_service_provider {
    id: number;
    name: string;
    featured: boolean;
    type: string | null;
    country_code: string;
    abbrev: string;
    description: string;
    logo_url: string | null;
    image_url: string | null;
}