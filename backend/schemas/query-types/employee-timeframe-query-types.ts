import { State } from "@prisma/client";

type EmployeeTimeframeQuery = {
  timeframeId: string,
};

type NewEmployeeTimeframeQuery = {
  employee: string,
  phase: string,
  startDate: Date,
  endDate: Date,
  workweek: number,
};

type PatchEmployeeTimeframeQuery = {
  id: string,
  employee: string,
  phase: string,
  startDate: Date,
  endDate: Date,
  workweek: number,
};

type AllEmployeeTimeframesQuery = {
  projectId: string,
}

export type {
  EmployeeTimeframeQuery,
  NewEmployeeTimeframeQuery,
  PatchEmployeeTimeframeQuery,
  AllEmployeeTimeframesQuery,
};