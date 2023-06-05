import { Col, Row, Image, Menu, Space, Divider } from 'antd';
import React, { useState } from 'react';
import { NavigationSwitch } from '../atoms/a-navigation-switch';
import proWorkforceLogo from '../../../public/image/ProWorkforce-Logo.svg';
import { HomeOutlined, LogoutOutlined, ProjectOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { colors, getAntDesignColor } from '../../styles/colors';

type NavigationProps = {
    isOpen: boolean,
    setIsOpen: () => void,
}

const Navigation: React.FC<NavigationProps> = ({
    isOpen, setIsOpen
}) => {
    const menuWidth = isOpen ? '200px' : '47px';
    const iconBorderLength = isOpen ? '100px' : '29px';

    return (
        <>
            <Row style={{ height: '100vh', alignItems: 'center', zIndex: 100 }}>
                <Col style={{ display: 'flex', height: 'inherit', flexDirection: 'column', justifyContent: 'space-between', boxShadow: `2px 0 3px ${getAntDesignColor(colors.NEUTRAL)[3]}` }}>
                    <Space size={'large'} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <div />
                        <Col style={{ display: 'flex', justifyContent: 'space-around', height: '100px' }}>
                            <Image width={iconBorderLength} style={{ alignSelf: 'center' }} src={proWorkforceLogo.src} />
                        </Col>
                        <Menu mode='vertical' style={{ width: menuWidth, height: 'calc(100vh - 148px)', borderInlineEnd: 'none', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
                            <Menu.Item key="1" style={{ marginInline: '0', marginBlock: '0', width: '100%', borderRadius: '0', alignSelf: 'flex-start' }}><Link href='/'><HomeOutlined />{isOpen && ' Dashboard'}</Link></Menu.Item>
                            <Menu.Item key="2" style={{ marginInline: '0', marginBlock: '0', width: '100%', borderRadius: '0', alignSelf: 'flex-start' }}><Link href='/project'><ProjectOutlined />{isOpen && ' Project'}</Link></Menu.Item>
                            <Menu.Item key="3" style={{ marginInline: '0', marginBlock: '0', width: '100%', borderRadius: '0', alignSelf: 'flex-start' }}><Link href='/employees'><UserOutlined />{isOpen && ' Employees'}</Link></Menu.Item>
                            <Divider style={{ marginTop: 'auto' }} />
                            <Menu.Item key="4" style={{ marginInline: '0', marginBlock: '0', width: '100%', borderRadius: '0', alignSelf: 'flex-end' }}><Link href='/settings'><SettingOutlined />{isOpen && ' Settings'}</Link></Menu.Item>
                            <Menu.Item key="5" style={{ marginInline: '0', marginBlock: '0', width: '100%', borderRadius: '0', alignSelf: 'flex-end' }}><Link href='/logout'><LogoutOutlined />{isOpen && ' Logout'}</Link></Menu.Item>
                        </Menu>
                    </Space>
                </Col>
                <NavigationSwitch isOpen={isOpen} clicked={() => setIsOpen()} />
            </Row>
        </>
    );
};

export { Navigation };