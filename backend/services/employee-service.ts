import { prisma } from "@/lib/prisma";
import { Employee } from "@prisma/client";
import { NextApiResponse } from "next";

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

export {
    getEmployeeService,
    getAllEmployeesService,
    getAllTeamEmployeesService,
}