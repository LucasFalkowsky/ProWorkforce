import { Describe, object, string } from "superstruct";
import { AllProjectsQuery, ProjectQuery } from "./query-types/project-query-types";

const projectQuerySchema: Describe<ProjectQuery> = object({
    projectId: string(),
});

const allProjectsQuerySchema: Describe<AllProjectsQuery> = object({
    companyId: string(),
});

export {
    projectQuerySchema,
    allProjectsQuerySchema,
}