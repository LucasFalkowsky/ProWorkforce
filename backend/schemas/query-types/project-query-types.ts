import { State } from "@prisma/client";

type ProjectQuery = {
  projectId: string,
};

type NewProjectQuery = {
  name: string,
  company: string,
  assignedTeams: string[],
  startDate: Date,
  customer?: string,
  description?: string,
};

type PatchProjectQuery = {
  id: string,
  name: string,
  company: string,
  customer?: string,
  description?: string,
  image?: string,
  banner?: string,
  state?: State,
  startdate?: Date,
  assignedTeams?: string[],
};

type AllProjectsQuery = {
  companyId: string,
}

export type {
  ProjectQuery,
  NewProjectQuery,
  PatchProjectQuery,
  AllProjectsQuery,
};