type TeamByEmployeeQuery = {
    employeeId: string,
}

type EmployeesInTeamQuery = {
    teamId: string,
}

export type {
    TeamByEmployeeQuery,
    EmployeesInTeamQuery,
}