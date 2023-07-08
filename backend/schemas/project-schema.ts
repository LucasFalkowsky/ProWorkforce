import { Describe, array, date, object, optional, string, enums } from "superstruct";
import { AllProjectsQuery, NewProjectQuery, PatchProjectQuery, ProjectQuery } from "./query-types/project-query-types";
import { State } from "@prisma/client";

const projectQuerySchema: Describe<ProjectQuery> = object({
    projectId: string(),
});

const newProjectQuerySchema: Describe<NewProjectQuery> = object({
    name: string(),
    company: string(),
    assignedTeams: array(string()),
    startDate: date(),
    customer: optional(string()),
    description: optional(string()),
});

const patchProjectQuerySchema: Describe<PatchProjectQuery> = object({
    id: string(),
    name: string(),
    company: string(),
    customer: optional(string()),
    description: optional(string()),
    image: optional(string()),
    banner: optional(string()),
    state: optional(enums(Object.values(State))),
    assignedTeams: optional(array(string())),
    startdate: optional(date()),
});

const allProjectsQuerySchema: Describe<AllProjectsQuery> = object({
    companyId: string(),
});

export {
    projectQuerySchema,
    newProjectQuerySchema,
    allProjectsQuerySchema,
    patchProjectQuerySchema,
}