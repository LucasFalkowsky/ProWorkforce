import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Employee } from '@prisma/client';
import { EmployeesInTeamQuerySchema } from '@/backend/schemas/team-schema';
import ServiceError from '@/backend/services/utils/service-error';
import { getAllTeamEmployeesService } from '@/backend/services/employee-service';

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
                return getAllTeamEmployeesService(teamId, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
