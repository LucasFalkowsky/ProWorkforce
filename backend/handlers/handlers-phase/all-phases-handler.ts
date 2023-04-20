import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Phase } from '@prisma/client';
import { allPhasesQuerySchema } from '@/backend/schemas/phase-schema';
import { getAllPhasesService } from '@/backend/services/phase-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Phase[]>
): Promise<void> {
    const { method } = req

    try {
        const idToken = getIdTokenOrThrow(req);
        const { projectId  } = validateOrThrow(allPhasesQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                return getAllPhasesService(projectId, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
