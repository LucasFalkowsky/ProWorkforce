import React, { useEffect, useState } from 'react';
import { Row, Select, SelectProps, Space, Tag } from 'antd';
import { Typography } from 'antd';
import { State } from '@prisma/client';
import { TeamOutlined } from '@ant-design/icons';
import { getTagColor } from '../../styles/colors';
import { ProjectStateButton } from '../atoms/a-project-state-button';
import { TeamSelect } from '../molecules/m-team-select';

type ProjectToolbarProps = {
    teams: string[],
    status: State,
    setStatus: (state: State) => void,
}

const ProjectToolbar: React.FC<ProjectToolbarProps> = ({
    teams, status, setStatus
}) => {
    const { Text } = Typography;

    return (
        <>
            <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    <Text strong><TeamOutlined /> Teams</Text>
                    <TeamSelect teams={teams} addStyle={{ width: 'fit-content' }}/>
                </Space>
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    <Tag color={getTagColor(status)}>{status}</Tag>
                    <ProjectStateButton status={status} setProjectStatus={setStatus} />
                </Space>
            </Row>
        </>
    );
};

export { ProjectToolbar };