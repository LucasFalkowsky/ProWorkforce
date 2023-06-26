import React, { useEffect, useState } from 'react';
import { Row, Space, Tag } from 'antd';
import { Typography } from 'antd';
import { State } from '.prisma/client';
import { FieldTimeOutlined, TeamOutlined } from '@ant-design/icons';
import { colors, getTagColor } from '../../styles/colors';
import { ProjectStateButton } from '../atoms/a-project-state-button';
import { useTranslation } from 'react-i18next';
import '../../../pages/i18n.js'
import { calculateTimeEstimation } from '../utils/get-time-estimation';
import { time } from 'console';

type PlanningToolbarProps = {
    team: string,
    teamColor: colors,
    status: State,
    plannedTime?: number,
    neededTime?: number,
    pessimisticGuess?: number,
    realisticGuess?: number,
    optimisticGuess?: number,
    setStatus: (state: State) => void,
}

const PlanningToolbar: React.FC<PlanningToolbarProps> = ({
    team, teamColor, status, neededTime, plannedTime, pessimisticGuess, realisticGuess, optimisticGuess ,setStatus
}) => {
    const { t } = useTranslation();
    const { Text } = Typography;

    const guessValues = {pessimisticGuess, realisticGuess, optimisticGuess}

    const [estimatedTime, setEstimatedTime] = useState<number | undefined>();

    useEffect(() => {
        if (pessimisticGuess && realisticGuess && optimisticGuess) {
            const timeEstimation = calculateTimeEstimation(guessValues);
            if (!timeEstimation) return;
            setEstimatedTime(timeEstimation.estimation);
            return;
        }
        setEstimatedTime(undefined);
    }, [pessimisticGuess, realisticGuess, optimisticGuess]);

    return (
        <>
            <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    <Text strong><TeamOutlined /> {t('o-planning-toolbar-team')}</Text>
                    <Tag color={teamColor}>{team}</Tag>
                </Space>
                <Space>
                    <FieldTimeOutlined />
                    <Text strong>{t('o-planning-toolbar-capacity-allocation')}</Text>
                    <Tag>{estimatedTime ? `${plannedTime ? plannedTime : 0} / ${estimatedTime}` : t('calculate-time-estimation')}</Tag>
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