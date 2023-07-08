import type { NextApiRequest, NextApiResponse } from 'next';
import { handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Team } from '@prisma/client';
import { AllTeamsQuerySchema } from '@/backend/schemas/team-schema';
import { getAllTeamsService } from '@/backend/services/team-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Team[]>
): Promise<void> {
    const { method } = req

    try {
        const { companyId  } = validateOrThrow(AllTeamsQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                return getAllTeamsService(companyId, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
