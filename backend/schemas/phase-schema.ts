import { Describe, boolean, date, nullable, number, object, optional, string } from "superstruct";
import { AllCompanyProjectPhasesQuery, AllProjectPhasesQuery, NewPhaseQuery, PatchPhaseQuery, PhaseQuery } from "./query-types/phases-query-types";

const phaseQuerySchema: Describe<PhaseQuery> = object({
    phaseId: string(),
});

const newPhaseQuerySchema: Describe<NewPhaseQuery> = object({
    name: string(),
    project: string(),
    startDate: date(),
    endDate: date(),
    dependency: optional(string()),
    phaseteam: string(),
});

const patchPhaseQuerySchema: Describe<PatchPhaseQuery> = object({
    id: string(),
    name: string(),
    project: string(),
    is_active: optional(boolean()),
    startDate: date(),
    endDate: date(),
    optimisticGuess: optional(nullable(number())),
    mostLikelyGuess: optional(nullable(number())),
    pessimisticGuess: optional(nullable(number())),
    delay: optional(nullable(number())),
    dependencies: optional(nullable(string())),
    is_acknowledged: optional(boolean()),
    is_done: optional(boolean()),
    phaseteam: string(),
});

const allPhasesQuerySchema: Describe<AllProjectPhasesQuery> = object({
    projectId: string(),
});

const allCompanyPhasesQuerySchema: Describe<AllCompanyProjectPhasesQuery> = object({
    companyId: string(),
});

export {
    phaseQuerySchema,
    newPhaseQuerySchema,
    patchPhaseQuerySchema,
    allPhasesQuerySchema,
    allCompanyPhasesQuerySchema,
}