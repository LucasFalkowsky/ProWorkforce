import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { colors, getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';

type NavigationSwitchProps = {
    isOpen: boolean,
    clicked: () => void,
}

const NavigationSwitch: React.FC<NavigationSwitchProps> = ({
    isOpen, clicked,
}) => {
    return (
        <>
            <div style={{
                width: '42.5px',
                height: '42.5px',
                backgroundColor: 'white',
                transform: variables.shortRotateRight,
                transformOrigin: 'center center',
                boxShadow: `${variables.boxShadowRotatedRightNoColor} ${getAntDesignColor(colors.NEUTRAL)[3]}`,
                marginLeft: '-21.5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: variables.layerCenter,
            }}
            onClick={() => {clicked}}
            >
                {isOpen ? (
                    <LeftOutlined style={{ transform: variables.shortRotateLeft, color: getAntDesignColor(colors.NEUTRAL)[4] }} />
                ) : (
                    <RightOutlined style={{ transform: variables.shortRotateLeft, color: getAntDesignColor(colors.NEUTRAL)[4] }} />
                )
                }
            </div>
        </>
    );
};

export { NavigationSwitch };