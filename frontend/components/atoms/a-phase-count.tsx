import React from 'react';
import { Space, Typography } from 'antd';
import { GroupOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import '../../../src/i18n'

type PhaseCountProps = {
    phaseCount?: number;
    finishedPhaseCount?: number;
}

const PhaseCount: React.FC<PhaseCountProps> = ({
    phaseCount, finishedPhaseCount,
}) => {
    const { t } = useTranslation();
    const { Text } = Typography;

    return (
        <>
            {phaseCount && finishedPhaseCount ? (
                <Space size={'small'}><GroupOutlined /><Text>{`${finishedPhaseCount} / ${phaseCount} ${t('a-phase-count-phase')}`}</Text></Space>
            ) : (
                <Text>{t('o-project-card-no-phases')}</Text>
            )}
        </>
    );
};

export { PhaseCount };