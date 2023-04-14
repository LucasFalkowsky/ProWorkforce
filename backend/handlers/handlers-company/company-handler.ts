import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Company } from '@prisma/client';
import { companyQuerySchema } from '../../schemas/company-schema';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Company>
): Promise<void> {
    const { method } = req

    try {
        const idToken = getIdTokenOrThrow(req);
        const { companyId  } = validateOrThrow(companyQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                const company = await prisma.company.findUnique({
                    where: { id: companyId }
                })
                if (company) {
                    return void res.status(200).json(company);
                }
                return void res.status(400).end();
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}

// TODO: Spezifikation der REST Schnittstelle