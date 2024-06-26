export function ensureError (error: unknown) : Error {
    if (error instanceof Error) return error
    return new Error("An unexpected error occurred")
}