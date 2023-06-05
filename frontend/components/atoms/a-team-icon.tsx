import React from 'react';
import { Typography } from 'antd';
import { colors, getAntDesignColor } from '../../styles/colors';

type TeamIconProps = {
    team: string,
    color: colors,
};

const TeamIcon: React.FC<TeamIconProps> = ({
    team, color,
}) => {
    const { Text } = Typography;
    const antColor = getAntDesignColor(color);

    return (
        <>
            <Text 
                style={{
                    width: '35px',
                    height: '35px',
                    backgroundColor: getAntDesignColor(color)[5],
                    borderRadius: '50%',
                    color: getAntDesignColor(colors.NEUTRAL)[0],
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {team.charAt(0).toUpperCase()}
            </Text>
        </>
    );
};

export { TeamIcon };