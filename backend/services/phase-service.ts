import { prisma } from "@/lib/prisma";
import { Phase } from "@prisma/client";
import { NextApiResponse } from "next";

const getPhaseService = async (
    phaseId: string,
    res: NextApiResponse<Phase>,
): Promise<void> => {
    const phase = await prisma.phase.findUnique({
        where: { id: phaseId }
    })
    if (phase) {
        return void res.status(200).json(phase);
    }
    return void res.status(400).end();
}

const getAllPhasesService = async (
    projectId: string,
    res: NextApiResponse<Phase[]>,
): Promise<void> => {
    const phases = await prisma.phase.findMany({
        where: { project: projectId }
    })
    if (phases) {
        return void res.status(200).json(phases);
    }
    return void res.status(400).end();
}

export {
    getPhaseService,
    getAllPhasesService,
}