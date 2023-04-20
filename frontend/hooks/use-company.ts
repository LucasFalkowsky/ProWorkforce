import useSWR, { KeyedMutator } from 'swr'
import { Company } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'

const companyRoute = '/api/company/'

type CompanyReturnType = {
    company?: Company,
    companyError?: Error,
    isLoadingCompany: boolean,
    mutateCompany: KeyedMutator<Company>
}

const getCompany = async ([url, idToken]: [string, string]): Promise<Company> => {
    return fetchGet<Company>(url, { idToken })
}

const useCompany = (companyId: string, idToken: string): CompanyReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Company, FetchError>(
        [`${companyRoute}${companyId}`, idToken], getCompany,
    );
    return {
        company: data,
        companyError: error,
        isLoadingCompany: isValidating,
        mutateCompany: mutate,
    }
}

export {
    useCompany
}