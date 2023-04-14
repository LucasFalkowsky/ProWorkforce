import useSWR, { KeyedMutator } from 'swr'
import { Project } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'

const projectRoute = '/api/all-projects/'

type AllProjectsReturnType = {
    allProjects?: Project[],
    allProjectsError?: Error,
    isLoadingAllProjects: boolean,
    mutateAllProjects: KeyedMutator<Project[]>
}

const getAllProjects = async ([url, idToken]: [string, string]): Promise<Project[]> => {
    return fetchGet<Project[]>(url, { idToken })
}

const useAllProjects = (projectId: string, idToken: string): AllProjectsReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Project[], FetchError>(
        [`${projectRoute}${projectId}`, idToken], getAllProjects,
    );
    return {
        allProjects: data,
        allProjectsError: error,
        isLoadingAllProjects: isValidating,
        mutateAllProjects: mutate,
    }
}

export {
    useAllProjects
}