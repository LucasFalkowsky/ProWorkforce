import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Phase } from '@prisma/client';
import { phaseQuerySchema } from '@/backend/schemas/phase-schema';

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
                const phase = await prisma.phase.findUnique({
                    where: { id: phaseId }
                })
                if (phase) {
                    return void res.status(200).json(phase);
                }
                return void res.status(400).end();
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
