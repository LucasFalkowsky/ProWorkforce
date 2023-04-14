import useSWR, { KeyedMutator } from 'swr'
import { Company } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'

const companyRoute = '/api/company/'

type companyReturnType = {
    company?: Company,
    companyError?: Error,
    isLoadingcompany: boolean,
    mutatecompany: KeyedMutator<Company>
}

const getCompany = async ([url, idToken]: [string, string]): Promise<Company> => {
    return fetchGet<Company>(url, { idToken })
}

const useCompany = (companyId: string, idToken: string): companyReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Company, FetchError>(
        [`${companyRoute}${companyId}`, idToken], getCompany,
    );
    return {
        company: data,
        companyError: error,
        isLoadingcompany: isValidating,
        mutatecompany: mutate,
    }
}

export {
    useCompany
}