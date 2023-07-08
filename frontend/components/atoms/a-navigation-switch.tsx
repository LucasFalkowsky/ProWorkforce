import React, { MouseEventHandler } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import variables from '../../styles/variables.module.scss';
import { Colors } from '@prisma/client';
import { getAntDesignColor } from '@/frontend/styles/colors';

type NavigationSwitchProps = {
    isOpen: boolean,
    clicked: () => void,
}

const NavigationSwitch: React.FC<NavigationSwitchProps> = ({
    isOpen, clicked,
}) => {
    const [isHovered, setIsHovered] = React.useState<boolean>(false);

    return (
        <>
            <div style={{
                width: '42.5px',
                height: '42.5px',
                backgroundColor: 'white',
                transform: variables.shortRotateRight,
                transformOrigin: 'center center',
                boxShadow: `${variables.boxShadowRotatedRightNoColor} ${getAntDesignColor(Colors.NEUTRAL)[3]}`,
                marginLeft: '-21.5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: variables.layerCenter,
                cursor: isHovered ? 'pointer' : 'default',
            }}
            onMouseOver={(e) => setIsHovered(true)}
            onClick={clicked}
            >
                {isOpen ? (
                    <LeftOutlined style={{ transform: variables.shortRotateLeft, color: getAntDesignColor(Colors.NEUTRAL)[4] }} />
                ) : (
                    <RightOutlined style={{ transform: variables.shortRotateLeft, color: getAntDesignColor(Colors.NEUTRAL)[4] }} />
                )
                }
            </div>
        </>
    );
};

export { NavigationSwitch };