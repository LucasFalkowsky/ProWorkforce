import React, { useEffect } from 'react';
import { Row, Space, Tag } from 'antd';
import { Typography } from 'antd';
import { State } from '.prisma/client';
import { TeamOutlined } from '@ant-design/icons';
import { getTagColor } from '../../styles/colors';
import { ProjectStateButton } from '../atoms/a-project-state-button';
import { TeamSelect } from '../molecules/m-team-select';
import { useTranslation } from 'react-i18next';
import '../../../pages/i18n.js'

type ProjectToolbarProps = {
    teams: string[],
    status: State,
    setStatus: (state: State) => void,
}

const ProjectToolbar: React.FC<ProjectToolbarProps> = ({
    teams, status, setStatus
}) => {
    const { t } = useTranslation();

    const { Text } = Typography;
    const [projectState, setProjectState] = React.useState<string>();

    useEffect(() => {
        switch (status) {
            case State.DRAFT:
                setProjectState(`${t('o-project-toolbar-draft')}`);
            case State.ONGOING:
                setProjectState(`${t('o-project-toolbar-ongoing')}`);
            case State.COMPLETED:
                setProjectState(`${t('o-project-toolbar-completed')}`);
            case State.ARCHIVED:
                setProjectState(`${t('o-project-toolbar-archived')}`);
        }
    });

    return (
        <>
            <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    <Text strong><TeamOutlined /> {t('o-project-toolbar-teams')}</Text>
                    <TeamSelect teams={teams} addStyle={{ width: 'fit-content' }}/>
                </Space>
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    <Tag color={getTagColor(status)}>{projectState}</Tag>
                    <ProjectStateButton status={status} setProjectStatus={setStatus} />
                </Space>
            </Row>
        </>
    );
};

export { ProjectToolbar };