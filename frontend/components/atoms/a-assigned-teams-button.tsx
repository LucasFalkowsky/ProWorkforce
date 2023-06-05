import React from 'react';
import { Row, Typography } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { colors, getAntDesignColor } from '../../styles/colors';

type AssignedTeamsButtonProps = {
    isOpen: boolean,
};

const AssignedTeamsButton: React.FC<AssignedTeamsButtonProps> = ({
    isOpen,
}) => {
    const { Text } = Typography;

    return (
        <>
            <Row 
                style={{
                    width: '100%',
                    display: 'inline-flex',
                    justifyContent: 'space-between',
                    color: getAntDesignColor(colors.PRIMARY)[5],
                    backgroundColor: getAntDesignColor(colors.PRIMARY)[0],
                    alignItems: 'center',
                    padding: '20px',
                    borderRadius: '8px 8px 0 0',
                    border: `1px solid ${getAntDesignColor(colors.NEUTRAL)[3]}`,
                    boxShadow: `0 -2px 3px ${getAntDesignColor(colors.NEUTRAL)[3]}` 
                }}
            >
                <Text strong style={{ color: getAntDesignColor(colors.PRIMARY)[5] }}>
                    Assigned Teams
                </Text>
                {isOpen ? <DownOutlined /> : <UpOutlined />}
            </Row>
        </>
    );
};

export { AssignedTeamsButton };