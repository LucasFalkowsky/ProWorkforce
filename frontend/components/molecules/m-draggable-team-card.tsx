import React from 'react';
import { Row, Space, Typography } from 'antd';
import { TeamIcon } from '../atoms/a-team-icon';
import { colors } from '../atoms/a-employee-image';
import { getAntDesignColor } from '../../styles/colors';
import { RightOutlined, SelectOutlined } from '@ant-design/icons';

type DraggableTeamCardProps = {
    team: string,
    color: colors,
    isSelected: boolean,
};

const DraggableTeamCard: React.FC<DraggableTeamCardProps> = ({
    team, color, isSelected
}) => {
    const { Text } = Typography;

    return (
        <>
            <Row
                style={{
                    display: 'inline-flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '250px',
                    height: '100px',
                    border: `1px solid ${isSelected ? getAntDesignColor(color)[1] : getAntDesignColor(colors.NEUTRAL)[4]}`,
                    padding: '10px',
                    boxShadow: `${isSelected ? `inset 0 0 8px 2px ${getAntDesignColor(color)[1]}` : 'none'}`,
                }}
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