import useSWR, { KeyedMutator } from 'swr'
import { User } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'

const userRoute = '/api/user/'

type UserReturnType = {
    user?: User,
    userError?: Error,
    isLoadingUser: boolean,
    mutateUser: KeyedMutator<User>
}

const getUser = async ([url, idToken]: [string, string]): Promise<User> => {
    return fetchGet<User>(url, { idToken })
}

const useUser = (userId: string, idToken: string): UserReturnType => {
    const { data, error, isValidating, mutate } = useSWR<User, FetchError>(
        [`${userRoute}${userId}`, idToken], getUser,
    );
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