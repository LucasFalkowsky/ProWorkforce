import React, { useEffect, useState } from 'react';
import { Row, Space, Tag } from 'antd';
import { Typography } from 'antd';
import { State } from '.prisma/client';
import { FieldTimeOutlined, TeamOutlined } from '@ant-design/icons';
import { getAntDesignColor, getTagColor } from '../../styles/colors';
import { ProjectStateButton } from '../atoms/a-project-state-button';
import { useTranslation } from 'react-i18next';
import '../../../src/i18n'
import { calculateTimeEstimation } from '../utils/get-time-estimation';
import { time } from 'console';
import { Colors } from '@prisma/client';

type PlanningToolbarProps = {
    team: string,
    teamColor: Colors,
    status: State,
    plannedTime?: number,
    neededTime?: number,
    pessimisticGuess?: number,
    realisticGuess?: number,
    optimisticGuess?: number,
    setStatus: (state: State) => void,
    setTimeEstimation: () => void,
}

const PlanningToolbar: React.FC<PlanningToolbarProps> = ({
    team, teamColor, status, neededTime, plannedTime, pessimisticGuess, realisticGuess, optimisticGuess ,setStatus, setTimeEstimation
}) => {
    const { t } = useTranslation();
    const { Text } = Typography;


    const [estimatedTime, setEstimatedTime] = useState<number | undefined>();

    useEffect(() => {
        if (optimisticGuess && realisticGuess && pessimisticGuess) {
            const timeEstimation = calculateTimeEstimation(optimisticGuess, realisticGuess, pessimisticGuess);
            if (!timeEstimation) return;
            setEstimatedTime(timeEstimation.estimation);
            return;
        }
        setEstimatedTime(undefined);
    }, [optimisticGuess, realisticGuess, pessimisticGuess]);

    return (
        <>
            <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    <Text strong><TeamOutlined /> {t('o-planning-toolbar-team')}</Text>
                    <Tag color={teamColor.toLowerCase()}>{team}</Tag>
                </Space>
                <Space>
                    <FieldTimeOutlined />
                    <Text strong>{t('o-planning-toolbar-capacity-allocation')}</Text>
                    <Tag style={{ cursor: 'pointer' }} onClick={setTimeEstimation} >{estimatedTime ? `${plannedTime ? plannedTime : 0} / ${estimatedTime}` : t('calculate-time-estimation')}</Tag>
                </Space>
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    <Tag color={getTagColor(status)}>{status}</Tag>
                    <ProjectStateButton status={status} setProjectStatus={setStatus} />
                </Space>
            </Row>
        </>
    );
};

export { PlanningToolbar };