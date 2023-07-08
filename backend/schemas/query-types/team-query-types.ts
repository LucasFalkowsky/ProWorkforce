type TeamQuery = {
    teamId: string,
}

type TeamByEmployeeQuery = {
    employeeId: string,
}

type EmployeesInTeamQuery = {
    teamId: string,
}

type AllTeamsQuery = {
    companyId: string,
}

type AllProjectTeamsQuery = {
    projectId: string,
}

export type {
    TeamQuery,
    TeamByEmployeeQuery,
    EmployeesInTeamQuery,
    AllTeamsQuery,
    AllProjectTeamsQuery,
}