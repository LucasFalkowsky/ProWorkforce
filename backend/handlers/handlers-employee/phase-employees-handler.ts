import type { NextApiRequest, NextApiResponse } from 'next';
import { handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Employee } from '@prisma/client';
import { phaseEmployeesQuerySchema } from '../../schemas/employee-schema';
import { getPhaseEmployeesService } from '../../services/employee-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Employee[]>
): Promise<void> {
    const { method } = req

    try {
        const { phaseId  } = validateOrThrow(phaseEmployeesQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                return getPhaseEmployeesService(phaseId, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}