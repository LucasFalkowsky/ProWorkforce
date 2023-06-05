import { Col, Input, Modal, Form, DatePicker, Space, Select, SelectProps, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react';
import { TeamSelect } from '../../molecules/m-team-select';

type NewProjectModalProps = {
    isOpen: boolean,
    setIsOpen: () => void,
    teams: string[],
}

const NewProjectModal: React.FC<NewProjectModalProps> = ({
    isOpen, setIsOpen, teams
}) => {

    return (
        <>
            <Modal
                title="Create new Project"
                centered
                open={isOpen}
                onOk={setIsOpen}
                onCancel={setIsOpen}
            >
                <Form>
                    <Col>
                        <Row style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                            <Form.Item style={{ flex: '1' }}>
                                <label>project pame</label>
                                <Input placeholder='example project'  style={{ width: '100%' }}/>
                            </Form.Item>
                            <Form.Item style={{ flex: '1' }}>
                                <label>start date</label>
                                <DatePicker placeholder='select date'  style={{ width: '100%' }}/>
                            </Form.Item>
                        </Row>
                        <Row style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                            <Form.Item style={{ flex: '1' }}>
                                <label>assigned teams</label>
                                <TeamSelect teams={teams} addStyle={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item style={{ flex: '1' }}>
                                <label>customer</label>
                                <Input placeholder='set customer name'  style={{ width: '100%' }}/>
                            </Form.Item>
                        </Row>
                        <Form.Item>
                                <label>project description</label>
                                <TextArea placeholder='describe what the project is about'  style={{ width: '100%' }}/>
                        </Form.Item>
                    </Col>
                </Form>
            </Modal>
        </>
    );
};

export { NewProjectModal };