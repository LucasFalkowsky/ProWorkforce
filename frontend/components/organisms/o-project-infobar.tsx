import React, { ReactElement } from 'react';
import { Button, Space } from 'antd';
import { InfobarElement, ProjectInfobarElement } from '../molecules/m-project-infobar-element';
import variables from '../../styles/variables.module.scss';
import { useTranslation } from "react-i18next";
import { Colors } from '@prisma/client';
import { getAntDesignColor } from '../../../frontend/styles/colors';

type ProjectInfobarProps = {
    infobarElements: InfobarElement[],
    onEdit: () => void,
}

const ProjectInfobar: React.FC<ProjectInfobarProps> = ({
    infobarElements, onEdit
}) => {
    const { t } = useTranslation();

    return (
        <>
            <Space
                size={'small'}
                style={{
                    display: 'inline-flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    padding: `${variables.paddingHuge} 0`,
                    borderTop: `${variables.thinBorderNoColor} ${getAntDesignColor(Colors.NEUTRAL)[2]}`,
                    borderBottom: `${variables.thinBorderNoColor} ${getAntDesignColor(Colors.NEUTRAL)[2]}`,
                }}
            >
                <Button onClick={onEdit}>{t('o-project-infobar-edit')}</Button>
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