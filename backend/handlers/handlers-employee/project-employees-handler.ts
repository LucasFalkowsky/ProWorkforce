import type { NextApiRequest, NextApiResponse } from 'next';
import { handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Employee } from '@prisma/client';
import { projectEmployeesQuerySchema } from '../../schemas/employee-schema';
import { getProjectEmployeesService } from '@/backend/services/employee-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Employee[]>
): Promise<void> {
    const { method } = req

    try {
        const { projectId  } = validateOrThrow(projectEmployeesQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                return getProjectEmployeesService(projectId, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}