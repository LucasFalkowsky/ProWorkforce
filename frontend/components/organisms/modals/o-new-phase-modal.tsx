import { Col, Input, Modal, Form, DatePicker, Row, Button, Typography, Select, SelectProps } from 'antd';
import React from 'react';
import variables from '../../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../../src/i18n';
import dayjs from 'dayjs';

export type ProjectPhaseProps = {
    id: string,
    name: string,
}

type NewPhaseModalProps = {
    isOpen: boolean,
    setIsOpen: () => void,
    onCreate: (data: any) => void,
    startDate: string,
    endDate: string,
    projectPhases: ProjectPhaseProps[],
}

const NewPhaseModal: React.FC<NewPhaseModalProps> = ({
    isOpen, setIsOpen, onCreate, startDate, endDate, projectPhases
}) => {
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const { Text } = Typography;

    const [formError, setFormError] = React.useState<string | null>(null);

    const [name, setName] = React.useState<string | null>(null);
    const [startdate, setStartdate] = React.useState<string>(startDate);
    const [enddate, setEnddate] = React.useState<string>(endDate);
    const [dependency, setDependency] = React.useState<string | null>(null);
    const options: SelectProps['options'] = [];

    projectPhases.forEach((phase) => {
        options.push({
          label: phase.name,
          value: phase.id,
        });
    });

    const handleSubmit = () => {
        if (!name) {
            setFormError(t('o-new-project-modal-project-name-required-message'))
            return;
        }

        const data = {
            name,
            startdate,
            enddate,
            dependency,
        };
        onCreate(data);

        setFormError(null);
        form.resetFields();
        setName(null); setDependency(null);
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
                                <Input onChange={(event) => setName(event.target.value)} placeholder={`${t('o-new-phase-modal-phase-name-placeholder')}`} style={{ width: '100%' }}/>
                            </Form.Item>
                            <Form.Item
                                name='dependency'
                                validateStatus={formError ? 'error' : undefined}
                                style={{ flex: '1' }}
                            >
                                <label>{t('o-new-phase-modal-phase-dependency')}</label>
                                <Select onChange={(event) => setDependency(event.target.value)} options={options} placeholder={`${t('o-new-phase-modal-phase-dependency-placeholder')}`} />
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

export { NewPhaseModal };