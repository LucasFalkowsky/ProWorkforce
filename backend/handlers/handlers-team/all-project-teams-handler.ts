import type { NextApiRequest, NextApiResponse } from 'next';
import { handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { ProjectTeam, Team } from '@prisma/client';
import { AllProjectTeamsQuerySchema } from '@/backend/schemas/team-schema';
import { getAllProjectTeamsService, patchAllProjectTeamsService } from '@/backend/services/team-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Team[]>
): Promise<void> {
    const { method } = req

    try {
        const { projectId } = validateOrThrow(AllProjectTeamsQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                return getAllProjectTeamsService(projectId, res);
            }
            case HTTPMethod.PATCH: {
                const projectTeams = req.body.slice(2, -2).split('","') as string[];
                return patchAllProjectTeamsService(projectId, projectTeams, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
