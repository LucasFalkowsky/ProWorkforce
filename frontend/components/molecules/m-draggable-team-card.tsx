import React, { use, useEffect, useState } from 'react';
import { Row, Space, Tag, Typography } from 'antd';
import { TeamIcon } from '../atoms/a-team-icon';
import { getAntDesignColor } from '../../styles/colors';
import { RightOutlined } from '@ant-design/icons';
import variables from '../../styles/variables.module.scss';
import { Colors } from '@prisma/client';

type DraggableTeamCardProps = {
    team: string,
    color: Colors,
    isSelected: boolean,
    isOpen: boolean,
    onSelect?: (team: string | undefined) => void,
};

const DraggableTeamCard: React.FC<DraggableTeamCardProps> = ({
    team, color, isSelected, isOpen, onSelect,
}) => {
    const { Text } = Typography;

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
                    border: `${variables.thinBorderNoColor} ${isSelected ? getAntDesignColor(color)[1] : getAntDesignColor(Colors.NEUTRAL)[4]}`,
                    padding: variables.paddingStandard,
                    boxShadow: `${isSelected ? `${variables.boxShadowSelectedNoColor} ${getAntDesignColor(color)[1]}` : 'none'}`,
                    backgroundColor: `${getAntDesignColor(Colors.NEUTRAL)[0]}`,
                    cursor: 'pointer',
                }}
                onClick={() => onSelect ? onSelect(isSelected ? undefined : team) : undefined}
            >
                <Space size={'small'} style={{ display: 'inline-flex' }}>
                    <TeamIcon team={team} color={color} />
                    <Text>{team}</Text>
                </Space>
                <Tag style={{ color: `${isSelected ? getAntDesignColor(color)[2] : getAntDesignColor(Colors.NEUTRAL)[4]}` }} >
                </Tag>
            </Row>
        </>
    );
};

export { DraggableTeamCard };