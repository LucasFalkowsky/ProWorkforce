import { Col, Input, Modal, Form, DatePicker, Row, Button, Typography } from 'antd';
import React, { useEffect } from 'react';
import { TeamSelect } from '../../molecules/m-team-select';
import variables from '../../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../../src/i18n'
import { Team } from '@prisma/client';
import { set } from 'superstruct';

type NewProjectModalProps = {
    isOpen: boolean,
    setIsOpen: () => void,
    onCreate: (data: any) => void,
    teams: Team[],
}

const NewProjectModal: React.FC<NewProjectModalProps> = ({
    isOpen, setIsOpen, onCreate, teams
}) => {
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const { Text } = Typography;

    const [formError, setFormError] = React.useState<string | null>(null);

    const [name, setName] = React.useState<string | null>(null);
    const [startDate, setStartDate] = React.useState<string | null>(null);
    const [assignedTeams, setAssignedTeams] = React.useState<string[]>(teams.map((team) => team.id));
    const [customer, setCustomer] = React.useState<string | null>(null);
    const [description, setDescription] = React.useState<string | null>(null);

    const handleSubmit = () => {
        if (!name || !startDate || assignedTeams.length === 0 || !customer || !description) {
            setFormError(t('o-new-project-modal-project-name-required-message'))
            return;
        }

        const data = {
            name,
            startDate,
            assignedTeams,
            customer,
            description
        };
        onCreate(data);

        setFormError(null);
        form.resetFields();
        setName(null); setStartDate(null); setAssignedTeams([]); setCustomer(null); setDescription(null);
        setIsOpen();
    };

    const handleClose = () => {
        form.resetFields();
        setIsOpen();
    }

    return (
        <>
            <Modal
                title={t('o-new-project-modal-title')}
                centered
                open={isOpen}
                onCancel={handleClose}
                footer={[
                    <>
                        <Button key={1} onClick={setIsOpen}>{t('o-new-project-modal-footer-cancel')}</Button>
                        <Button key={2} type='primary' onClick={handleSubmit}>{t('o-new-project-modal-footer-submit')}</Button>
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
                                    message: `${t('o-new-project-modal-project-name-required-message')}`,
                                }]}
                                style={{ flex: '1' }}
                            >
                                <label>{t('o-new-project-modal-project-name')}</label>
                                <Input onChange={(event) => setName(event.target.value)} placeholder={`${t('o-new-project-modal-project-name-placeholder')}`} style={{ width: '100%' }}/>
                            </Form.Item>
                            <Form.Item
                                name='startDate'
                                style={{
                                    flex: '1'
                                }}
                            >
                                <label>{t('o-new-project-modal-start-date')}</label>
                                <DatePicker onChange={(_, dateString) => setStartDate(dateString)} placeholder={`${t('o-new-project-modal-start-date-placeholder')}`}  style={{ width: '100%' }}/>
                            </Form.Item>
                        </Row>
                        <Row style={{ display: 'flex', gap: variables.gapStandard, alignItems: 'baseline' }}>
                            <Form.Item
                                name='assignedTeams'
                                style={{
                                    flex: '1'
                                }}
                            >
                                <label>{t('o-new-project-modal-assigned-teams')}</label>
                                <TeamSelect teams={teams} selectedTeams={[]} addStyle={{ width: '100%' }} onSetTeams={setAssignedTeams} />
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
                        </Row>
                        <Form.Item
                            name='projectDescription'
                        >
                            <label>{t('o-new-project-modal-project-description')}</label>
                            <Input.TextArea
                                onChange={(event) => setDescription(event.target.value)} 
                                placeholder={
                                    `${t('o-new-project-modal-project-description-placeholder')}`
                                } 
                                style={{
                                    width: '100%'
                                }}
                            />
                        </Form.Item>
                    </Col>
                    {formError && (
                        <Text type='danger'>{formError}</Text>
                    )}
                </Form>
            </Modal>
        </>
    );
};

export { NewProjectModal };