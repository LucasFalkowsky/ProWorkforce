import React, { ReactElement } from 'react';
import { Space } from 'antd';
import { InfobarElement, ProjectInfobarElement } from '../molecules/m-project-infobar-element';
import { colors, getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';

type ProjectInfobarProps = {
    infobarElements: InfobarElement[],
}

const ProjectInfobar: React.FC<ProjectInfobarProps> = ({
    infobarElements
}) => {

    return (
        <>
            <Space
                size={'small'}
                style={{
                    display: 'inline-flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    padding: `${variables.paddingHuge} 0`,
                    borderTop: `${variables.thinBorderNoColor} ${getAntDesignColor(colors.NEUTRAL)[2]}`,
                    borderBottom: `${variables.thinBorderNoColor} ${getAntDesignColor(colors.NEUTRAL)[2]}`,
                }}
            >
                {infobarElements.map((infobarElement) => {
                    return (
                        <ProjectInfobarElement icon={infobarElement.icon} title={infobarElement.title} value={infobarElement.value} />
                    );
                })}
            </Space>
        </>
    );
};

export { ProjectInfobar };