import { Col, Modal, Form, InputNumber, Space, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { calculateTimeEstimation } from '../../utils/get-time-estimation';
import variables from '../../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../../i18n/i18n.js/index.js'

type CalculateTimeModalProps = {
    isOpen: boolean,
    setIsOpen: () => void,
    setTime: (time: number) => void,
}

const CalculateTimeModal: React.FC<CalculateTimeModalProps> = ({
    isOpen, setIsOpen, setTime
}) => {
    const { t } = useTranslation();
    const [showExplaination, setShowExplaination] = useState(false);
    const [estimatedTime, setEstimatedTime] = useState<number | null >();
    const [inofficialTime, setInofficialTime] = useState<number | null>();
    const [values, setValues] = useState({
        optimisticGuess: 0,
        realisticGuess: 0,
        pessimisticGuess: 0,
    });
    
    const handleChange = (fieldName: string, value: number | null) => {
        setValues((prevValues) => ({
        ...prevValues,
        [fieldName]: value,
        }));
    };

    useEffect(() => {
        const timeEstimation = calculateTimeEstimation(values);
        if (timeEstimation) {
            setEstimatedTime(timeEstimation.estimation);
            setInofficialTime(timeEstimation.externalEstimation);
            return;
        }
        setEstimatedTime(null);
    }, [values]);

    const { Text, Title } = Typography;

    return (
        <>
            <Modal
                title={
                    <div>
                        {t('o-calculate-time-modal-title')} 
                        <InfoCircleOutlined
                            style={{ cursor: 'pointer' }}
                            onClick={() => setShowExplaination(!showExplaination)}
                        />
                    </div>}
                centered
                open={isOpen}
                onOk={() => console.log('OK')}
                onCancel={setIsOpen}
            >
                <Row style={{ display: 'inline-flex', gap: variables.gapStandard, width: '100%' }}>
                    <Form style={{ flex: '1' }}>
                        <Col>
                            <Form.Item>
                                <label>{t('o-calculate-time-modal-optimistic-guess')}</label>
                                <InputNumber
                                    addonAfter={'hours'}
                                    defaultValue={0}
                                    style={{ width: '100%' }}
                                    onChange={(value) => handleChange('optimisticGuess', value)}
                                    onBlur={(event) => handleChange('optimisticGuess', Number(event.target.value))}
                                />
                            </Form.Item>
                            <Form.Item>
                                <label>{t('o-calculate-time-modal-realistic-guess')}</label>
                                <InputNumber
                                    addonAfter={'hours'}
                                    defaultValue={0}
                                    style={{ width: '100%' }}
                                    onChange={(value) => handleChange('realisticGuess', value)}
                                    onBlur={(event) => handleChange('realisticGuess', Number(event.target.value))}
                                />
                            </Form.Item>
                            <Form.Item>
                                <label>{t('o-calculate-time-modal-pessimistic-guess')}</label>
                                <InputNumber
                                    addonAfter={'hours'}
                                    defaultValue={0}
                                    style={{ width: '100%' }}
                                    onChange={(value) => handleChange('pessimisticGuess', value)}
                                    onBlur={(event) => handleChange('pessimisticGuess', Number(event.target.value))}
                                />
                            </Form.Item>
                        </Col>
                        {estimatedTime ? (
                            <>
                                <Col>
                                    <Text>{t('o-calculate-time-modal-internal-estimation')}: </Text><Text strong>{estimatedTime}</Text><Text> {t('o-calculate-time-modal-estimation-hours')}</Text>
                                </Col>
                                <Col>
                                    <Text>
                                    <Text>{t('o-calculate-time-modal-external-estimation')}: </Text><Text strong>{inofficialTime}</Text><Text> {t('o-calculate-time-modal-estimation-hours')}</Text>
                                    </Text>
                                </Col>
                            </>
                            ) : (
                                <Text>{t('o-calculate-time-modal-estimation-placeholder')}</Text>
                            )
                        }
                    </Form>
                    {showExplaination && (
                        <Col style={{ flex: '1' }}>
                            <Title level={5} style={{ marginTop: '0' }}>
                                {t('o-calculate-time-modal-explaination-headline')}
                            </Title>
                            <Text>
                                {t('o-calculate-time-modal-explaination')}
                            </Text>
                        </Col>
                    )}
                </Row>
            </Modal>
        </>
    );
};

export { CalculateTimeModal };