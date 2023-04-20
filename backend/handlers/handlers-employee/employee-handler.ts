import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Employee } from '@prisma/client';
import { employeeQuerySchema } from '../../schemas/employee-schema';
import { getEmployeeService } from '@/backend/services/employee-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Employee>
): Promise<void> {
    const { method } = req

    try {
        const idToken = getIdTokenOrThrow(req);
        const { employeeId  } = validateOrThrow(employeeQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                return getEmployeeService(employeeId, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}