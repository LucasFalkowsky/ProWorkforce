import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { EmployeeTimeframe, Project } from '@prisma/client';
import { allProjectsQuerySchema } from '../../schemas/project-schema';
import { getAllProjectsService } from '@/backend/services/project-service';
import { getAllEmployeeTimeframesService } from '@/backend/services/employee-timeframe-service';
import { allEmployeeTimeframesQuerySchema } from '@/backend/schemas/employee-timeframe-schema';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<EmployeeTimeframe[]>
): Promise<void> {
    const { method } = req

    try {
        const { projectId  } = validateOrThrow(allEmployeeTimeframesQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                const allProjectEmployeeTimeframmes = await getAllEmployeeTimeframesService(projectId, res);
                return allProjectEmployeeTimeframmes;
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
