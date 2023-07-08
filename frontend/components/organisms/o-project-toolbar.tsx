import React, { useEffect } from 'react';
import { Row, Space, Tag } from 'antd';
import { Typography } from 'antd';
import { State } from '.prisma/client';
import { TeamOutlined } from '@ant-design/icons';
import { getTagColor } from '../../styles/colors';
import { ProjectStateButton } from '../atoms/a-project-state-button';
import { TeamSelect } from '../molecules/m-team-select';
import { useTranslation } from 'react-i18next';
import '../../../src/i18n'
import { Team } from '@prisma/client';

type ProjectToolbarProps = {
    teams: Team[],
    selectedTeams: Team[],
    status: State,
    setStatus: (state: State) => void,
    setTeams: (teams: string[]) => void,
}

const ProjectToolbar: React.FC<ProjectToolbarProps> = ({
    teams, selectedTeams, status, setStatus, setTeams
}) => {
    const { t } = useTranslation();

    const { Text } = Typography;

    const getTagInfo = (status: State) => {
        return status === State.ARCHIVED ? t('o-project-toolbar-archived') : 
            status === State.COMPLETED ? t('o-project-toolbar-completed') :
            status === State.ONGOING ? t('o-project-toolbar-ongoing') : 
            t('o-project-toolbar-draft')
    }

    return (
        <>
            <Row style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    <Text strong><TeamOutlined /> {t('o-project-toolbar-teams')}</Text>
                    <TeamSelect teams={teams} selectedTeams={selectedTeams} addStyle={{ width: 'fit-content' }} onSetTeams={setTeams}/>
                </Space>
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    <Tag color={getTagColor(status)}>{getTagInfo(status)}</Tag>
                    <ProjectStateButton status={status} setProjectStatus={setStatus} />
                </Space>
            </Row>
        </>
    );
};

export { ProjectToolbar };