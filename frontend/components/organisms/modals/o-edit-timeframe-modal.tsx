import { Col, Input, Modal, Form, DatePicker, Row, Button, Typography, InputNumber } from 'antd';
import React, { useEffect } from 'react';
import { TeamSelect } from '../../molecules/m-team-select';
import variables from '../../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../../src/i18n'
import dayjs from 'dayjs';

export type ChangeTimeframeType = {
    newStartDate: string,
    newEndDate: string,
    newWorkweek: number,
};

type EditTimeframeModalProps = {
    isOpen: boolean,
    startdate: Date,
    enddate: Date,
    workweek: number,
    setIsOpen: () => void,
    onSave: (data: ChangeTimeframeType) => void,
    onDelete: () => void,
}

const EditTimeframeModal: React.FC<EditTimeframeModalProps> = ({
    isOpen, startdate, enddate, workweek, setIsOpen, onSave, onDelete
}) => {
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const { Text } = Typography;

    const [formError, setFormError] = React.useState<string | null>(null);

    const [startDate, setStartDate] = React.useState<string>(startdate.toString());
    const [endDate, setEndDate] = React.useState<string>(enddate.toString());
    const [workWeek, setWorkWeek] = React.useState<number>(workweek);

    const handleSubmit = () => {
        const data: ChangeTimeframeType = {
            newStartDate: startDate,
            newEndDate: endDate,
            newWorkweek: workWeek,
        };
        setFormError(null);
        setIsOpen();
        onSave(data);
    };

    const handleClose = () => {
        setIsOpen();
    }

    return (
        <>
            <Modal
                title={t('o-edit-project-info-modal-title')}
                centered
                open={isOpen}
                onCancel={handleClose}
                footer={[
                    <>
                        <Button key={1} onClick={setIsOpen}>{t('o-edit-project-info-modal-cancel')}</Button>
                        <Button key={2} type='primary' onClick={handleSubmit}>{t('o-edit-project-info-modal-submit')}</Button>
                        <Button key={3} type='ghost' onClick={onDelete}>{t('o-edit-timeframe-modal-delete')}</Button>
                    </>
                ]}
            >
                <Form form={form} name='new-project' style={{ display: 'flex', flexDirection: 'row', gap: variables.gapStandard, alignItems: 'baseline' }}>
                    <Col>
                        <Row style={{ display: 'flex', gap: variables.gapStandard, alignItems: 'baseline' }}>
                            <Form.Item
                                name='startDate'
                                style={{
                                    flex: '1'
                                }}
                            >
                                <label>{t('o-new-project-modal-start-date')}</label>
                                <DatePicker onChange={(_, dateString) => setStartDate(dateString)} defaultValue={startdate ? dayjs(new Date(startdate)) : undefined} style={{ width: '100%' }}/>
                            </Form.Item>
                            <Form.Item
                                name='endDate'
                                style={{
                                    flex: '1'
                                }}
                            >
                                <label>{t('o-new-project-modal-end-date')}</label>
                                <DatePicker onChange={(_, dateString) => setEndDate(dateString)} defaultValue={enddate ? dayjs(new Date(enddate)) : undefined} style={{ width: '100%' }}/>
                            </Form.Item>
                            {formError && (
                                <Text type='danger'>{formError}</Text>
                            )}
                        </Row>
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
                                    onChange={(value) => setWorkWeek(value ? value : 0)}
                                    defaultValue={workweek ? workweek : undefined}
                                    style={{ width: '100%' }}
                                    formatter={(value) => `${value}`}
                                />
                            </Form.Item>
                    </Col>
                </Form>
            </Modal>
        </>
    );
};

export { EditTimeframeModal };