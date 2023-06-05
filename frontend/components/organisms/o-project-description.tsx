import React, { useState } from 'react';
import { Col, Space, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { ProjectDescriptionButton } from '../atoms/a-project-description-button';

type ProjectDescriptionProps = {
    description: string,
    setDescription: (description: string) => void,
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
    description, setDescription
}) => {
    const { Title, Text } = Typography;
    const [editDescription, setEditDescription] = useState<boolean>(false);
    const [adjustableDescription, setAdjustableDescription] = useState<string>(description);

    return (
        <>
            <Col style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', alignItems: 'baseline' }}>
                <Space size={'small'} style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Title level={2}>project description</Title>
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
                        placeholder='describe what the project is about'
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