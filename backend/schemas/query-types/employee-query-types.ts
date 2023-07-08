type EmployeeQuery = {
  employeeId: string,
};

type AllEmployeesQuery = {
  companyId: string,
}

type ProjectEmployeesQuery = {
  projectId: string,
}

type PhaseEmployeesQuery = {
  phaseId: string,
}

export type {
  EmployeeQuery,
  AllEmployeesQuery,
  ProjectEmployeesQuery,
  PhaseEmployeesQuery,
};