import type { NextApiRequest, NextApiResponse } from 'next';
import { handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { phaseCalendarQuerySchema } from '../../schemas/calendar-schema';
import { WeekData } from '../../../frontend/components/molecules/m-week-row';
import { getPhaseCalendarService } from '../../services/phase-calendar-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WeekData[]>
): Promise<void> {
    const { method } = req

    try {
        switch (method) {
            case HTTPMethod.GET: {
                const { countryCode, phaseId  } = validateOrThrow(phaseCalendarQuerySchema, req.query);
                return getPhaseCalendarService(phaseId, countryCode, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
