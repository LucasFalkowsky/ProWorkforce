import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { calendarQuerySchema } from '../../schemas/calendar-schema';
import { WeekData } from '../../../frontend/components/molecules/m-week-row';
import { getCalendarService } from '../../services/calendar-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WeekData[]>
): Promise<void> {
    const { method } = req

    try {
        switch (method) {
            case HTTPMethod.GET: {
                const { countryCode, projectId  } = validateOrThrow(calendarQuerySchema, req.query);
                return getCalendarService(projectId, countryCode, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
