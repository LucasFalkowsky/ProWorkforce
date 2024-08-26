import React from 'react';
import { Row, Typography } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { colors, getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../i18n/i18n.js/index.js'

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
                    color: getAntDesignColor(colors.PRIMARY)[5],
                    backgroundColor: getAntDesignColor(colors.PRIMARY)[0],
                    alignItems: 'center',
                    padding: '20px',
                    borderRadius: `${variables.standardBorderRadius} ${variables.standardBorderRadius} 0px 0px`,
                    border: `1px solid ${getAntDesignColor(colors.NEUTRAL)[3]}`,
                    boxShadow: `${variables.boxShadowTopNoColor} ${getAntDesignColor(colors.NEUTRAL)[3]}` 
                }}
                onClick={() => changeState()}
            >
                <Text strong style={{ color: getAntDesignColor(colors.PRIMARY)[5] }}>
                    {t('a-assigned-teams-button-text')}
                </Text>
                {isOpen ? <DownOutlined /> : <UpOutlined />}
            </Row>
        </>
    );
};

export { AssignedTeamsButton };