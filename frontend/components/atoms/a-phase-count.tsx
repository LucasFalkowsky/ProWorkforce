import React from 'react';
import { Space, Typography } from 'antd';
import { GroupOutlined } from '@ant-design/icons';

type PhaseCountProps = {
    phaseCount: number;
    finishedPhaseCount: number;
}

const PhaseCount: React.FC<PhaseCountProps> = ({
    phaseCount, finishedPhaseCount,
}) => {
    const { Text } = Typography;

    return (
        <>
            <Space size={'small'}><GroupOutlined /><Text>{finishedPhaseCount} / {phaseCount} phases</Text></Space>
        </>
    );
};

export { PhaseCount };