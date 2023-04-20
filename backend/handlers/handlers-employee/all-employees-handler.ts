import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Employee } from '@prisma/client';
import { allEmployeesQuerySchema } from '../../schemas/employee-schema';
import { getAllEmployeesService } from '@/backend/services/employee-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Employee[]>
): Promise<void> {
    const { method } = req

    try {
        const idToken = getIdTokenOrThrow(req);
        const { companyId  } = validateOrThrow(allEmployeesQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                return getAllEmployeesService(companyId, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}