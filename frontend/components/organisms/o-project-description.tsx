import React, { useState } from 'react';
import { Col, Space, Typography, Input } from 'antd';
import { ProjectDescriptionButton } from '../atoms/a-project-description-button';
import variables from '../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../src/i18n'

type ProjectDescriptionProps = {
    description: string,
    setDescription: (description: string) => void,
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
    description, setDescription
}) => {
    const { t } = useTranslation();

    const { Title, Text } = Typography;
    const { TextArea } = Input;
    const [editDescription, setEditDescription] = useState<boolean>(false);

    return (
        <>
            <Col style={{ display: 'flex', flexDirection: 'column', gap: variables.gapStandard, width: '100%', alignItems: 'baseline' }}>
                <Space size={'small'} style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                    <Title level={2}>{t('o-project-description-title')}</Title>
                    <ProjectDescriptionButton
                        edit={editDescription}
                        setEditDescription={setEditDescription}
                    />
                </Space>
                {editDescription ? (
                    <>
                        <TextArea
                            placeholder={`${t('o-project-description-placeholder')}`}
                            value={description}
                            rows={8}
                            style={{ width: '100%' }}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </>
                ) : (
                    <Text>{description}</Text>
                )}
            </Col>
        </>
    );
};

export { ProjectDescription };