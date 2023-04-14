import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getIdTokenOrThrow, handleError, validateOrThrow } from '../helpers/handler-helper';
import { HTTPMethod } from '../types/method';
import { Employee } from '@prisma/client';
import { allEmployeesQuerySchema } from '../../schemas/employee-schema';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Employee[]>
): Promise<void> {
    const { method } = req

    try {
        const idToken = getIdTokenOrThrow(req);
        const { companyId  } = validateOrThrow(allEmployeesQuerySchema, req.query);

        switch (method) {
            case HTTPMethod.GET: {
                const employees = await prisma.employee.findMany({
                    where: { company: companyId }
                })
                if (employees) {
                    return void res.status(200).json(employees);
                }
                return void res.status(400).end();
            }
        }
    } catch (error) {
        return handleError(error, res)
    }
}

// TODO: Spezifikation der REST Schnittstelle