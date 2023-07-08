import { Col, Image, Row, Space, Tag } from 'antd';
import React from 'react';
import { PhaseCount } from '../atoms/a-phase-count';
import { EmployeeImageProps, EmployeesImages } from '../molecules/m-employees-images';
import { State } from '.prisma/client';
import { DateRange } from '../atoms/a-date-range';
import { Typography } from 'antd';
import variables from '../../styles/variables.module.scss';
import { getAntDesignColor } from '../../styles/colors';
import { useTranslation } from 'react-i18next';
import '../../../src/i18n'
import { CldImage } from 'next-cloudinary';
import { TeamIcon } from '../atoms/a-team-icon';
import { Colors } from '@prisma/client';

type ProjectCardProps = {
    totalPhasesCount?: number,
    finishedPhasesCount?: number,
    employeeImageColors: EmployeeImageProps[],
    projectIconPath: string | null,
    projectName: string,
    startDate?: Date | null,
    endDate?: Date,
    status: State,
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    totalPhasesCount, finishedPhasesCount, employeeImageColors, projectIconPath, projectName, startDate, endDate, status
}) => {
    const { t } = useTranslation();

    const tagColor = status === State.ARCHIVED ? 'purple' : status === State.COMPLETED ? 'green' : status === State.DRAFT ? 'orange' : 'geekblue'
    const { Title, Text } = Typography;

    return (
        <>
            <Row
                align='middle'
                wrap={false}
                style={{
                    padding: variables.paddingHuge,
                    border: `${variables.thinBorderNoColor} ${getAntDesignColor(Colors.NEUTRAL)[4]}`,
                    borderRadius: variables.standardBorderRadius,
                    cursor: 'pointer',
                }}
            >
                <Col span={12} flex='auto'>
                    <Space size={'small'} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                        {projectIconPath ? (
                            <CldImage width="50" height="50" src={projectIconPath} alt={''} />
                        ) : (
                            <TeamIcon team={projectName} color={Colors.PRIMARY} />
                        )}
                        <Col flex='auto' style={{ alignItems: 'flex-start' }}>
                            <Space size={'small'} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Title level={5} style={{ margin: '0' }}>{projectName}</Title>
                                <Tag color={tagColor}>{status}</Tag>
                            </Space>
                            {startDate && endDate ? (<DateRange startDate={startDate} endDate={endDate} />) : (<Text>{t('o-project-card-date-undefined')}</Text>)}
                        </Col>
                    </Space>
                </Col>
                <Col span={4} style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                    <PhaseCount phaseCount={totalPhasesCount} finishedPhaseCount={finishedPhasesCount} />
                </Col>
                <Col span={12} style={{ display: 'flex', justifyContent: 'right' }}>
                    {employeeImageColors.length > 0 ? (
                        <Space size={'small'} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <Title level={5} style={{ margin: '0' }}>{t('o-project-card-employees')}</Title>
                            <EmployeesImages employeeImageColors={employeeImageColors} />
                        </Space>
                    ) : (
                        <Title level={5} style={{ margin: '0' }}>{t('o-project-card-no-employees')}</Title>
                    )}
                </Col>
            </Row>
        </>
    );
};

export { ProjectCard };