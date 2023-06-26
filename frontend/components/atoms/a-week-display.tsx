import React from 'react';
import { Typography } from 'antd';
import { colors, getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../pages/i18n.js'

type WeekDisplayProps = {
    week: number,
    isStart?: boolean,
}

const WeekDisplay: React.FC<WeekDisplayProps> = ({
    week, isStart
}) => {
    const { t } = useTranslation();
    const { Text } = Typography;

    return (
        <>
            <div style={{
                width: variables.weekDisplayWidth,
                height: variables.weekDisplayHeight,
                background: `${isStart ? getAntDesignColor(colors.PRIMARY)[5] : 'none'}`,
                borderTopLeftRadius: variables.standardBorderRadius,
                borderTopRightRadius: variables.standardBorderRadius,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text strong={isStart} style={{ color: `${isStart ? getAntDesignColor(colors.NEUTRAL)[0] : getAntDesignColor(colors.NEUTRAL)[12]}` }}>
                    {t('a-week-display-week')} {week}
                </Text>
            </div>
        </>
    );
};

export { WeekDisplay };