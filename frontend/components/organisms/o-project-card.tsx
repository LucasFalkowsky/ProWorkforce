import { Col, Image, Row, Space, Tag } from 'antd';
import React from 'react';
import { PhaseCount } from '../atoms/a-phase-count';
import { EmployeeImageProps, EmployeesImages } from '../molecules/m-employees-images';
import { State } from '.prisma/client';
import { DateRange } from '../atoms/a-date-range';
import { Typography } from 'antd';
import variables from '../../styles/variables.module.scss';
import { colors, getAntDesignColor } from '../../styles/colors';
import { useTranslation } from 'react-i18next';
import '../../../i18n/i18n.js/index.js'

type ProjectCardProps = {
    totalPhasesCount: number,
    finishedPhasesCount: number,
    employeeImageColors: EmployeeImageProps[],
    projectIconPath: string,
    projectName: string,
    startDate: Date,
    endDate: Date,
    status: State,
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    totalPhasesCount, finishedPhasesCount, employeeImageColors, projectIconPath, projectName, startDate, endDate, status
}) => {
    const { t } = useTranslation();

    const tagColor = status === State.ARCHIVED ? 'purple' : status === State.COMPLETED ? 'green' : status === State.DRAFT ? 'orange' : 'geekblue'
    const { Title } = Typography;

    return (
        <>
            <Row align='middle' wrap={false} style={{ padding: variables.paddingHuge, border: `${variables.thinBorderNoColor} ${getAntDesignColor(colors.NEUTRAL)[4]}`, borderRadius: variables.standardBorderRadius }}>
                <Col span={12} flex='auto'>
                    <Space size={'small'} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Image src={projectIconPath} />
                        <Col flex='auto' style={{ alignItems: 'flex-start' }}>
                            <Space size={'small'} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Title level={5} style={{ margin: '0' }}>{projectName}</Title>
                                <Tag color={tagColor}>{status}</Tag>
                            </Space>
                            <DateRange startDate={startDate} endDate={endDate} />
                        </Col>
                    </Space>
                </Col>
                <Col span={4} style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <PhaseCount phaseCount={totalPhasesCount} finishedPhaseCount={finishedPhasesCount} />
                </Col>
                <Col span={8} style={{ display: 'flex', justifyContent: 'right' }}>
                    <Space size={'small'} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Title level={5} style={{ margin: '0' }}>{t('o-project-card-employees')}</Title>
                        <EmployeesImages employeeImageColors={employeeImageColors} />
                    </Space>
                </Col>
            </Row>
        </>
    );
};

export { ProjectCard };