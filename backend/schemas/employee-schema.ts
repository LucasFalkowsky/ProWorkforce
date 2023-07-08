import { Describe, object, string } from "superstruct";
import { AllEmployeesQuery, EmployeeQuery, PhaseEmployeesQuery, ProjectEmployeesQuery } from "./query-types/employee-query-types";

const employeeQuerySchema: Describe<EmployeeQuery> = object({
    employeeId: string(),
});

const allEmployeesQuerySchema: Describe<AllEmployeesQuery> = object({
    companyId: string(),
})

const projectEmployeesQuerySchema: Describe<ProjectEmployeesQuery> = object({
    projectId: string(),
})

const phaseEmployeesQuerySchema: Describe<PhaseEmployeesQuery> = object({
    phaseId: string(),
})

export {
    employeeQuerySchema,
    allEmployeesQuerySchema,
    projectEmployeesQuerySchema,
    phaseEmployeesQuerySchema,
}