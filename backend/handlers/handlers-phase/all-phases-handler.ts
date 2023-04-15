import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Phase } from '@prisma/client';
import { allPhasesQuerySchema } from '@/backend/schemas/phase-schema';

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
                const phases = await prisma.phase.findMany({
                    where: { project: projectId }
                })
                if (phases) {
                    return void res.status(200).json(phases);
                }
                return void res.status(400).end();
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
