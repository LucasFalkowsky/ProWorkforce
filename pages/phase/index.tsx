import { Col } from "antd";
import variables from "../../frontend/styles/variables.module.scss";
import { useTranslation } from "react-i18next";
import "../../src/i18n";
import { useRouter } from "next/router";
import { LoadingOutlined } from "@ant-design/icons";
import { Colors, Employee, EmployeeTimeframe, State, Team } from "@prisma/client";
import { useEffect, useState } from "react";

import { patchProject, useProject } from "../../frontend/hooks/use-project";
import { ProjectHeader } from "../../frontend/components/molecules/m-project-header";
import { CalendarGrid } from "../../frontend/components/organisms/o-calendar-grid";
import { usePhaseCalendar } from "../../frontend/hooks/use-calendar";
import { useAllEmployeeTimeframes } from "../../frontend/hooks/use-all-employee-timeframes";
import { patchPhase, usePhase } from "../../frontend/hooks/use-phase";
import { PlanningToolbar } from "../../frontend/components/organisms/o-planning-toolbar";
import { useTeam } from "../../frontend/hooks/use-team";
import { CalculateTimeModal } from "../../frontend/components/organisms/modals/o-calculate-time-modal";
import { useAllPhaseEmployees } from "../../frontend/hooks/use-all-employees";
import { NewTimeframeModal } from "../../frontend/components/organisms/modals/o-new-timeframe-modal";
import { PostEmployeeTimeframeType, deleteEmployeeTimeframe, patchEmployeeTimeframe, postEmployeeTimeframe } from "../../frontend/hooks/use-employee-timeframe";
import { ChangeTimeframeType, EditTimeframeModal } from "@/frontend/components/organisms/modals/o-edit-timeframe-modal";
import PageHeader from "@/frontend/components/atoms/a-page-header";

export default () => {
    const router = useRouter();
    const { t } = useTranslation();

    const { projectId, phaseId } = router.query;
    const projectIdAsString: string = projectId ? projectId.toString() : '';
    const phaseIdAsString: string = phaseId ? phaseId.toString() : '';

    const { project, mutateProject } = useProject(projectIdAsString);
    const { phase, mutatePhase } = usePhase(phaseIdAsString);
    const { team } = useTeam(phase?.phaseteam!);
    const { employees } = useAllPhaseEmployees(phaseIdAsString);
    const { calendar } = usePhaseCalendar(phaseIdAsString);
    const { allEmployeeTimeframes, mutateAllEmployeeTimeframes } = useAllEmployeeTimeframes(projectIdAsString);

    const [calculateTimeModalOpen, setCalculateTimeModalOpen] = useState<boolean>(false);
    const [highlightedEmployee, setHighlightedEmployee] = useState<string | undefined>(undefined);
    const [newTimeframeStart, setNewTimeframeStart] = useState<string | undefined>(undefined);
    const [newTimeframeEnd, setNewTimeframeEnd] = useState<string | undefined>(undefined);

    const [showEditTimeframeModal, setShowEditTimeframeModal] = useState<boolean>(false);
    const [patchedEmployeeTimeframe, setPatchedEmployeeTimeframe] = useState<EmployeeTimeframe | undefined>(undefined);

    const handleChangeName = async (newName: string) => {
        if (!project) return;
        const projectPatch = {
            ...project,
            name: newName,
        };
        const patchedProject = await patchProject(projectPatch);
        mutateProject(patchedProject);
    };

    const handleChangeIcon = async (newImage: string) => {
        if (!project) return;
        const projectPatch = {
            ...project,
            image: newImage,
        };
        const patchedProject = await patchProject(projectPatch);
        mutateProject(patchedProject);
    }

    const handleChangeStatus = async (status: State) => {
        if (!project) return;
        const projectPatch = {
            ...project,
            state: status
        };
        const patchedProject = await patchProject(projectPatch);
        mutateProject(patchedProject);
    }

    const handleSetTime = async (optimisticGuess: number, realisticGuess: number, pessimisticGuess: number) => {
        if (!phase) return;
        const phasePatch = {
            ...phase,
            optimisticGuess,
            mostLikelyGuess: realisticGuess,
            pessimisticGuess
        };
        const patchedPhase = await patchPhase(phasePatch);
        mutatePhase(patchedPhase);
        setCalculateTimeModalOpen(false);
    }

    const handleCreateNewTimeframe = async (data: any) => {
        if (!project && !highlightedEmployee) return;
        const employeeTimeframePost: PostEmployeeTimeframeType = {
            employee: highlightedEmployee!,
            phase: phaseIdAsString,
            startDate: data.startDate,
            endDate: data.endDate,
            workweek: data.workweek,
        };
        const newEmployeeTimeframe = await postEmployeeTimeframe(employeeTimeframePost);
        const employeeTimeframeMutation = allEmployeeTimeframes ? [...allEmployeeTimeframes, newEmployeeTimeframe] : [newEmployeeTimeframe];
        mutateAllEmployeeTimeframes(employeeTimeframeMutation);
    }

    const handlePatchTimeframe = async (data: ChangeTimeframeType) => {
        console.log(data, patchedEmployeeTimeframe)
        if (!patchedEmployeeTimeframe) return;
        const employeeTimeframe: EmployeeTimeframe = {
            id: patchedEmployeeTimeframe.id,
            employee: patchedEmployeeTimeframe.employee,
            phase: patchedEmployeeTimeframe.phase,
            startDate: new Date(data.newStartDate),
            endDate: new Date(data.newEndDate),
            workweek: data.newWorkweek,
        }
        const updatedEmployeeTimeframe = await patchEmployeeTimeframe(employeeTimeframe);
        mutateAllEmployeeTimeframes(allEmployeeTimeframes ? allEmployeeTimeframes.map((et) => et.id === updatedEmployeeTimeframe.id ? updatedEmployeeTimeframe : et) : [updatedEmployeeTimeframe]);
        setShowEditTimeframeModal(false);
    }

    const handleEditTimeframe = async (data: EmployeeTimeframe) => {
        setPatchedEmployeeTimeframe(data);
        setShowEditTimeframeModal(true);
    }

    const handleDeleteTimeframe = async () => {
        if (!patchedEmployeeTimeframe) return;
        await deleteEmployeeTimeframe(patchedEmployeeTimeframe.id);
    }

    return (
        <>
            {project && team && phase ? (
                <div style={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '100%',
                    height: `calc(100vh - (2 * ${variables.marginXXHuge}))`
                }}>
                    <Col style={{ maxWidth: variables.maxWidthStandard, height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: variables.gapStandard }}>
                        <div style={{ position: 'absolute', marginTop: variables.marginHuge }}>
                            <PageHeader
                                title="Project Planning"
                                subtitle="back to last page"
                                slug={`/project/${projectIdAsString}`}
                            />
                        </div>
                        <ProjectHeader projectImagePath={project.image || ''} projectName={project.name} changeName={handleChangeName} setNewIcon={handleChangeIcon} />
                        <PlanningToolbar
                            team={team.name}
                            teamColor={team.color}
                            status={project.state}
                            pessimisticGuess={phase.pessimisticGuess ? phase.pessimisticGuess : undefined}
                            realisticGuess={phase.mostLikelyGuess ? phase.mostLikelyGuess : undefined}
                            optimisticGuess={phase.optimisticGuess ? phase.optimisticGuess : undefined}
                            plannedTime={0}
                            setStatus={handleChangeStatus}
                            setTimeEstimation={() => setCalculateTimeModalOpen(true)}
                        />
                        {calendar && (
                            <Col style={{ height: 'inherit', display: 'flex', flexDirection: 'column', gap: variables.gapHuge, alignItems: 'center' }}>
                                <CalendarGrid
                                    weeks={calendar}
                                    color={highlightedEmployee ? team.color : Colors.NEUTRAL}
                                    teams={team ? [team] : []}
                                    selectedTeam={highlightedEmployee ? highlightedEmployee : undefined}
                                    employees={employees}
                                    employeeTimeframes={allEmployeeTimeframes}
                                    allPhases={phase ? [phase] : []}
                                    startDate={project.startdate ? new Date(project.startdate).toDateString() : undefined}
                                    onHighlightEmployee={(employee) => setHighlightedEmployee(employee)}
                                    onDown={setNewTimeframeStart}
                                    onUp={highlightedEmployee ? setNewTimeframeEnd : () => { setNewTimeframeStart(undefined); setNewTimeframeEnd(undefined) }}
                                    editTimeframe={handleEditTimeframe}
                                />
                            </Col>
                        )}
                    </Col>
                    <CalculateTimeModal
                        isOpen={calculateTimeModalOpen}
                        optimisticGuess={phase.optimisticGuess}
                        realisticGuess={phase.mostLikelyGuess}
                        pessimisticGuess={phase.pessimisticGuess}
                        setIsOpen={() => setCalculateTimeModalOpen(false)}
                        setTime={handleSetTime}
                    />
                    {highlightedEmployee && newTimeframeStart && newTimeframeEnd && (
                        <NewTimeframeModal
                            isOpen={true}
                            setIsOpen={() => {setNewTimeframeStart(undefined); setNewTimeframeEnd(undefined)} }
                            onCreate={handleCreateNewTimeframe}
                            startdate={newTimeframeStart}
                            enddate={newTimeframeEnd}
                        />
                    )}
                    {showEditTimeframeModal && patchedEmployeeTimeframe && (
                        <EditTimeframeModal
                            isOpen={true}
                            setIsOpen={() => { setNewTimeframeStart(undefined); setNewTimeframeEnd(undefined); setShowEditTimeframeModal(false) } }
                            startdate={patchedEmployeeTimeframe.startDate}
                            enddate={patchedEmployeeTimeframe.endDate}
                            workweek={patchedEmployeeTimeframe.workweek}
                            onSave={handlePatchTimeframe}
                            onDelete={handleDeleteTimeframe}
                        />
                    )}
                </div>
            ) : (
                <LoadingOutlined />
            )}
        </>
    )
};