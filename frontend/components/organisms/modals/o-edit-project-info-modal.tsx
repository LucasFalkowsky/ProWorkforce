import { Col, Input, Modal, Form, DatePicker, Row, Button, Typography } from 'antd';
import React, { useEffect } from 'react';
import { TeamSelect } from '../../molecules/m-team-select';
import variables from '../../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../../src/i18n'

export type ChangeProjectInfoType = {
    newStartDate: string | null,
    newCustomer: string | null,
};

type EditProjectInfoModalProps = {
    isOpen: boolean,
    setIsOpen: () => void,
    onSave: (data: ChangeProjectInfoType) => void,
}

const EditProjectInfoModal: React.FC<EditProjectInfoModalProps> = ({
    isOpen, setIsOpen, onSave
}) => {
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const { Text } = Typography;

    const [formError, setFormError] = React.useState<string | null>(null);

    const [startDate, setStartDate] = React.useState<string | null>(null);
    const [customer, setCustomer] = React.useState<string | null>(null);

    const handleSubmit = () => {
        const data: ChangeProjectInfoType = {
            newStartDate: startDate,
            newCustomer: customer,
        };
        setFormError(null);
        form.resetFields();
        setIsOpen();
        
        onSave(data);
    };

    const handleClose = () => {
        form.resetFields();
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
                    </>
                ]}
            >
                <Form form={form} name='new-project' style={{ display: 'flex', flexDirection: 'row', gap: variables.gapStandard, alignItems: 'baseline' }}>
                    <Form.Item
                        name='startDate'
                        style={{
                            flex: '1'
                        }}
                    >
                        <label>{t('o-new-project-modal-start-date')}</label>
                        <DatePicker onChange={(_, dateString) => setStartDate(dateString)} placeholder={`${t('o-new-project-modal-start-date-placeholder')}`}  style={{ width: '100%' }}/>
                    </Form.Item>
                    <Form.Item
                        name='customer'
                        style={{
                            flex: '1'
                        }}
                    >
                        <label>{t('o-new-project-modal-customer')}</label>
                        <Input onChange={(event) => setCustomer(event.target.value)} placeholder={`${t('o-new-project-modal-customer-placeholder')}`}  style={{ width: '100%' }}/>
                    </Form.Item>
                    {formError && (
                        <Text type='danger'>{formError}</Text>
                    )}
                </Form>
            </Modal>
        </>
    );
};

export { EditProjectInfoModal };