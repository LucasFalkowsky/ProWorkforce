import { Col, Modal, Form, InputNumber, Space, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { calculateTimeEstimation } from '../../utils/get-time-estimation';
import variables from '../../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../../src/i18n'
import { set } from 'superstruct';

type CalculateTimeModalProps = {
    isOpen: boolean,
    optimisticGuess: number | null,
    realisticGuess: number | null,
    pessimisticGuess: number | null,
    setIsOpen: () => void,
    setTime: (optimisticGuess: number, realisticGuess: number, pessimisticGuess: number) => void,
}

const CalculateTimeModal: React.FC<CalculateTimeModalProps> = ({
    isOpen, optimisticGuess, realisticGuess, pessimisticGuess, setIsOpen, setTime
}) => {
    const { t } = useTranslation();
    const { Text, Title } = Typography;

    const [showExplaination, setShowExplaination] = useState(false);
    const [estimatedTime, setEstimatedTime] = useState<number | null >();
    const [inofficialTime, setInofficialTime] = useState<number | null>();
    const [optimistic, setOptimistic] = useState<number | null>(optimisticGuess);
    const [realistic, setRealistic] = useState<number | null>(realisticGuess);
    const [pessimistic, setPessimistic] = useState<number | null>(pessimisticGuess);

    useEffect(() => {
        if (!optimistic || !realistic || !pessimistic) return;
        const timeEstimation = calculateTimeEstimation(optimistic, realistic, pessimistic);
        if (timeEstimation) {
            setEstimatedTime(timeEstimation.estimation);
            setInofficialTime(timeEstimation.externalEstimation);
            return;
        }
        setEstimatedTime(null);
    }, [optimistic, realistic, pessimistic]);

    const handleOk = () => {
        if (!optimistic || !realistic || !pessimistic) return;
        setTime(optimistic, realistic, pessimistic)
    }

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
                onOk={handleOk}
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
                                    onChange={(value) => setOptimistic(value)}
                                />
                            </Form.Item>
                            <Form.Item>
                                <label>{t('o-calculate-time-modal-realistic-guess')}</label>
                                <InputNumber
                                    addonAfter={'hours'}
                                    defaultValue={0}
                                    style={{ width: '100%' }}
                                    onChange={(value) => setRealistic(value)}
                                />
                            </Form.Item>
                            <Form.Item>
                                <label>{t('o-calculate-time-modal-pessimistic-guess')}</label>
                                <InputNumber
                                    addonAfter={'hours'}
                                    defaultValue={0}
                                    style={{ width: '100%' }}
                                    onChange={(value) => setPessimistic(value)}
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