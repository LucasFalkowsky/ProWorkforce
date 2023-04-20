import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Project } from '@prisma/client';
import { projectQuerySchema } from '../../schemas/project-schema';
import { getProjectService } from '@/backend/services/project-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Project>
): Promise<void> {
    const { method } = req

    try {
        const idToken = getIdTokenOrThrow(req);
        const { projectId  } = validateOrThrow(projectQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                return getProjectService(projectId, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
