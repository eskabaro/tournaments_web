export class HttpError extends Error {
    constructor(
        public readonly status: number,
        public readonly statusText: string
    ) {
        super(`${status} ${statusText}`)
        this.name = 'HttpError'
    }
}
