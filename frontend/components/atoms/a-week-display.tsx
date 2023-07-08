import React from 'react';
import { Typography } from 'antd';
import { getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../src/i18n'
import { Colors } from '@prisma/client';

type WeekDisplayProps = {
    week: number,
    firstDay: string,
    lastDay: string,
    isStart?: boolean,
}

const WeekDisplay: React.FC<WeekDisplayProps> = ({
    week, firstDay, lastDay, isStart
}) => {
    const { t } = useTranslation();
    const { Text } = Typography;

    return (
        <>
            <div style={{
                width: variables.weekDisplayWidth,
                height: variables.weekDisplayHeight,
                background: `${isStart ? getAntDesignColor(Colors.PRIMARY)[5] : 'none'}`,
                borderTopLeftRadius: variables.standardBorderRadius,
                borderTopRightRadius: variables.standardBorderRadius,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                userSelect: 'none',
            }}>
                <Text strong={isStart} style={{ color: `${isStart ? getAntDesignColor(Colors.NEUTRAL)[0] : getAntDesignColor(Colors.NEUTRAL)[12]}` }}>
                    {`${new Date(firstDay).toLocaleDateString(`${t('a-date-range-lang')}`, { month: 'short', day: 'numeric' }).replace(/\s/g, '')} - ${new Date(lastDay).toLocaleDateString(`${t('a-date-range-lang')}`, { month: 'short', day: 'numeric' }).replace(/\s/g, '')}`}
                </Text>
                <Text strong={isStart} style={{ color: `${isStart ? getAntDesignColor(Colors.NEUTRAL)[0] : getAntDesignColor(Colors.NEUTRAL)[12]}` }}>
                    
                </Text>
            </div>
        </>
    );
};

export { WeekDisplay };