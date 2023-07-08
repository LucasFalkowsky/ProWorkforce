import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import variables from '../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../src/i18n'
import { Colors } from '@prisma/client';
import { getAntDesignColor } from '../../../frontend/styles/colors';

type ButtonSwitchProps = {
    buttonLeft: string,
    buttonRight: string,
    leftIsActive: boolean,
    changeState: () => void,
};

const ButtonSwitch: React.FC<ButtonSwitchProps> = ({
    buttonLeft, buttonRight, leftIsActive, changeState
}) => {
    const { t } = useTranslation();
    const { Text } = Typography;

    return (
        <Row 
            id='ButtonSwitch'
            style={{
                width: '100%',
                display: 'inline-flex',
                justifyContent: 'left',
                backgroundColor: getAntDesignColor(Colors.NEUTRAL)[5],
                padding: variables.paddingXSmall,
                borderRadius: variables.standardBorderRadius,
                border: `1px solid ${getAntDesignColor(Colors.NEUTRAL)[3]}`,
            }}
            onClick={() => changeState()}
        >
            <Col style={{ width: '50%' }}>
                <Button block type={leftIsActive ? 'ghost' : 'default'}>
                    <Text style={{ color: leftIsActive ? getAntDesignColor(Colors.NEUTRAL)[0] : getAntDesignColor(Colors.NEUTRAL)[5] }}>{buttonLeft}</Text>
                </Button>
            </Col>
            <Col style={{ width: '50%' }}>
                <Button block type={leftIsActive ? 'default' : 'ghost'}>
                    <Text style={{ color: !leftIsActive ? getAntDesignColor(Colors.NEUTRAL)[0] : getAntDesignColor(Colors.NEUTRAL)[5] }}>{buttonRight}</Text>
                </Button>
            </Col>
        </Row>
    );
};

export { ButtonSwitch };