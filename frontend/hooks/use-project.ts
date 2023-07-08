import useSWR, { KeyedMutator } from 'swr'
import { Project } from "@prisma/client"
import fetchGet from './utils/http/get'
import FetchError from './utils/http/fetch-error'
import fetchPost from './utils/http/post'
import fetchPatch from './utils/http/patch'

const projectRoute = '/api/project/'

type PostProjectType = {
    name: string,
    company: string,
    assignedTeams: string[],
    customer?: string,
    description?: string,
    startDate?: string,
}

type PatchProjectType = Omit<Project, 'startdate'> & {
    startdate: Date | string | null,
}

type ProjectReturnType = {
    project?: Project,
    projectError?: Error,
    isLoadingProject: boolean,
    mutateProject: KeyedMutator<Project>
}

const getProject = async ([url]: [string, string]): Promise<Project> => {
    return fetchGet<Project>(url)
}

const useProject = (projectId: string): ProjectReturnType => {
    const { data, error, isValidating, mutate } = useSWR<Project, FetchError>(
        [`${projectRoute}${projectId}`], getProject,
    );
    return {
        project: data,
        projectError: error,
        isLoadingProject: isValidating,
        mutateProject: mutate,
    }
}

const postProject = async (newProject: PostProjectType): Promise<Project> => {
    const data = await fetchPost<PostProjectType, Project>(`${projectRoute}${newProject.company}`, newProject);
    return data;
}

const patchProject = async (updateProject: PatchProjectType): Promise<Project> => {
    const data = await fetchPatch<PatchProjectType, Project>(`${projectRoute}${updateProject.company}`, updateProject);
    return data;
}

export {
    useProject,
    postProject,
    patchProject
}