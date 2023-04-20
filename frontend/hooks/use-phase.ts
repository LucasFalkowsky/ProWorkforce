import useSWR, { KeyedMutator } from 'swr'
import { Phase } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'

const phaseRoute = '/api/phase/'

type PhaseReturnType = {
    phase?: Phase,
    phaseError?: Error,
    isLoadingPhase: boolean,
    mutatePhase: KeyedMutator<Phase>
}

const getPhase = async ([url, idToken]: [string, string]): Promise<Phase> => {
    return fetchGet<Phase>(url, { idToken })
}

const usePhase = (phaseId: string, idToken: string): PhaseReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Phase, FetchError>(
        [`${phaseRoute}${phaseId}`, idToken], getPhase,
    );
    return {
        phase: data,
        phaseError: error,
        isLoadingPhase: isValidating,
        mutatePhase: mutate,
    }
}

export {
    usePhase
}