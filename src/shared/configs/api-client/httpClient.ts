import { HttpError } from './httpError'

interface FetchOptions extends RequestInit {
    next?: NextFetchRequestConfig
}

export class HttpClient {
    protected async request<T>(url: string, options?: FetchOptions): Promise<T> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
            headers: { 'Content-Type': 'application/json' },
            ...options
        })

        if (!response.ok) {
            throw new HttpError(response.status, response.statusText)
        }

        return response.json() as Promise<T>
    }

    get<T>(url: string, options?: Omit<FetchOptions, 'body' | 'method'>) {
        return this.request<T>(url, { ...options, method: 'GET' })
    }

    post<T>(url: string, body: unknown, options?: FetchOptions) {
        return this.request<T>(url, {
            ...options,
            method: 'POST',
            body: JSON.stringify(body)
        })
    }

    put<T>(url: string, body: unknown, options?: FetchOptions) {
        return this.request<T>(url, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(body)
        })
    }

    patch<T>(url: string, body: unknown, options?: FetchOptions) {
        return this.request<T>(url, {
            ...options,
            method: 'PATCH',
            body: JSON.stringify(body)
        })
    }

    delete<T>(url: string, options?: FetchOptions) {
        return this.request<T>(url, { ...options, method: 'DELETE' })
    }
}
