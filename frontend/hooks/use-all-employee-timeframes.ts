import useSWR, { KeyedMutator } from 'swr'
import { Employee, EmployeeTimeframe, Project } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'
import fetchPost from './utils/http/post'
import PostError from './utils/http/post-error'

const allEmployeeTimeframesRoute = '/api/all-employee-timeframes/'

type AllEmployeeTimeframesReturnType = {
    allEmployeeTimeframes?: EmployeeTimeframe[],
    allEmployeeTimeframesError?: Error,
    isLoadingAllEmployeeTimeframes: boolean,
    mutateAllEmployeeTimeframes: KeyedMutator<EmployeeTimeframe[]>
}

const getAllEmployeeTimeframes = async ([url]: [string, string]): Promise<EmployeeTimeframe[]> => {
    return fetchGet<EmployeeTimeframe[]>(url)
}

const useAllEmployeeTimeframes = (projectId: string): AllEmployeeTimeframesReturnType => {
    const { data, error, isValidating, mutate } = useSWR<EmployeeTimeframe[], FetchError>(
        [`${allEmployeeTimeframesRoute}${projectId}`], getAllEmployeeTimeframes,
    );
    return {
        allEmployeeTimeframes: data,
        allEmployeeTimeframesError: error,
        isLoadingAllEmployeeTimeframes: isValidating,
        mutateAllEmployeeTimeframes: mutate,
    }
}

export {
    useAllEmployeeTimeframes,
}