import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Employee } from '@prisma/client';
import { EmployeesInTeamQuerySchema } from '@/backend/schemas/team-schema';
import ServiceError from '@/backend/services/utils/service-error';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Employee[]>
): Promise<void> {
    const { method } = req

    try {
        const idToken = getIdTokenOrThrow(req);
        const { teamId  } = validateOrThrow(EmployeesInTeamQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
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
        }
    } catch (error) {
        return handleError(error, res)
    }
}

// TODO: Spezifikation der REST Schnittstelle