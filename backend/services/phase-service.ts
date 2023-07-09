import { prisma } from "../../lib/prisma";
import { Phase } from "@prisma/client";
import { NextApiResponse } from "next";
import { NewProjectQuery, PatchProjectQuery } from "../schemas/query-types/project-query-types";
import { NewPhaseQuery, PatchPhaseQuery } from "../schemas/query-types/phases-query-types";

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

const postPhaseService = async (
    phase: NewPhaseQuery,
    res: NextApiResponse<Phase>,
): Promise<void> => {
    const newPhase = await prisma.phase.create({
        data: {
            name: phase.name,
            project: phase.project,
            startDate: phase.startDate,
            endDate: phase.endDate,
            dependencies: phase.dependency,
            phaseteam: phase.phaseteam,
        }
    })
    if (newPhase) {
        return void res.status(200).json(newPhase);
    }
    return void res.status(400).end();
}

const patchPhaseService = async (
    phase: PatchPhaseQuery,
    res: NextApiResponse<Phase>,
): Promise<void> => {
    const patchedPhase = await prisma.phase.update({
        where: { id: phase.id },
        data: {
            id: phase.id,
            name: phase.name,
            project: phase.project,
            is_active: phase.is_active,
            startDate: phase.startDate,
            endDate: phase.endDate,
            optimisticGuess: phase.optimisticGuess,
            mostLikelyGuess: phase.mostLikelyGuess,
            pessimisticGuess: phase.pessimisticGuess,
            delay: phase.delay,
            dependencies: phase.dependencies,
            is_acknowledged: phase.is_acknowledged,
            is_done: phase.is_done,
            phaseteam: phase.phaseteam,
        }
    })
    if (patchedPhase) {
        return void res.status(200).json(patchedPhase);
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
    console.log(phases)
    if (phases) {
        return void res.status(200).json(phases);
    }
    return void res.status(400).end();
}

const getAllCompanyPhasesService = async (
    companyId: string,
    res: NextApiResponse<Phase[]>,
): Promise<void> => {
    const projects = await prisma.project.findMany({
        where: { company: companyId }
    });
    const phases: Phase[] = []
    projects.forEach((project) => {
        return prisma.phase.findMany({
            where: { project: project.id }
        })
    });
    if (phases) {
        return void res.status(200).json(phases);
    }
    return void res.status(400).end();
}

export {
    getPhaseService,
    postPhaseService,
    patchPhaseService,
    getAllPhasesService,
    getAllCompanyPhasesService,
}