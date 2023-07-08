import useSWR, { KeyedMutator } from 'swr'
import { ProjectTeam, Team } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'
import fetchPatch from './utils/http/patch'

const TeamsRoute = '/api/team/'

type TeamReturnType = {
    team?: Team,
    teamError?: Error,
    isLoadingTeam: boolean,
    mutateTeam: KeyedMutator<Team>
}

const getTeam = async ([url]: [string, string]): Promise<Team> => {
    return fetchGet<Team>(url)
}

const useTeam = (teamId: string): TeamReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Team, FetchError>(
        [`${TeamsRoute}${teamId}`], getTeam,
    );
    return {
        team: data,
        teamError: error,
        isLoadingTeam: isValidating,
        mutateTeam: mutate,
    }
}

export {
    useTeam,
}