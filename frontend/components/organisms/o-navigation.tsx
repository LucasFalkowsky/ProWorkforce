import { Col, Row, Image, Menu, Space, Divider } from 'antd';
import React, { useState } from 'react';
import { NavigationSwitch } from '../atoms/a-navigation-switch';
import proWorkforceLogo from '../../../public/image/ProWorkforce-Logo.svg';
import { HomeOutlined, LogoutOutlined, ProjectOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { colors, getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../pages/i18n.js'

type NavigationProps = {
    isOpen: boolean,
    setIsOpen: () => void,
}

const Navigation: React.FC<NavigationProps> = ({
    isOpen, setIsOpen
}) => {
    const { t } = useTranslation();

    const menuWidth = isOpen ? variables.navBarOpenWidth : variables.navBarClosedWidth;
    const iconLength = isOpen ? variables.navBarLogoBorderOpen : variables.navBarLogoBorderClosed;

    const menuItemStyle = {
        marginInline: '0',
        marginBlock: '0',
        width: '100%',
        borderRadius: '0',
        zIndex: variables.layerTop,
    }

    return (
        <>
            <Row style={{ height: '100vh', alignItems: 'center', zIndex: variables.layerTop }}>
                <Col style={{ display: 'flex', height: 'inherit', flexDirection: 'column', justifyContent: 'space-between', boxShadow: `${variables.boxShadowRightNoColor} ${getAntDesignColor(colors.NEUTRAL)[3]}` }}>
                    <Space size={'large'} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <div />
                        <Col style={{ display: 'flex', justifyContent: 'space-around', height: variables.navBarLogoBorderOpen }}>
                            <Image width={iconLength} style={{ alignSelf: 'center' }} src={proWorkforceLogo.src} />
                        </Col>
                        <Menu mode='vertical' style={{ width: menuWidth, height: variables.navMenuHeight, borderInlineEnd: 'none', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
                            <Menu.Item key="1" style={{ ...menuItemStyle, alignSelf: 'flex-start' }}><Link href='/'><HomeOutlined />{isOpen && ` ${t('o-navigation-overview')}`}</Link></Menu.Item>
                            <Menu.Item key="2" style={{ ...menuItemStyle, alignSelf: 'flex-start' }}><Link href='/project'><ProjectOutlined />{isOpen && ` ${t('o-navigation-projects')}`}</Link></Menu.Item>
                            <Menu.Item key="3" style={{ ...menuItemStyle, alignSelf: 'flex-start' }}><Link href='/employees'><UserOutlined />{isOpen && ` ${t('o-navigation-employees')}`}</Link></Menu.Item>
                            <Divider style={{ marginTop: 'auto' }} />
                            <Menu.Item key="4" style={{ ...menuItemStyle, alignSelf: 'flex-end' }}><Link href='/settings'><SettingOutlined />{isOpen && ` ${t('o-navigation-settings')}`}</Link></Menu.Item>
                            <Menu.Item key="5" style={{ ...menuItemStyle, alignSelf: 'flex-end' }}><Link href='/logout'><LogoutOutlined />{isOpen && ` ${t('o-navigation-logout')}`}</Link></Menu.Item>
                        </Menu>
                    </Space>
                </Col>
                <NavigationSwitch isOpen={isOpen} clicked={() => setIsOpen()} />
            </Row>
        </>
    );
};

export { Navigation };