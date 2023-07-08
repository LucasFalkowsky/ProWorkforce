import { Describe, object, string } from "superstruct";
import { CalendarQuery, PhaseCalendarQuery } from "./query-types/calendar-query-types";

const calendarQuerySchema: Describe<CalendarQuery> = object({
    countryCode: string(),
    projectId: string(),
});

const phaseCalendarQuerySchema: Describe<PhaseCalendarQuery> = object({
    countryCode: string(),
    phaseId: string(),
});

export {
    calendarQuerySchema,
    phaseCalendarQuerySchema,
}