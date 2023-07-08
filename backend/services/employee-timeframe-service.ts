import { prisma } from "@/lib/prisma";
import { EmployeeTimeframe, Project, State } from "@prisma/client";
import { NextApiResponse } from "next";
import { NewProjectQuery, PatchProjectQuery } from "../schemas/query-types/project-query-types";
import { NewEmployeeTimeframeQuery, PatchEmployeeTimeframeQuery } from "../schemas/query-types/employee-timeframe-query-types";

const getEmployeeTimeframeService = async (
    employeeTimeframeId: string,
    res: NextApiResponse<EmployeeTimeframe>,
): Promise<void> => {
    const employeeTimeframe = await prisma.employeeTimeframe.findUnique({
        where: { id: employeeTimeframeId }
    })
    if (employeeTimeframe) {
        return void res.status(200).json(employeeTimeframe);
    }
    return void res.status(400).end();
}

const postEmployeeTimeframeService = async (
    employeeTimeframe: NewEmployeeTimeframeQuery,
    res: NextApiResponse<EmployeeTimeframe>,
): Promise<void> => {
    const newEmployeeTimeframe = await prisma.employeeTimeframe.create({
        data: {
            employee: employeeTimeframe.employee,
            phase: employeeTimeframe.phase,
            startDate: employeeTimeframe.startDate,
            endDate: employeeTimeframe.endDate,
            workweek: employeeTimeframe.workweek,
        }
    })
    if (!newEmployeeTimeframe) return void res.status(400).end();
    return void res.status(200).json(newEmployeeTimeframe);
}

const patchEmployeeTimeframeService = async (
    employeeTimeframe: PatchEmployeeTimeframeQuery,
    res: NextApiResponse<EmployeeTimeframe>,
): Promise<void> => {
    const patchedEmployeeTimeframe = await prisma.employeeTimeframe.update({
        where: { id: employeeTimeframe.id },
        data: {
            employee: employeeTimeframe.employee,
            phase: employeeTimeframe.phase,
            startDate: employeeTimeframe.startDate,
            endDate: employeeTimeframe.endDate,
            workweek: employeeTimeframe.workweek,
        }
    })
    if (!patchedEmployeeTimeframe) return void res.status(400).end();
    return void res.status(200).json(patchedEmployeeTimeframe);
}

const deleteEmployeeTimeframeService = async (
    timeframeId: string,
): Promise<void> => {
    await prisma.employeeTimeframe.delete({
        where: { id: timeframeId }
    })
}

const getAllEmployeeTimeframesService = async (
    projectId: string,
    res: NextApiResponse<EmployeeTimeframe[]>,
): Promise<void> => {
    const allPhases = await prisma.phase.findMany({
        where: { project: projectId }
    })
    const allEmployeeTimeframes = await prisma.employeeTimeframe.findMany({
        where: { phase: { in: allPhases.map(phase => phase.id) } }
    })
    if (!allEmployeeTimeframes) {
        return void res.status(400).end();
    }
    return void res.status(200).json(allEmployeeTimeframes);
}

export {
    getEmployeeTimeframeService,
    postEmployeeTimeframeService,
    patchEmployeeTimeframeService,
    deleteEmployeeTimeframeService,
    getAllEmployeeTimeframesService,
}