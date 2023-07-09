import { Col } from "antd";
import variables from "../../../frontend/styles/variables.module.scss";
import { useTranslation } from "react-i18next";
import "../../../src/i18n";
import { useRouter } from "next/router";
import { LoadingOutlined } from "@ant-design/icons";
import { Colors, EmployeeTimeframe, Phase, State, Team } from "@prisma/client";
import { use, useEffect, useState } from "react";
import { patchAllProjectTeams, useAllProjectTeams, useAllTeams } from "../../../frontend/hooks/use-all-teams";

import { patchProject, useProject } from "../../../frontend/hooks/use-project";
import { ProjectHeader } from "../../../frontend/components/molecules/m-project-header";
import { ButtonSwitch } from "../../../frontend/components/atoms/a-button-switch";
import { BannerImage } from "../../../frontend/components/atoms/a-banner-image";
import { ProjectToolbar } from "../../../frontend/components/organisms/o-project-toolbar";
import { ProjectDescription } from "../../../frontend/components/organisms/o-project-description";
import { ProjectInfobar } from "../../../frontend/components/organisms/o-project-infobar";
import { useAllPhases } from "../../../frontend/hooks/use-all-phases";
import { InfobarElement } from "../../../frontend/components/molecules/m-project-infobar-element";
import { getCalendarIcon, getCrownIcon, getShareIcon } from "../../../frontend/components/atoms/a-get-ant-icons";
import { ChangeProjectInfoType, EditProjectInfoModal } from "../../../frontend/components/organisms/modals/o-edit-project-info-modal";
import { CalendarGrid } from "../../../frontend/components/organisms/o-calendar-grid";
import { useCalendar } from "../../../frontend/hooks/use-calendar";
import { useAllEmployeeTimeframes } from "../../../frontend/hooks/use-all-employee-timeframes";
import { NewPhaseModal, ProjectPhaseProps } from "../../../frontend/components/organisms/modals/o-new-phase-modal";
import { PostPhaseType, postPhase } from "../../../frontend/hooks/use-phase";

export default () => {
    const router = useRouter();
    const { t } = useTranslation();

    const { projectId } = router.query;
    const projectIdAsString: string = projectId ? projectId.toString() : '';

    const { project, mutateProject } = useProject(projectIdAsString);
    const { allTeams } = useAllTeams(project?.company || '');
    const { allProjectTeams, mutateAllProjectTeams } = useAllProjectTeams(projectIdAsString);
    const { allPhases, mutateAllPhases } = useAllPhases(projectIdAsString);
    const { calendar } = useCalendar(projectIdAsString);
    const { allEmployeeTimeframes, mutateAllEmployeeTimeframes } = useAllEmployeeTimeframes(projectIdAsString);

    const [planningMode, setPlanningMode] = useState<boolean>(false);
    const [showEditInfoModal, setShowEditInfoModal] = useState<boolean>(false);
    const [sortedEmployeeTimeframes, setSortedEmployeeTimeframes] = useState<EmployeeTimeframe[]>([]);
    const [highlightedTeam, setHighlightedTeam] = useState<Team | undefined>(undefined);
    const [projectPhaseProps, setProjectPhaseProps] = useState<ProjectPhaseProps[]>([]);
    const [newPhaseStart, setNewPhaseStart] = useState<string | undefined>(undefined);
    const [newPhaseEnd, setNewPhaseEnd] = useState<string | undefined>(undefined);

    const startdate = project?.startdate ? `${new Date(project.startdate).toLocaleDateString(`${t('a-date-range-lang')}`, { year: 'numeric', month: 'long', day: 'numeric' })}` : t('o-project-infobar-startdate-undefined');
    const enddate = sortedEmployeeTimeframes[sortedEmployeeTimeframes.length - 1]?.endDate ?
        `${new Date(sortedEmployeeTimeframes[sortedEmployeeTimeframes.length - 1].endDate!).toLocaleDateString(`${t('a-date-range-lang')}`, { year: 'numeric', month: 'long', day: 'numeric' })}` :
        t('o-project-infobar-enddate-undefined');
    const phasecount = allPhases ? `${allPhases.filter(phase => phase.is_done).length} / ${allPhases.length}` : t('o-project-infobar-phases-undefined');
    const customer = project?.customer ? `${project.customer}` : t('o-project-infobar-customer-undefined');

    const infobarElements: InfobarElement[] = [
        { icon: getCalendarIcon(), title: t('o-project-infobar-startdate'), value: startdate },
        { icon: getCalendarIcon(), title: t('o-project-infobar-enddate'), value: enddate },
        { icon: getShareIcon(), title: t('o-project-infobar-phases'), value: phasecount },
        { icon: getCrownIcon(), title: t('o-project-infobar-customer'), value: customer },
    ];

    useEffect(() => {
        if (allEmployeeTimeframes) {
            const sortedPhases = allEmployeeTimeframes.sort((a, b) => {
                const dateA = null
                const dateB = null
                
                if (dateA === null && dateB === null) {
                    return 0;
                } else if (dateA === null) {
                    return 1;
                } else if (dateB === null) {
                    return -1;
                } else {if (dateA < dateB) {
                    return -1;
                  } else if (dateA > dateB) {
                    return 1;
                  } else {
                    return 0;
                  }
                }
            });
            setSortedEmployeeTimeframes(sortedPhases);
        }
        console.log(sortedEmployeeTimeframes);
    }, [allEmployeeTimeframes]);

    useEffect(() => {
        if (!allPhases) return;
        (async () => {
        const phaseProps: ProjectPhaseProps[] = await Promise.all(allPhases.map((phase) => {
            return {
                id: phase.id,
                name: phase.name
            };
        }));
        setProjectPhaseProps(phaseProps);
    })();
    }, [allPhases]);

    const handleChangeName = async (newName: string) => {
        if (!project) return;
        const projectPatch = {
            ...project,
            name: newName,
        };
        const patchedProject = await patchProject(projectPatch);
        mutateProject(patchedProject);
    };

    const handleChangeImage = async (newImage: string) => {
        if (!project) return;
        const projectPatch = {
            ...project,
            banner: newImage,
        };
        const patchedProject = await patchProject(projectPatch);
        mutateProject(patchedProject);
    }

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

    const handleChangeDescription = async (description: string) => {
        if (!project) return;
        const projectPatch = {
            ...project,
            description: description
        };
        const patchedProject = await patchProject(projectPatch);
        mutateProject(patchedProject);
    }

    const handleChangeTeams = async (teams: string[]) => {
        if (!project) return;
        const patchedProjectTeams: Team[] = await patchAllProjectTeams(project.id, teams);
        mutateAllProjectTeams(patchedProjectTeams);
        mutateProject();
        mutateAllEmployeeTimeframes();
    }

    const handleChangeProjectInfo = async (projectInfo: ChangeProjectInfoType) => {
        if (!project) return;
        const projectPatch = {
            ...project,
            startdate: projectInfo.newStartDate ? projectInfo.newStartDate : project.startdate,
            customer: projectInfo.newCustomer ? projectInfo.newCustomer : project.customer,
        };
        const patchedProject = await patchProject(projectPatch);
        mutateProject(patchedProject);
    }

    const handleHighlightTeam = (team: string | undefined) => {
        if (!allProjectTeams) return;
        const highlight = allProjectTeams.find((projectTeam) => projectTeam.name === team);
        setHighlightedTeam(highlight);
    }

    const handleCreateNewPhase = async (data: any) => {
        if (!project && !highlightedTeam) return;
        const phasePost: PostPhaseType = {
            name: data.name,
            project: project!.id,
            startDate: data.startdate,
            endDate: data.enddate,
            dependency: data.dependencies,
            phaseteam: highlightedTeam!.id
        };
        const newPhase = await postPhase(phasePost);
        const phasesMutation = allPhases ? [...allPhases, newPhase] : [newPhase];
        mutateAllPhases(phasesMutation);
    };

    return (
        <>
            {project ? (
                <div style={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '100%',
                    height: `calc(100vh - (2 * ${variables.marginXXHuge}))`
                }}>
                    <Col style={{ maxWidth: variables.maxWidthStandard, height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: variables.gapStandard }}>
                        <ProjectHeader projectImagePath={project.image || ''} projectName={project.name} changeName={handleChangeName} setNewIcon={handleChangeIcon} />
                        <ButtonSwitch buttonLeft={t('p-project-button-switch-left')} buttonRight={t('p-project-button-switch-right')} leftIsActive={planningMode} changeState={() => setPlanningMode(!planningMode)} />
                        {!planningMode && allProjectTeams ? (
                            <Col style={{ display: 'flex', flexDirection: 'column', gap: variables.gapHuge }}>
                                <BannerImage imagePath={project.banner} setNewImage={handleChangeImage} />
                                <ProjectToolbar teams={allTeams || []} selectedTeams={allProjectTeams} status={project.state} setStatus={handleChangeStatus} setTeams={handleChangeTeams} />
                                <ProjectInfobar onEdit={() => setShowEditInfoModal(true)} infobarElements={infobarElements} />
                                <ProjectDescription description={project.description || ''} setDescription={handleChangeDescription} />
                            </Col>
                        ) : (
                            <>
                                {calendar && allProjectTeams && (
                                    <Col style={{ height: 'inherit', display: 'flex', flexDirection: 'column', gap: variables.gapHuge, alignItems: 'center' }}>
                                        <ProjectToolbar teams={allTeams || []} selectedTeams={allProjectTeams} status={project.state} setStatus={handleChangeStatus} setTeams={handleChangeTeams} />
                                        <CalendarGrid
                                            isProjectPlanning
                                            weeks={calendar}
                                            color={highlightedTeam ? highlightedTeam.color : Colors.NEUTRAL}
                                            teams={allProjectTeams || []}
                                            selectedTeam={highlightedTeam ? highlightedTeam.id : undefined}
                                            allPhases={allPhases}
                                            startDate={project.startdate ? new Date(project.startdate).toDateString() : undefined}
                                            onHighlightTeam={handleHighlightTeam}
                                            onDown={setNewPhaseStart}
                                            onUp={highlightedTeam ? setNewPhaseEnd : () => { setNewPhaseStart(undefined); setNewPhaseEnd(undefined) }}
                                            editTimeframe={() => undefined}
                                        />
                                    </Col>
                                )}
                            </>
                        )}
                    </Col>
                    <EditProjectInfoModal isOpen={showEditInfoModal} setIsOpen={() => setShowEditInfoModal(false)} onSave={handleChangeProjectInfo} />
                    {highlightedTeam && newPhaseStart && newPhaseEnd && (
                        <NewPhaseModal
                            isOpen={true}
                            setIsOpen={() => { setNewPhaseStart(undefined); setNewPhaseEnd(undefined) } }
                            onCreate={handleCreateNewPhase}
                            startDate={newPhaseStart}
                            endDate={newPhaseEnd}
                            projectPhases={projectPhaseProps}
                        />
                    )}
                </div>
            ) : (
                <LoadingOutlined />
            )}
        </>
    )
};