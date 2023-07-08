import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Project } from '@prisma/client';
import { allProjectsQuerySchema } from '../../schemas/project-schema';
import { getAllProjectsService } from '@/backend/services/project-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Project[]>
): Promise<void> {
    const { method } = req

    try {
        const { companyId  } = validateOrThrow(allProjectsQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                const allProjects = await getAllProjectsService(companyId, res);
                return allProjects;
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
