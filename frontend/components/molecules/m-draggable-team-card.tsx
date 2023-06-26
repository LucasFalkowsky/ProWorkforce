import React, { useEffect, useState } from 'react';
import { Row, Space, Typography } from 'antd';
import { TeamIcon } from '../atoms/a-team-icon';
import { colors } from '../atoms/a-employee-image';
import { getAntDesignColor } from '../../styles/colors';
import { RightOutlined } from '@ant-design/icons';
import variables from '../../styles/variables.module.scss';

type DraggableTeamCardProps = {
    team: string,
    color: colors,
    isSelected: boolean,
    isOpen: boolean,
};

const DraggableTeamCard: React.FC<DraggableTeamCardProps> = ({
    team, color, isSelected, isOpen,
}) => {
    const { Text } = Typography;

    const [selected, setSelected] = useState<boolean>(isSelected);
    const [cardDisplay, setCardDisplay] = useState<string>('none');

    useEffect(() => {
        if (isOpen) {
            setCardDisplay('inline-flex');
        } else {
            setTimeout(() => {
                setCardDisplay('none');
            }, 500)
        }
    }, [isOpen]);

    return (
        <>
            <Row
                style={{
                    display: cardDisplay,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: variables.teamCardWidth,
                    height: variables.teamCardHeight,
                    border: `${variables.thinBorderNoColor} ${isSelected ? getAntDesignColor(color)[1] : getAntDesignColor(colors.NEUTRAL)[4]}`,
                    padding: variables.paddingStandard,
                    boxShadow: `${isSelected ? `${variables.boxShadowSelectedNoColor} ${getAntDesignColor(color)[1]}` : 'none'}`,
                    backgroundColor: `${getAntDesignColor(colors.NEUTRAL)[0]}`
                }}
                onClick={() => setSelected(!selected)}
            >
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    <TeamIcon team={team} color={color} />
                    <Text>{team}</Text>
                </Space>
                <RightOutlined style={{ color: `${isSelected ? getAntDesignColor(color)[2] : getAntDesignColor(colors.NEUTRAL)[4]}` }} />
            </Row>
        </>
    );
};

export { DraggableTeamCard };