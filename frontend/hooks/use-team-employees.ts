import useSWR, { KeyedMutator } from 'swr'
import { Employee } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'

const employeeRoute = '/api/team-employees/'

type TeamEmployeesReturnType = {
    employees: Employee[] | undefined,
    employeeError?: Error,
    isLoadingemployee: boolean,
    mutateEmployee: KeyedMutator<Employee[]>
}

const getTeamEmployees = async ([url, idToken]: [string, string]): Promise<Employee[]> => {
    return fetchGet<Employee[]>(url, { idToken })
}

const useTeamEmployees = (companyId: string, idToken: string): TeamEmployeesReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Employee[], FetchError>(
        [`${employeeRoute}${companyId}`, idToken], getTeamEmployees,
    );
    return {
        employees: data,
        employeeError: error,
        isLoadingemployee: isValidating,
        mutateEmployee: mutate,
    }
}

export {
    useTeamEmployees,
}