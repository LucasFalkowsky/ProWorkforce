import React from 'react';
import { Image, Space } from 'antd';
import { Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import variables from '../../styles/variables.module.scss';

type ProjectHeaderProps = {
    projectImagePath: string,
    projectName: string,
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
    projectImagePath, projectName,
}) => {
    const { Title } = Typography;
    return (
        <>
            <Space size={'small'} style={{ display: "inline-flex", justifyContent: "space-between", alignItems: "center" }}>
                <Image width={projectName} src={projectImagePath} style={{ borderRadius: variables.hugeBorderRadius }} />
                <Title level={1}>{projectName} <EditOutlined /></Title>
            </Space>
        </>
    );
};

export { ProjectHeader };