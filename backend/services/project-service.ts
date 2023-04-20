import { prisma } from "@/lib/prisma";
import { Phase, Project } from "@prisma/client";
import { NextApiResponse } from "next";

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

const getAllProjectsService = async (
    companyId: string,
    res: NextApiResponse<Project[]>,
): Promise<void> => {
    const allProjects = await prisma.project.findMany({
        where: { company: companyId }
    })
    console.log(allProjects);
    if (allProjects) {
        return void res.status(200).json(allProjects);
    }
    return void res.status(400).end();
}

export {
    getProjectService,
    getAllProjectsService,
}