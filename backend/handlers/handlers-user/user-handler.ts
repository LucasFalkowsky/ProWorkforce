import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { userQuerySchema } from '../../schemas/user-schema';
import { HTTPMethod } from '../types/method';
import { User } from '@prisma/client';

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
                const user = await prisma.user.findUnique({
                    where: { id: userId }
                })
                if (user) {
                    return void res.status(200).json(user);
                }
                return void res.status(400).end();
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}

// TODO: Spezifikation der REST Schnittstelle