import React, { useState } from 'react';
import { Row, Space, Tag, Typography } from 'antd';
import { getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';
import { Colors, Employee } from '@prisma/client';
import { CldImage } from 'next-cloudinary';
import { useTranslation } from 'react-i18next';
import { TeamIcon } from '../atoms/a-team-icon';

type EmployeeCardProps = {
    employee: Employee,
    color: Colors,
    isSelected: boolean,
    onSelect?: (employeeId: string | undefined) => void,
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({
    employee, color, isSelected, onSelect,
}) => {
    const { Text } = Typography;
    const { t } = useTranslation();

    return (
        <>
            <Row
                style={{
                    display: 'inline-flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: variables.teamCardWidth,
                    height: variables.teamCardHeight,
                    border: `${variables.thinBorderNoColor} ${isSelected ? getAntDesignColor(color)[1] : getAntDesignColor(Colors.NEUTRAL)[4]}`,
                    padding: variables.paddingStandard,
                    boxShadow: `${isSelected ? `${variables.boxShadowSelectedNoColor} ${getAntDesignColor(color)[1]}` : 'none'}`,
                    backgroundColor: `${getAntDesignColor(Colors.NEUTRAL)[0]}`,
                    cursor: 'pointer',
                }}
                onClick={() => onSelect ? onSelect(isSelected ? undefined : employee.id) : undefined}
            >
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    {employee.image ? (
                        <CldImage width="25" height="25" src={employee.image} alt={''} style={{ borderRadius: variables.largeBorderRadius }} />
                    ) : (
                        <TeamIcon team={employee.lastname} color={color} />
                    )}
                    <Text>{employee.firstname} {employee.lastname}</Text>
                </Space>
                <Tag style={{ color: `${isSelected ? getAntDesignColor(color)[2] : getAntDesignColor(Colors.NEUTRAL)[4]}` }} >
                    {employee.workweek} {`${t('o-employee-card-workweek')}`}
                </Tag>
            </Row>
        </>
    );
};

export { EmployeeCard };