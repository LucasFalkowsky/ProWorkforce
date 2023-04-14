import { Describe, object, string } from "superstruct";
import { EmployeesInTeamQuery, TeamByEmployeeQuery } from "./query-types/team-query-types";

const TeamByEmployeeQuerySchema: Describe<TeamByEmployeeQuery> = object({
    employeeId: string(),
});
const EmployeesInTeamQuerySchema: Describe<EmployeesInTeamQuery> = object({
    teamId: string(),
})

export {
    TeamByEmployeeQuerySchema,
    EmployeesInTeamQuerySchema,
}