import { Describe, array, date, object, optional, string, enums, number } from "superstruct";
import { State } from "@prisma/client";
import { AllEmployeeTimeframesQuery, EmployeeTimeframeQuery, NewEmployeeTimeframeQuery, PatchEmployeeTimeframeQuery } from "./query-types/employee-timeframe-query-types";

const employeeTimeframeQuerySchema: Describe<EmployeeTimeframeQuery> = object({
    timeframeId: string(),
});

const newEmployeeTimeframeQuerySchema: Describe<NewEmployeeTimeframeQuery> = object({
    employee: string(),
    phase: string(),
    startDate: date(),
    endDate: date(),
    workweek: number(),
});

const patchEmployeeTimeframeQuerySchema: Describe<PatchEmployeeTimeframeQuery> = object({
    id: string(),
    employee: string(),
    phase: string(),
    startDate: date(),
    endDate: date(),
    workweek: number(),
});

const allEmployeeTimeframesQuerySchema: Describe<AllEmployeeTimeframesQuery> = object({
    projectId: string(),
});

export {
    employeeTimeframeQuerySchema,
    newEmployeeTimeframeQuerySchema,
    allEmployeeTimeframesQuerySchema,
    patchEmployeeTimeframeQuerySchema,
}