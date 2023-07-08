import { prisma } from "@/lib/prisma";
import { Employee, EmployeeTimeframe } from "@prisma/client";
import { NextApiResponse } from "next";
import NotFoundError from "./utils/not-found-error";
import { colors } from "@/frontend/styles/colors";

const getEmployeeService = async (
    employeeId: string,
    res: NextApiResponse<Employee>,
): Promise<void> => {
    const employees = await prisma.employee.findUnique({
        where: { id: employeeId }
    })
    if (employees) {
        return void res.status(200).json(employees);
    }
    return void res.status(400).end();
}

const getAllEmployeesService = async (
    companyId: string,
    res: NextApiResponse<Employee[]>,
): Promise<void> => {
    const employees = await prisma.employee.findMany({
        where: { company: companyId }
    })
    if (employees) {
        return void res.status(200).json(employees);
    }
    return void res.status(400).end();
}

const getAllTeamEmployeesService = async (
    teamId: string,
    res: NextApiResponse<Employee[]>,
): Promise<void> => {
    const employeeTeams = await prisma.employeeTeam.findMany({
        where: { team: teamId }
    })
    const employees = await prisma.employee.findMany({
    where: {
        id: {
            in: employeeTeams.map((team) => team.employee)
        }
    }
    });
    if (employees) {
        return void res.status(200).json(employees);
    }
    return void res.status(400).end();
}

const getProjectEmployeesService = async (
    companyId: string,
    res: NextApiResponse<Employee[]>,
): Promise<void> => {
    const project = await prisma.project.findUnique({
        where: { id: companyId }
    })
    if (!project) throw new NotFoundError('Project for ProjectEmployeesService not found');

    const phases = await prisma.phase.findMany({
        where: { project: project.id }
    });
    if (!phases) throw new NotFoundError('Phases for ProjectEmployeesService not found');

    const employeeTimeframes = await Promise.all(phases.map(async (phase) => {
        const timeframes = await prisma.employeeTimeframe.findMany({
            where: { phase: phase.id }
        });
        if (!timeframes) throw new NotFoundError('Timeframes for ProjectEmployeesService not found');

        return timeframes;
    }));
    if (!employeeTimeframes) throw new NotFoundError('EmployeeTimeframes for ProjectEmployeesService not found');

    const employees: Employee[] = await Promise.all(employeeTimeframes.map(async (employeeTimeframe) => {
        const employee = await prisma.employee.findUnique({
            where: { id: employeeTimeframe.pop()!.employee }
        });
        if (!employee) throw new NotFoundError('Employee for ProjectEmployeesService not found')
        return employee;
    }))
    if (employees) {
        return void res.status(200).json(employees);
    }
    return void res.status(400).end();
}

const getPhaseEmployeesService = async (
    phaseId: string,
    res: NextApiResponse<Employee[]>,
): Promise<void> => {
    const phase = await prisma.phase.findUnique({
        where: { id: phaseId }
    });
    if (!phase) throw new NotFoundError('Phase for ProjectEmployeesService not found');
    const employeeTeams = await prisma.employeeTeam.findMany({
        where: { team: phase.phaseteam }
    })

    const employees: Employee[] = await Promise.all(employeeTeams.map(async (employeeTeam) => {
        const employee = await prisma.employee.findUnique({
            where: { id: employeeTeam.employee }
        });
        if (!employee) throw new NotFoundError('Employee for ProjectEmployeesService not found')
        return employee;
    }))
    if (employees) {
        return void res.status(200).json(employees);
    }
    return void res.status(400).end();
}

export {
    getEmployeeService,
    getAllEmployeesService,
    getAllTeamEmployeesService,
    getProjectEmployeesService,
    getPhaseEmployeesService,
}