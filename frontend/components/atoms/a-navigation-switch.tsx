import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { colors, getAntDesignColor } from '../../styles/colors';

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
                transform: 'rotate(45deg)',
                transformOrigin: 'center center',
                boxShadow: `2px -2px 2px ${getAntDesignColor(colors.NEUTRAL)[3]}`,
                marginLeft: '-21.5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onClick={() => {clicked}}
            >
                {isOpen ? (
                    <LeftOutlined style={{ transform: 'rotate(-45deg)', color: getAntDesignColor(colors.NEUTRAL)[4] }} />
                ) : (
                    <RightOutlined style={{ transform: 'rotate(-45deg)', color: getAntDesignColor(colors.NEUTRAL)[4] }} />
                )
                }
            </div>
        </>
    );
};

export { NavigationSwitch };