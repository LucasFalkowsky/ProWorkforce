import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Project } from '@prisma/client';
import { newProjectQuerySchema, patchProjectQuerySchema, projectQuerySchema } from '../../schemas/project-schema';
import { getProjectService, patchProjectService, postProjectService } from '@/backend/services/project-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Project>
): Promise<void> {
    const { method } = req

    try {
        switch (method) {
            case HTTPMethod.GET: {
                const { projectId  } = validateOrThrow(projectQuerySchema, req.query);
                return getProjectService(projectId, res);
            }
            case HTTPMethod.POST: {
                const data = JSON.parse(req.body);
                const dateArray = data.startDate.split("-");
                const date = new Date(dateArray[0],dateArray[1]-1,dateArray[2]); 
                const newProjectData = validateOrThrow(newProjectQuerySchema, { ...data, startDate: date} );
                return postProjectService(newProjectData, res);
            }
            case HTTPMethod.PATCH: {
                const data = JSON.parse(req.body);
                const date = new Date(data.startdate);
                const patchProjectData = validateOrThrow(patchProjectQuerySchema, { ...data, startdate: date, image: data.image || undefined, banner: data.banner || undefined} );
                return patchProjectService(patchProjectData, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
