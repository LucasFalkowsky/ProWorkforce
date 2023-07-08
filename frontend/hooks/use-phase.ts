import useSWR, { KeyedMutator } from 'swr'
import { Phase } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'
import fetchPost from './utils/http/post'
import fetchPatch from './utils/http/patch'

const phaseRoute = '/api/phase/'

export type PostPhaseType = {
    name: string,
    project: string,
    startDate: string,
    endDate: string,
    dependency: string,
    phaseteam: string,
}

type PhaseReturnType = {
    phase?: Phase,
    phaseError?: Error,
    isLoadingPhase: boolean,
    mutatePhase: KeyedMutator<Phase>
}

const getPhase = async ([url, idToken]: [string, string]): Promise<Phase> => {
    return fetchGet<Phase>(url, { idToken })
}

const usePhase = (phaseId: string): PhaseReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Phase, FetchError>(
        [`${phaseRoute}${phaseId}`], getPhase,
    );
    return {
        phase: data,
        phaseError: error,
        isLoadingPhase: isValidating,
        mutatePhase: mutate,
    }
}

const postPhase = async (newPhase: PostPhaseType): Promise<Phase> => {
    const data = await fetchPost<PostPhaseType, Phase>(`${phaseRoute}${newPhase.project}`, newPhase);
    return data;
}

const patchPhase = async (updatePhase: Phase): Promise<Phase> => {
    const data = await fetchPatch<Phase, Phase>(`${phaseRoute}${updatePhase.project}`, updatePhase);
    return data;
}

export {
    usePhase,
    postPhase,
    patchPhase,
}