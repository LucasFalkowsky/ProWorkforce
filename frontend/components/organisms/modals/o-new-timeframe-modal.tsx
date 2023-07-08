import { Col, Input, Modal, Form, DatePicker, Row, Button, Typography, Select, SelectProps, InputNumber } from 'antd';
import React from 'react';
import variables from '../../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../../src/i18n';
import dayjs from 'dayjs';

type NewTimeframeModalProps = {
    isOpen: boolean,
    setIsOpen: () => void,
    onCreate: (data: any) => void,
    startdate: string,
    enddate: string,
}

const NewTimeframeModal: React.FC<NewTimeframeModalProps> = ({
    isOpen, setIsOpen, onCreate, startdate, enddate
}) => {
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const { Text } = Typography;

    const [formError, setFormError] = React.useState<string | null>(null);

    const [workweek, setWorkweek] = React.useState<number | null>(null);
    const [startDate, setStartdate] = React.useState<string>(startdate);
    const [endDate, setEnddate] = React.useState<string>(enddate);
    const options: SelectProps['options'] = [];

    const handleSubmit = () => {
        console.log('workweek: ', workweek);
        if (!workweek) {
            setFormError(t('o-new-project-modal-project-name-required-message'))
            return;
        }

        const data = {
            startDate,
            endDate,
            workweek,
        };
        onCreate(data);

        setFormError(null);
        form.resetFields();
        setWorkweek(null);
        setIsOpen();
    };

    const handleClose = () => {
        form.resetFields();
        setIsOpen();
    }

    return (
        <>
            <Modal
                title={t('o-new-phase-modal-title')}
                centered
                open={isOpen}
                onCancel={handleClose}
                footer={[
                    <>
                        <Button key={1} onClick={setIsOpen}>{t('o-new-phase-modal-footer-cancel')}</Button>
                        <Button key={2} type='primary' onClick={handleSubmit}>{t('o-new-phase-modal-footer-submit')}</Button>
                    </>
                ]}
            >
                <Form form={form} name='new-project'>
                    <Col>
                        <Row style={{ display: 'flex', gap: variables.gapStandard, alignItems: 'baseline' }}>
                            <Form.Item
                                name='projectName'
                                validateStatus={formError ? 'error' : undefined}
                                rules={[{
                                    required: true,
                                    message: `${t('o-new-phase-modal-phase-name')}`,
                                }]}
                                style={{ flex: '1' }}
                            >
                                <label>{t('o-new-phase-modal-phase-name')}</label>
                                <InputNumber
                                    onChange={(value) => setWorkweek(value)}
                                    defaultValue={0}
                                    style={{ width: '100%' }}
                                    formatter={(value) => `${value}`}
                                />
                            </Form.Item>
                        </Row>
                        <Row style={{ display: 'flex', gap: variables.gapStandard, alignItems: 'baseline' }}>
                            <Form.Item
                                name='startdate'
                                style={{
                                    flex: '1'
                                }}
                            >
                                <label>{t('o-new-phase-modal-phase-start-date')}</label>
                                <DatePicker defaultValue={dayjs(new Date(startDate))} onChange={(_, dateString) => setStartdate(dateString)} placeholder={`${t('o-new-project-modal-start-date-placeholder')}`}  style={{ width: '100%' }}/>
                            </Form.Item>
                            <Form.Item
                                name='enddate'
                                style={{
                                    flex: '1'
                                }}
                            >
                                <label>{t('o-new-phase-modal-phase-end-date')}</label>
                                <DatePicker defaultValue={dayjs(new Date(endDate))} onChange={(_, dateString) => setEnddate(dateString)} placeholder={`${t('o-new-project-modal-start-date-placeholder')}`}  style={{ width: '100%' }}/>
                            </Form.Item>
                        </Row>
                    </Col>
                    {formError && (
                        <Text type='danger'>{formError}</Text>
                    )}
                </Form>
            </Modal>
        </>
    );
};

export { NewTimeframeModal };