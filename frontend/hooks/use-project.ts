import useSWR, { KeyedMutator } from 'swr'
import { Project } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'

const projectRoute = '/api/project/'

type ProjectReturnType = {
    project?: Project,
    projectError?: Error,
    isLoadingProject: boolean,
    mutateProject: KeyedMutator<Project>
}

const getProject = async ([url, idToken]: [string, string]): Promise<Project> => {
    return fetchGet<Project>(url, { idToken })
}

const useProject = (projectId: string, idToken: string): ProjectReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Project, FetchError>(
        [`${projectRoute}${projectId}`, idToken], getProject,
    );
    return {
        project: data,
        projectError: error,
        isLoadingProject: isValidating,
        mutateProject: mutate,
    }
}

export {
    useProject
}