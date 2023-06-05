import React from 'react';
import { Typography } from 'antd';
import { colors, getAntDesignColor } from '../../styles/colors';

type WeekDisplayProps = {
    week: number,
    isStart?: boolean,
}

const WeekDisplay: React.FC<WeekDisplayProps> = ({
    week, isStart
}) => {
    const { Text } = Typography;
    return (
        <>
            <div style={{
                width: '105px',
                height: '41px',
                background: `${isStart ? getAntDesignColor(colors.PRIMARY)[5] : 'none'}`,
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text strong={isStart} style={{ color: `${isStart ? getAntDesignColor(colors.NEUTRAL)[0] : getAntDesignColor(colors.NEUTRAL)[12]}` }}>cw {week}</Text>
            </div>
        </>
    );
};

export { WeekDisplay };