import type { NextApiRequest, NextApiResponse } from 'next';
import { handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { EmployeeTimeframe } from '@prisma/client';
import { deleteEmployeeTimeframeService, patchEmployeeTimeframeService, postEmployeeTimeframeService } from '@/backend/services/employee-timeframe-service';
import { newEmployeeTimeframeQuerySchema, patchEmployeeTimeframeQuerySchema } from '@/backend/schemas/employee-timeframe-schema';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<EmployeeTimeframe>
): Promise<void> {
    const { method } = req

    try {
        switch (method) {
            case HTTPMethod.POST: {
                const data = JSON.parse(req.body)
                const startdate = new Date(data.startDate);
                const enddate = new Date(data.endDate);
                const newEmployeeTimeframe = validateOrThrow(newEmployeeTimeframeQuerySchema, {...data, startDate: startdate, endDate: enddate});
                const employeeTimeframe = await postEmployeeTimeframeService(newEmployeeTimeframe, res);
                return employeeTimeframe;
            }
            case HTTPMethod.PATCH: {
                const data = JSON.parse(req.body)
                const startdate = new Date(data.startDate);
                const enddate = new Date(data.endDate);
                const newEmployeeTimeframe = validateOrThrow(patchEmployeeTimeframeQuerySchema, {...data, startDate: startdate, endDate: enddate});
                const employeeTimeframe = await patchEmployeeTimeframeService(newEmployeeTimeframe, res);
                return employeeTimeframe;
            }
            case HTTPMethod.DELETE: {
                const { timeframeId } = req.query
                const deletedEmployeeTimeframe = await deleteEmployeeTimeframeService(timeframeId as string);
                return deletedEmployeeTimeframe;
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
