import { formatHeader, instance } from "../config"
import { CreateUserResponse, LoginUserPayload, RegisterUserPayload, User } from "../types"

export interface AuthUserResponse {
    user: User,
    token: string
}

export interface UpdateUserPayload {
    name?: string;
    password?: string;
    userId: string;
}

export async function loginUser(payload: LoginUserPayload) {
    try {
        const { data: user } = await instance.post<AuthUserResponse>('/login', payload)
        return user
    } catch (error) {
        throw error
    }
}

export async function updateUser(payload: UpdateUserPayload, token: string) {
    try {
        const headers = formatHeader(token);
        const { data: user } = await instance.patch<User>('/user', payload, headers)
        return user
    } catch (error) {
        throw error
    }
}

export async function deleteUser(userId: string, token: string) {
    try {
        const headers = formatHeader(token);
        await instance.delete<{}>(`/user/${userId}`, headers)
        return {}
    } catch (error) {
        throw error
    }
}

export async function registerUser(payload: RegisterUserPayload) {
    try {
        const {
            data: { token },
        } = await instance.post<CreateUserResponse>('/user/', payload)
        return token
    } catch (error) {
        throw error
    }
}

export type { LoginUserPayload }
