import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { userQuerySchema } from '../../schemas/user-schema';
import { HTTPMethod } from '../types/method';
import { User } from '@prisma/client';
import { getUserService } from '@/backend/services/user-service';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User>
): Promise<void> {
    const { method } = req

    try {
        const idToken = getIdTokenOrThrow(req);
        const { userId  } = validateOrThrow(userQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                return getUserService(userId, res);
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}
