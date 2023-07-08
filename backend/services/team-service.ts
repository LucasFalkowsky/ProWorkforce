import { prisma } from "@/lib/prisma";
import { Team } from "@prisma/client";
import { NextApiResponse } from "next";

const getTeamService = async (
    teamId: string,
    res: NextApiResponse<Team>,
): Promise<void> => {
    const team = await prisma.team.findUnique({
        where: { id: teamId }
    })
    if (team) {
        return void res.status(200).json(team);
    }
    return void res.status(400).end();
}

const getAllTeamsService = async (
    companyId: string,
    res: NextApiResponse<Team[]>,
): Promise<void> => {
    const allTeams = await prisma.team.findMany({
        where: { company: companyId }
    })
    if (allTeams) {
        return void res.status(200).json(allTeams);
    }
    return void res.status(400).end();
}

const getAllProjectTeamsService = async (
    projectId: string,
    res: NextApiResponse<Team[]>,
): Promise<void> => {
    const allProjectTeams = await prisma.projectTeam.findMany({
        where: { project: projectId }
    })
    if (allProjectTeams) {
        const allTeams = await prisma.team.findMany({
            where: { id: { in: allProjectTeams.map((projectTeam) => projectTeam.team) } }
        })
        if (allTeams) {
            return void res.status(200).json(allTeams);
        }
    }
    return void res.status(400).end();
}

const patchAllProjectTeamsService = async (
    projectId: string,
    projectTeams: string[],
    res: NextApiResponse<Team[]>,
): Promise<void> => {
    const oldProjectTeams = await prisma.projectTeam.findMany({
        where: { project: projectId }
    });
    const oldProjectTeamNames = oldProjectTeams.map((projectTeam) => projectTeam.team);
    projectTeams.map(async (projectTeam) => {
        if (!oldProjectTeamNames?.includes(projectTeam)) {
            await prisma.projectTeam.create({
                data: {
                    project: projectId,
                    team: projectTeam,
                }
            })
        }
    })
    oldProjectTeamNames.forEach(async (oldTeam) => {
        if (!projectTeams.includes(oldTeam)) {
            await prisma.projectTeam.deleteMany({
                where: {
                    project: projectId,
                    team: oldTeam,
                }
            })
        }
    });
    const newProjectTeams = await prisma.projectTeam.findMany({
        where: { project: projectId }
    });
    const newTeams = await prisma.team.findMany({
        where: { id: { in: newProjectTeams.map((projectTeam) => projectTeam.team) } }
    });
    return void res.status(200).json(newTeams);
}

export {
    getTeamService,
    getAllTeamsService,
    getAllProjectTeamsService,
    patchAllProjectTeamsService,
}