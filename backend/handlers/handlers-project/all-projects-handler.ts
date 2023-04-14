import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Project } from '@prisma/client';
import { allProjectsQuerySchema } from '../../schemas/project-schema';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Project[]>
): Promise<void> {
    const { method } = req

    try {
        const idToken = getIdTokenOrThrow(req);
        const { companyId  } = validateOrThrow(allProjectsQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                const allProjects = await prisma.project.findMany({
                    where: { company: companyId }
                })
                if (allProjects) {
                    return void res.status(200).json(allProjects);
                }
                return void res.status(400).end();
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}

// TODO: Spezifikation der REST Schnittstelle