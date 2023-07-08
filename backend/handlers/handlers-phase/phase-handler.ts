import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Phase } from '@prisma/client';
import { newPhaseQuerySchema, patchPhaseQuerySchema, phaseQuerySchema } from '@/backend/schemas/phase-schema';
import { getAllPhasesService, getPhaseService, patchPhaseService, postPhaseService } from '@/backend/services/phase-service';
import { postProjectService, patchProjectService } from '@/backend/services/project-service';
import { prisma } from '@/lib/prisma';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Phase>
): Promise<void> {
    const { method } = req

    try {
        switch (method) {
            case HTTPMethod.GET: {
                const { phaseId  } = validateOrThrow(phaseQuerySchema, req.query);
                return getPhaseService(phaseId, res);
            }
            case HTTPMethod.POST: {
                const data = JSON.parse(req.body);
                const startdate = new Date(data.startDate);
                const enddate = new Date(data.endDate);
                const newProjectData = validateOrThrow(newPhaseQuerySchema, { ...data, startDate: startdate, endDate: enddate} );
                return postPhaseService(newProjectData, res);
            }
            case HTTPMethod.PATCH: {
                const data = JSON.parse(req.body);
                const startdate = new Date(data.startDate);
                const enddate = new Date(data.endDate);
                const patchProjectData = validateOrThrow(patchPhaseQuerySchema, { ...data, startDate: startdate, endDate: enddate } );
                return patchPhaseService(patchProjectData, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
