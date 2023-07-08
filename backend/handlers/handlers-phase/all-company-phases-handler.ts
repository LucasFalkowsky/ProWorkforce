import type { NextApiRequest, NextApiResponse } from 'next';
import { handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Phase } from '@prisma/client';
import { allCompanyPhasesQuerySchema } from '@/backend/schemas/phase-schema';
import { getAllPhasesService } from '@/backend/services/phase-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Phase[]>
): Promise<void> {
    const { method } = req

    try {
        const { companyId  } = validateOrThrow(allCompanyPhasesQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                return getAllPhasesService(companyId, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
