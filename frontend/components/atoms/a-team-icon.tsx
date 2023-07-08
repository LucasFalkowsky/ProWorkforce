import React from 'react';
import { Typography } from 'antd';
import { getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';
import { Colors } from '@prisma/client';

type TeamIconProps = {
    team: string,
    color: Colors,
    isWhite?: boolean,
};

const TeamIcon: React.FC<TeamIconProps> = ({
    team, color, isWhite
}) => {
    const { Text } = Typography;
    const antColor = getAntDesignColor(color);

    return (
        <>
            <Text 
                style={{
                    width: variables.iconDiameter,
                    height: variables.iconDiameter,
                    backgroundColor: isWhite ? getAntDesignColor(Colors.NEUTRAL)[0] : getAntDesignColor(color)[5],
                    borderRadius: variables.borderRadiusCircle,
                    color: isWhite ? getAntDesignColor(color)[5] : getAntDesignColor(Colors.NEUTRAL)[0],
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