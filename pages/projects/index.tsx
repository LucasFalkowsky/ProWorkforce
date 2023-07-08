import { Button, Col, Space, Typography } from "antd";
import variables from "../../frontend/styles/variables.module.scss";
import { useTranslation } from "react-i18next";
import "../../src/i18n";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useAllProjects } from "../../frontend/hooks/use-all-projects";
import React, { useEffect, useState } from "react";
import { ProjectCard } from "../../frontend/components/organisms/o-project-card";
import { useAllCompanyPhases } from "../../frontend/hooks/use-all-phases";
import { NewProjectModal } from "../../frontend/components/organisms/modals/o-new-project-modal";
import { useAllTeams } from "../../frontend/hooks/use-all-teams";
import { postProject } from "../../frontend/hooks/use-project";
import Link from "next/link";
import { Team } from "@prisma/client";

export default () => {
    const { t } = useTranslation();
    const { Title } = Typography;

    const [openModal, setOpenModal] = useState(false);
    const [teams, setTeams] = useState<Team[]>([]);

    const companyId = '3fe6e82b-59f7-4b25-8cd8-8631bfbe1551'

    const { allProjects, mutateAllProjects } = useAllProjects(companyId);
    const { allTeams } = useAllTeams(companyId);
    const { allPhases } = useAllCompanyPhases(companyId);

    useEffect(() => {
        if (allTeams) {
            setTeams(allTeams.map((team) => team));
        }
    }, [allTeams]);

    const handleCreate = async (newProject: any) => {
        await postProject({...newProject, company: companyId});
        mutateAllProjects();
    };

    return (
        <Col>
            <Title style={{ textAlign: 'center', margin: variables.marginXXHuge }}>{t('p-projects-overview-title')}</Title>
            <Space size='large' direction='vertical' style={{ width: '100%' }}>
                <Button type='primary' ghost icon size='large' style={{ paddingRight: variables.paddingXHuge }} onClick={() => setOpenModal(!openModal)}>
                    <PlusCircleOutlined /> {t('p-project-add-project-button')}
                </Button>
                {allProjects && (
                    <Space direction='vertical' style={{ width: '100%' }}>
                        {allProjects.map((project) => {
                            const phaseCount = allPhases?.filter((phase) => phase?.project === project.id).length;
                            const finishedPhasesCount = allPhases?.filter((phase) => phase?.project === project.id && phase.is_done).length;
                            return (
                                <Link href={`/project/${project.id}`} key={project.id}>
                                    <ProjectCard
                                        employeeImageColors={[]}
                                        projectIconPath={project.image}
                                        projectName={project.name}
                                        startDate={project.startdate}
                                        endDate={undefined}
                                        status={"DRAFT"}
                                        totalPhasesCount={phaseCount}
                                        finishedPhasesCount={finishedPhasesCount}
                                    />
                                </Link>
                            )
                        })}
                    </Space>
                )}
            </Space>
            <NewProjectModal isOpen={openModal} setIsOpen={() => setOpenModal(false)} onCreate={(newProject) => handleCreate(newProject)} teams={teams}  />
        </Col>
    )
};