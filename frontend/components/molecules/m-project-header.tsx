import React from 'react';
import { Col, Row } from 'antd';
import { Typography } from 'antd';
import variables from '../../styles/variables.module.scss';
import { CldImage } from 'next-cloudinary';
import { TeamIcon } from '../atoms/a-team-icon';
import UploadFile from '../atoms/a-upload-file';
import { getAntDesignColor } from '../../../frontend/styles/colors';
import { Colors } from '@prisma/client';

type ProjectHeaderProps = {
    projectImagePath: string,
    projectName: string,
    changeName: (name: string) => void,
    setNewIcon: (icon: string) => void,
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
    projectImagePath, projectName, changeName, setNewIcon
}) => {
    const [newName, setNewName] = React.useState<string>(projectName);
    const { Title } = Typography;

    const handleChange = () => {
        changeName(newName);
    };
    return (
        <>
            <Row style={{ display: "inline-flex", justifyContent: "center", gap: variables.gapStandard, alignItems: 'center', marginBottom: variables.marginXHuge }}>
                <Col style={{ marginTop: variables.marginStandard, width: variables.projectIconDiameter, height: variables.projectIconDiameter }}>
                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <UploadFile small setImageUrl={setNewIcon} />
                    </div>
                    {projectImagePath ? (
                        <CldImage width="50" height="50" src={projectImagePath} alt={''} style={{ borderRadius: variables.largeBorderRadius }} />
                    ) : (
                        <TeamIcon team={projectName} color={Colors.PRIMARY} />
                    )}
                </Col>
                <Title level={1} editable={{ onChange: setNewName, onEnd: handleChange }} style={{ margin: 0 }}>{projectName}</Title>
            </Row>
        </>
    );
};

export { ProjectHeader };