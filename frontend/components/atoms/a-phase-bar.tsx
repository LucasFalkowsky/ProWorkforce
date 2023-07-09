import React, { useEffect, useState } from 'react';
import { Popconfirm, Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import variables from '../../styles/variables.module.scss';
import '../../../src/i18n'
import { Colors, Employee, Team } from '@prisma/client';
import { TeamIcon } from './a-team-icon';
import { getAntDesignColor } from '@/frontend/styles/colors';
import { CldImage } from 'next-cloudinary';

type PhaseBarProps = {
    team: Team;
    employee?: Employee;
    daysInPhase: number;
    offset: number;
    index: number;
    name?: string;
    passive?: boolean;
}

const PhaseBar: React.FC<PhaseBarProps> = ({
    team, employee, daysInPhase, offset, index, name, passive
}) => {
    const { t } = useTranslation();

    const { Text } = Typography;

    const translate = `translate(
        calc(${offset} * ${variables.dayColumnWidth}), 
        calc(${variables.weekDisplayHeight} + ((${index} * ${variables.phaseRowHeight}) + (${index + 1} * ${variables.gapStandard})))
    )`;

    return (
        <Row
            style={{
                position: 'absolute',
                display: 'inline-flex',
                alignItems: 'center',
                gap: variables.gapStandard,
                backgroundColor: passive ? getAntDesignColor(Colors.NEUTRAL)[1] : getAntDesignColor(team?.color!)[1],
                border: `${variables.mediumBorderNoColor} ${passive ? getAntDesignColor(Colors.NEUTRAL)[5] : getAntDesignColor(team?.color!)[5]}`,
                padding: variables.paddingSmall,
                width: `calc(${daysInPhase} * ${variables.dayColumnWidth})`,
                borderRadius: variables.xSmallBorderRadius,
                zIndex: '100',
                transform: translate,
                cursor: 'pointer',
            }}
        >
            {!passive && employee && (
                <>
                    {
                        employee.image ? (
                            <CldImage width="35" height="35" src={employee.image} alt={''} style={{ borderRadius: variables.largeBorderRadius }} />
                        ) : (
                            <TeamIcon team={employee.lastname} color={team.color} isWhite />
                        )
                    }
                    <Text style={{textOverflow: 'ellipsis'}}>{employee.firstname} {employee.lastname}</Text>
                </>
            )}
            {!passive && !employee && (
                <>
                    <TeamIcon team={team.name} color={team.color} isWhite />
                    <Text style={{textOverflow: 'ellipsis'}}>{name ? name : team.name}</Text>
                </>
            )}
            {passive && (
                <Text style={{textOverflow: 'ellipsis'}}>{name ? name : team.name}</Text>
            )}
        </Row>
    );
};

export { PhaseBar };