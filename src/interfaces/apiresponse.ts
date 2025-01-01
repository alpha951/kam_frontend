export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    error?: Map<string, string>;
}