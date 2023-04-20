import { Describe, object, string } from "superstruct";
import { UserQuery } from "./query-types/user-query-types";

const userQuerySchema: Describe<UserQuery> = object({
    userId: string(),
});

export {
    userQuerySchema,
}