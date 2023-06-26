import React from 'react';
import { Typography } from 'antd';
import { colors, getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';

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
                    width: variables.iconDiameter,
                    height: variables.iconDiameter,
                    backgroundColor: getAntDesignColor(color)[5],
                    borderRadius: variables.borderRadiusCircle,
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