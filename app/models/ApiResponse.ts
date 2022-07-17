export interface ApiResponse<T> {
    data?: T
    Messages: Array<any>
    status: number
}

