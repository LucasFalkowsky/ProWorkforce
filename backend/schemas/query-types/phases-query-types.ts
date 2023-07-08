type PhaseQuery = {
  phaseId: string,
}

type NewPhaseQuery = {
  name: string,
  project: string,
  startDate: Date,
  endDate: Date,
  dependency?: string,
  phaseteam: string,
}

type PatchPhaseQuery = {
  id: string
  name: string
  project: string
  is_active?: boolean,
  startDate: Date
  endDate: Date
  optimisticGuess?: number | null,
  mostLikelyGuess?: number | null,
  pessimisticGuess?: number | null,
  delay?: number | null,
  dependencies?: string | null,
  is_acknowledged?: boolean,
  is_done?: boolean,
  phaseteam: string
}

type AllProjectPhasesQuery = {
  projectId: string,
}

type AllCompanyProjectPhasesQuery = {
  companyId: string,
}

export type {
  PhaseQuery,
  NewPhaseQuery,
  PatchPhaseQuery,
  AllProjectPhasesQuery,
  AllCompanyProjectPhasesQuery,
};