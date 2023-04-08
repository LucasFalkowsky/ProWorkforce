import axios from 'axios'
import useSWR, { KeyedMutator } from 'swr'
import { User } from "@prisma/client"

const userApi = axios.create({
    baseURL: 'https://localhost:5000'
})
const userRoute = '/api/user/'

type UserReturnType = {
    user?: User,
    userError?: Error,
    isLoadingUser: boolean,
    mutateUser: KeyedMutator<User>
}

const getUser = async (url: string, idToken: string): Promise<User> => {
    const response = await userApi.get(userRoute)
    return response.data
}

const useUser = (userId: string, idToken: string): UserReturnType => {
    const url = [`${userRoute}${userId}`, idToken]
    const { data, error, isValidating, mutate } = useSWR(url, getUser)
    return {
        user: data,
        userError: error,
        isLoadingUser: isValidating,
        mutateUser: mutate,
    }
}

export {
    useUser
}