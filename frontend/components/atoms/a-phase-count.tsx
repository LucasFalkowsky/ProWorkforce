import React from 'react';
import { Space, Typography } from 'antd';
import { GroupOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import '../../../pages/i18n.js'

type PhaseCountProps = {
    phaseCount: number;
    finishedPhaseCount: number;
}

const PhaseCount: React.FC<PhaseCountProps> = ({
    phaseCount, finishedPhaseCount,
}) => {
    const { t } = useTranslation();
    const { Text } = Typography;

    return (
        <>
            <Space size={'small'}><GroupOutlined /><Text>{finishedPhaseCount} / {phaseCount} {t('a-phase-count-phase')}</Text></Space>
        </>
    );
};

export { PhaseCount };