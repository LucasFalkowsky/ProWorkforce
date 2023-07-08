import { prisma } from "@/lib/prisma";
import { Project, State } from "@prisma/client";
import { NextApiResponse } from "next";
import { NewProjectQuery, PatchProjectQuery } from "../schemas/query-types/project-query-types";

const getProjectService = async (
    projectId: string,
    res: NextApiResponse<Project>,
): Promise<void> => {
    const project = await prisma.project.findUnique({
        where: { id: projectId }
    })
    if (project) {
        return void res.status(200).json(project);
    }
    return void res.status(400).end();
}

const postProjectService = async (
    project: NewProjectQuery,
    res: NextApiResponse<Project>,
): Promise<void> => {
    const newProject = await prisma.project.create({
        data: {
            name: project.name,
            company: project.company,
            startdate: project.startDate,
            customer: project.customer,
            description: project.description,
            state: State.DRAFT,
        }
    })
    if (!newProject) return void res.status(400).end();

    await Promise.all(project.assignedTeams.map(async (team) => {
        await prisma.projectTeam.create({
            data: {
                project: newProject.id,
                team: team,
            }
        })
    }))

    return void res.status(200).json(newProject);
}

const patchProjectService = async (
    project: PatchProjectQuery,
    res: NextApiResponse<Project>,
): Promise<void> => {
    const patchedProject = await prisma.project.update({
        where: { id: project.id },
        data: {
            name: project.name,
            company: project.company,
            customer: project.customer,
            description: project.description,
            image: project.image,
            banner: project.banner,
            state: project.state,
            startdate: project.startdate,
        }
    })
    if (!patchedProject) return void res.status(400).end();
    
    if (project.assignedTeams) {
        const projectTeams = await prisma.projectTeam.findMany({
            where: { project: project.id }
        });
        if (!projectTeams) {
            await Promise.all(project.assignedTeams.map(async (team) => {
                await prisma.projectTeam.create({
                    data: {
                        project: patchedProject.id,
                        team: team,
                    }
                })
            }))
        } else {
            const teams = projectTeams.map((projectTeam) => projectTeam.team);
            project.assignedTeams.forEach(async (projectTeam) => {
                if (!teams?.includes(projectTeam)) {
                    await prisma.projectTeam.create({
                        data: {
                            project: patchedProject.id,
                            team: projectTeam,
                        }
                    })
                }
            });
            teams.forEach(async (team) => {
                if (!project.assignedTeams?.includes(team)) {
                    await prisma.projectTeam.deleteMany({
                        where: {
                            project: patchedProject.id,
                            team: team,
                        }
                    })
                }
            });
        }
    }
    
    return void res.status(200).json(patchedProject);
}

const getAllProjectsService = async (
    companyId: string,
    res: NextApiResponse<Project[]>,
): Promise<void> => {
    const allProjects = await prisma.project.findMany({
        where: { company: companyId }
    })
    if (allProjects) {
        return void res.status(200).json(allProjects);
    }
    return void res.status(400).end();
}

export {
    getProjectService,
    postProjectService,
    patchProjectService,
    getAllProjectsService,
}