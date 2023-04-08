import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { validateOrThrow } from './helpers/handler-helper';
import { userQuerySchema } from '../schemas/user-schema';
import { HTTPMethod } from './types/method';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    const { method } = req
    
    try {
        const { userId } = validateOrThrow(userQuerySchema, req.query)

        switch (method) {
            case HTTPMethod.GET: {
                const user = await prisma.user.findUnique({
                    where: { id: userId }
                })
                return void res.status(200).json(user);
            }
        }
    } catch (error) {
        return void res.status(400).end();
    }
}