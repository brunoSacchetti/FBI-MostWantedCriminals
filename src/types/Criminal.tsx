export interface Criminal {
    id: string;
    title: string;
    nationality: string,
    description?: string;
    reward?: string;
    charges?: string;
    images?: { original: string }[];
    sex: string;
    url?: string;
    files?: {url: string, name: string}[];
}