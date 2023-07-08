import { Describe, object, string } from "superstruct";
import { TeamQuery, AllProjectTeamsQuery, AllTeamsQuery, EmployeesInTeamQuery, TeamByEmployeeQuery } from "./query-types/team-query-types";

const TeamQuerySchema: Describe<TeamQuery> = object({
    teamId: string(),
});

const TeamByEmployeeQuerySchema: Describe<TeamByEmployeeQuery> = object({
    employeeId: string(),
});

const EmployeesInTeamQuerySchema: Describe<EmployeesInTeamQuery> = object({
    teamId: string(),
})

const AllTeamsQuerySchema: Describe<AllTeamsQuery> = object({
    companyId: string(),
})

const AllProjectTeamsQuerySchema: Describe<AllProjectTeamsQuery> = object({
    projectId: string(),
})

export {
    TeamQuerySchema,
    TeamByEmployeeQuerySchema,
    EmployeesInTeamQuerySchema,
    AllTeamsQuerySchema,
    AllProjectTeamsQuerySchema
}