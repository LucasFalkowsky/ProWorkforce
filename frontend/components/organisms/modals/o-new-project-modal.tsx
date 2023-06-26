import { Col, Input, Modal, Form, DatePicker, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { TeamSelect } from '../../molecules/m-team-select';
import variables from '../../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../../pages/i18n.js'

type NewProjectModalProps = {
    isOpen: boolean,
    setIsOpen: () => void,
    teams: string[],
}

const NewProjectModal: React.FC<NewProjectModalProps> = ({
    isOpen, setIsOpen, teams
}) => {
    const { t } = useTranslation();

    return (
        <>
            <Modal
                title={t('o-new-project-modal-title')}
                centered
                open={isOpen}
                onOk={setIsOpen}
                onCancel={setIsOpen}
            >
                <Form>
                    <Col>
                        <Row style={{ display: 'flex', gap: variables.gapStandard, alignItems: 'baseline' }}>
                            <Form.Item style={{ flex: '1' }}>
                                <label>{t('o-new-project-modal-project-name')}</label>
                                <Input placeholder={`${t('o-new-project-modal-project-name-placeholder')}`} style={{ width: '100%' }}/>
                            </Form.Item>
                            <Form.Item style={{ flex: '1' }}>
                                <label>{t('o-new-project-modal-start-date')}</label>
                                <DatePicker placeholder={`${t('o-new-project-modal-start-date-placeholder')}`}  style={{ width: '100%' }}/>
                            </Form.Item>
                        </Row>
                        <Row style={{ display: 'flex', gap: variables.gapStandard, alignItems: 'baseline' }}>
                            <Form.Item style={{ flex: '1' }}>
                                <label>{t('o-new-project-modal-assigned-teams')}</label>
                                <TeamSelect teams={teams} addStyle={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item style={{ flex: '1' }}>
                                <label>{t('o-new-project-modal-customer')}</label>
                                <Input placeholder={`${t('o-new-project-modal-customer-placeholder')}`}  style={{ width: '100%' }}/>
                            </Form.Item>
                        </Row>
                        <Form.Item>
                                <label>{t('o-new-project-modal-project-description')}</label>
                                <TextArea placeholder={`${t('o-new-project-modal-project-description-placeholder')}`}  style={{ width: '100%' }}/>
                        </Form.Item>
                    </Col>
                </Form>
            </Modal>
        </>
    );
};

export { NewProjectModal };