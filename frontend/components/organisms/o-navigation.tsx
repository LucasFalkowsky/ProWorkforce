import { Col, Row, Image, Menu, Space, Divider } from 'antd';
import React, { useState } from 'react';
import { NavigationSwitch } from '../atoms/a-navigation-switch';
import proWorkforceLogo from '../../../public/image/ProWorkforce-Logo.svg';
import { HomeOutlined, LogoutOutlined, ProjectOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import variables from '../../styles/variables.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../src/i18n'
import { getAntDesignColor } from '../../../frontend/styles/colors';
import { Colors } from '@prisma/client';

type NavigationProps = {
    isOpen: boolean,
    setIsOpen: () => void,
}

const Navigation: React.FC<NavigationProps> = ({
    isOpen, setIsOpen
}) => {
    const { t } = useTranslation();
    const white = getAntDesignColor(Colors.NEUTRAL)[0];

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
            <Row style={{ position: 'fixed', height: '100vh', alignItems: 'center', zIndex: variables.layerTop }}>
                <Col style={{ display: 'flex', height: 'inherit', flexDirection: 'column', justifyContent: 'space-between', boxShadow: `${variables.boxShadowRightNoColor} ${getAntDesignColor(Colors.NEUTRAL)[3]}` }}>
                    <Space size={'large'} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: white }}>
                        <div />
                        <Col style={{ display: 'flex', justifyContent: 'space-around', height: variables.navBarLogoBorderOpen }}>
                            <img style={{ alignSelf: 'center', width: iconLength }} src={proWorkforceLogo.src} />
                        </Col>
                        <Menu mode='vertical' style={{
                            width: menuWidth,
                            height: variables.navMenuHeight,
                            borderInlineEnd: 'none',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'baseline',
                            transition: 'all 0.5s ease-in-out',
                        }}>
                            <Menu.Item key="1" style={{ ...menuItemStyle, alignSelf: 'flex-start' }}><Link href='/overview'><HomeOutlined />{isOpen && ` ${t('o-navigation-overview')}`}</Link></Menu.Item>
                            <Menu.Item key="2" style={{ ...menuItemStyle, alignSelf: 'flex-start' }}><Link href='/projects'><ProjectOutlined />{isOpen && ` ${t('o-navigation-projects')}`}</Link></Menu.Item>
                            <Menu.Item key="3" style={{ ...menuItemStyle, alignSelf: 'flex-start' }}><Link href='/employees'><UserOutlined />{isOpen && ` ${t('o-navigation-employees')}`}</Link></Menu.Item>
                            <Divider style={{ marginTop: 'auto' }} />
                            <Menu.Item key="4" style={{ ...menuItemStyle, alignSelf: 'flex-end' }}><Link href='/settings'><SettingOutlined />{isOpen && ` ${t('o-navigation-settings')}`}</Link></Menu.Item>
                            <Menu.Item key="5" style={{ ...menuItemStyle, alignSelf: 'flex-end' }}><Link href='/logout'><LogoutOutlined />{isOpen && ` ${t('o-navigation-logout')}`}</Link></Menu.Item>
                        </Menu>
                    </Space>
                </Col>
                <NavigationSwitch isOpen={isOpen} clicked={setIsOpen} />
            </Row>
        </>
    );
};

export default Navigation;