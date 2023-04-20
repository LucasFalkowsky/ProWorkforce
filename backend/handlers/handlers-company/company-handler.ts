import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Company } from '@prisma/client';
import { companyQuerySchema } from '../../schemas/company-schema';
import { getCompanyService } from '@/backend/services/company-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Company>,
): Promise<void> {
    const { method } = req

    try {
        const idToken = getIdTokenOrThrow(req);
        const { companyId  } = validateOrThrow(companyQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                return getCompanyService(companyId, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
