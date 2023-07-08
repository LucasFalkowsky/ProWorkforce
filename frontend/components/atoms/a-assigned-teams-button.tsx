import React from 'react';
import { Row, Typography } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../src/i18n'
import { Colors } from '@prisma/client';

type AssignedTeamsButtonProps = {
    isOpen: boolean,
    changeState: () => void,
};

const AssignedTeamsButton: React.FC<AssignedTeamsButtonProps> = ({
    isOpen, changeState
}) => {
    const { t } = useTranslation();
    const { Text } = Typography;

    return (
        <>
            <Row 
                id='assignedTeamsButton'
                style={{
                    width: '100%',
                    height: variables.assignedTeamsButtonHeight,
                    display: 'inline-flex',
                    justifyContent: 'space-between',
                    color: getAntDesignColor(Colors.PRIMARY)[5],
                    backgroundColor: getAntDesignColor(Colors.PRIMARY)[0],
                    alignItems: 'center',
                    padding: '20px',
                    borderRadius: `${variables.standardBorderRadius} ${variables.standardBorderRadius} 0px 0px`,
                    border: `1px solid ${getAntDesignColor(Colors.NEUTRAL)[3]}`,
                    boxShadow: `${variables.boxShadowTopNoColor} ${getAntDesignColor(Colors.NEUTRAL)[3]}` 
                }}
                onClick={() => changeState()}
            >
                <Text strong style={{ color: getAntDesignColor(Colors.PRIMARY)[5] }}>
                    {t('a-assigned-teams-button-text')}
                </Text>
                {isOpen ? <DownOutlined /> : <UpOutlined />}
            </Row>
        </>
    );
};

export { AssignedTeamsButton };