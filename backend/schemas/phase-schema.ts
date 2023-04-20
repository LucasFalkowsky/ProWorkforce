import { Describe, object, string } from "superstruct";
import { AllProjectsQuery, ProjectQuery } from "./query-types/project-query-types";
import { AllProjectPhasesQuery, PhaseQuery } from "./query-types/phases-query-types";

const phaseQuerySchema: Describe<PhaseQuery> = object({
    phaseId: string(),
});

const allPhasesQuerySchema: Describe<AllProjectPhasesQuery> = object({
    projectId: string(),
});

export {
    phaseQuerySchema,
    allPhasesQuerySchema,
}