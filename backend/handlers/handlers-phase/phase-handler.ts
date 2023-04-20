import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Phase } from '@prisma/client';
import { phaseQuerySchema } from '@/backend/schemas/phase-schema';
import { getPhaseService } from '@/backend/services/phase-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Phase>
): Promise<void> {
    const { method } = req

    try {
        const idToken = getIdTokenOrThrow(req);
        const { phaseId  } = validateOrThrow(phaseQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                return getPhaseService(phaseId, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
