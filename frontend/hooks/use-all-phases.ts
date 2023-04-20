import useSWR, { KeyedMutator } from 'swr'
import { Phase } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'

const allPhasesRoute = '/api/all-phases/'

type AllPhasesReturnType = {
    allPhases?: Phase[],
    allPhasesError?: Error,
    isLoadingAllPhases: boolean,
    mutateAllPhases: KeyedMutator<Phase[]>
}

const getAllPhases = async ([url, idToken]: [string, string]): Promise<Phase[]> => {
    return fetchGet<Phase[]>(url, { idToken })
}

const useAllPhases = (projectId: string, idToken: string): AllPhasesReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Phase[], FetchError>(
        [`${allPhasesRoute}${projectId}`, idToken], getAllPhases,
    );
    return {
        allPhases: data,
        allPhasesError: error,
        isLoadingAllPhases: isValidating,
        mutateAllPhases: mutate,
    }
}

export {
    useAllPhases
}