import useSWR, { KeyedMutator } from 'swr'
import { Project } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'
import fetchPost from './utils/http/post'
import PostError from './utils/http/post-error'

const allProjectsRoute = '/api/all-projects/'

type AllProjectsReturnType = {
    allProjects?: Project[],
    allProjectsError?: Error,
    isLoadingAllProjects: boolean,
    mutateAllProjects: KeyedMutator<Project[]>
}

const getAllProjects = async ([url]: [string, string]): Promise<Project[]> => {
    return fetchGet<Project[]>(url)
}

const useAllProjects = (companyId: string): AllProjectsReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Project[], FetchError>(
        [`${allProjectsRoute}${companyId}`], getAllProjects,
    );
    return {
        allProjects: data,
        allProjectsError: error,
        isLoadingAllProjects: isValidating,
        mutateAllProjects: mutate,
    }
}

export {
    useAllProjects,
}