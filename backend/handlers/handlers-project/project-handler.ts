import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Project } from '@prisma/client';
import { projectQuerySchema } from '../../schemas/project-schema';

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
                const project = await prisma.project.findUnique({
                    where: { id: projectId }
                })
                if (project) {
                    return void res.status(200).json(project);
                }
                return void res.status(400).end();
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}

// TODO: Spezifikation der REST Schnittstelle