import { Describe, object, string } from "superstruct";
import { CompanyQuery } from "./query-types/company-query-types";

const companyQuerySchema: Describe<CompanyQuery> = object({
    companyId: string(),
});

export {
    companyQuerySchema,
}