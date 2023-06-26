import React, { useState } from 'react';
import { Col, Space, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { ProjectDescriptionButton } from '../atoms/a-project-description-button';
import variables from '../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../pages/i18n.js'

type ProjectDescriptionProps = {
    description: string,
    setDescription: (description: string) => void,
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
    description, setDescription
}) => {
    const { t } = useTranslation();

    const { Title, Text } = Typography;
    const [editDescription, setEditDescription] = useState<boolean>(false);
    const [adjustableDescription, setAdjustableDescription] = useState<string>(description);

    return (
        <>
            <Col style={{ display: 'flex', flexDirection: 'column', gap: variables.gapStandard, width: '100%', alignItems: 'baseline' }}>
                <Space size={'small'} style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Title level={2}>{t('o-project-description-title')}</Title>
                    <ProjectDescriptionButton
                        edit={editDescription}
                        setEditDescription={
                            setEditDescription // FOR STORYBOOK
                            // setDescription // FOR PRODUCTION
                        }
                    />
                </Space>
                {editDescription ? (
                    <TextArea
                        placeholder={`${t('o-project-description-placeholder')}`}
                        value={adjustableDescription}
                        rows={8}
                        style={{ width: '100%' }}
                        onChange={(e) => setAdjustableDescription(e.target.value)}
                    />
                ) : (
                    <Text>{adjustableDescription}</Text>
                )}
            </Col>
        </>
    );
};

export { ProjectDescription };