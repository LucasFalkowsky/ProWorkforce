import useSWR, { KeyedMutator } from 'swr'
import { Employee } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'

const employeeRoute = '/api/all-employees/'

type AllEmployeesReturnType = {
    employees: Employee[] | undefined,
    employeeError?: Error,
    isLoadingemployee: boolean,
    mutateEmployee: KeyedMutator<Employee[]>
}

const getAllEmployees = async ([url, idToken]: [string, string]): Promise<Employee[]> => {
    return fetchGet<Employee[]>(url, { idToken })
}

const useAllEmployees = (companyId: string, idToken: string): AllEmployeesReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Employee[], FetchError>(
        [`${employeeRoute}${companyId}`, idToken], getAllEmployees,
    );
    return {
        employees: data,
        employeeError: error,
        isLoadingemployee: isValidating,
        mutateEmployee: mutate,
    }
}

export {
    useAllEmployees,
}