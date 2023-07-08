import React from 'react';
import { Col, Space } from 'antd';
import { Typography } from 'antd';
import { getAntDesignColor } from '../../styles/colors';
import { Colors } from '@prisma/client';

export type InfobarElement = {
    icon: JSX.Element,
    title: string,
    value: string | JSX.Element,
}

const ProjectInfobarElement: React.FC<InfobarElement> = ({
    icon, title, value
}) => {
    const { Text } = Typography;
    const color = getAntDesignColor(Colors.GOLD);
    return (
        <>
            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Space size={'small'} style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Text style={{ color: color[5] }}>{icon}</Text><Text> {title}</Text>
                </Space>
                <Text>{value}</Text>
            </Col>
        </>
    );
};

export { ProjectInfobarElement };