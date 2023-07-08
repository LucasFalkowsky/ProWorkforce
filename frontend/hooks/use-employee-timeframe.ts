import useSWR, { KeyedMutator } from 'swr'
import { EmployeeTimeframe, Phase } from "@prisma/client"
import fetchPost from './utils/http/post'
import fetchPatch from './utils/http/patch'
import fetchDelete from './utils/http/delete'

const employeeTimeframeRoute = '/api/employee-timeframe/'

export type PostEmployeeTimeframeType = {
    employee: string,
    phase: string,
    startDate: string,
    endDate: string,
    workweek: string,
}

const postEmployeeTimeframe = async (newEmployeeTimeframe: PostEmployeeTimeframeType): Promise<EmployeeTimeframe> => {
    const data = await fetchPost<PostEmployeeTimeframeType, EmployeeTimeframe>(`${employeeTimeframeRoute}${newEmployeeTimeframe.phase}`, newEmployeeTimeframe);
    return data;
}

const patchEmployeeTimeframe = async (updateEmployeeTimeframe: EmployeeTimeframe): Promise<EmployeeTimeframe> => {
    const data = await fetchPatch<EmployeeTimeframe, EmployeeTimeframe>(`${employeeTimeframeRoute}${updateEmployeeTimeframe.id}`, updateEmployeeTimeframe);
    return data;
}

const deleteEmployeeTimeframe = async (timeframeId: string): Promise<void> => {
    await fetchDelete(`${employeeTimeframeRoute}${timeframeId}`);
}

export {
    postEmployeeTimeframe,
    patchEmployeeTimeframe,
    deleteEmployeeTimeframe,
}