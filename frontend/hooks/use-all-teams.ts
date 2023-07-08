import useSWR, { KeyedMutator } from 'swr'
import { ProjectTeam, Team } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'
import fetchPatch from './utils/http/patch'

const allTeamsRoute = '/api/all-teams/'
const allProjectTeamsRoute = '/api/all-project-teams/'

type AllTeamsReturnType = {
    allTeams?: Team[],
    allTeamsError?: Error,
    isLoadingAllTeams: boolean,
    mutateAllTeams: KeyedMutator<Team[]>
}

type AllProjectTeamsReturnType = {
    allProjectTeams?: Team[],
    allProjectTeamsError?: Error,
    isLoadingAllProjectTeams: boolean,
    mutateAllProjectTeams: KeyedMutator<Team[]>
}

const getAllTeams = async ([url]: [string, string]): Promise<Team[]> => {
    return fetchGet<Team[]>(url)
}

const useAllTeams = (companyId: string): AllTeamsReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Team[], FetchError>(
        [`${allTeamsRoute}${companyId}`], getAllTeams,
    );
    return {
        allTeams: data,
        allTeamsError: error,
        isLoadingAllTeams: isValidating,
        mutateAllTeams: mutate,
    }
}

const getAllProjectTeams = async ([url]: [string, string]): Promise<Team[]> => {
    return fetchGet<Team[]>(url)
}

const useAllProjectTeams = (projectId: string): AllProjectTeamsReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Team[], FetchError>(
        [`${allProjectTeamsRoute}${projectId}`], getAllProjectTeams,
    );
    return {
        allProjectTeams: data,
        allProjectTeamsError: error,
        isLoadingAllProjectTeams: isValidating,
        mutateAllProjectTeams: mutate,
    }
}

const patchAllProjectTeams = async (projectId: string, projectTeams: string[]): Promise<Team[]> => {
    const data = await fetchPatch<string[], Team[]>(`${allProjectTeamsRoute}${projectId}`, projectTeams);
    return data;
}

export {
    useAllTeams,
    useAllProjectTeams,
    patchAllProjectTeams,
}