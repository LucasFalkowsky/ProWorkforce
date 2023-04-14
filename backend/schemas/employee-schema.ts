import { Describe, object, string } from "superstruct";
import { AllEmployeesQuery, EmployeeQuery } from "./query-types/employee-query-types";

const employeeQuerySchema: Describe<EmployeeQuery> = object({
    employeeId: string(),
});
const allEmployeesQuerySchema: Describe<AllEmployeesQuery> = object({
    companyId: string(),
})

export {
    employeeQuerySchema,
    allEmployeesQuerySchema,
}