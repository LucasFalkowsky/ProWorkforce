import useSWR, { KeyedMutator } from 'swr'
import { Employee } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'

const employeeRoute = '/api/employee/'

type EmployeeReturnType = {
    employee?: Employee,
    employeeError?: Error,
    isLoadingemployee: boolean,
    mutateEmployee: KeyedMutator<Employee>
}

const getEmployee = async ([url, idToken]: [string, string]): Promise<Employee> => {
    return fetchGet<Employee>(url, { idToken })
}

const useEmployee = (companyId: string, idToken: string): EmployeeReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Employee, FetchError>(
        [`${employeeRoute}${companyId}`, idToken], getEmployee,
    );
    return {
        employee: data,
        employeeError: error,
        isLoadingemployee: isValidating,
        mutateEmployee: mutate,
    }
}

export {
    useEmployee,
}