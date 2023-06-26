import React, { useEffect } from 'react';
import { Row, Typography, Space, Popconfirm } from 'antd';
import { colors, getAntDesignColor } from '../../styles/colors';
import { TeamIcon } from './a-team-icon';
import { CheckOutlined, WarningOutlined } from '@ant-design/icons';
import variables from '../../styles/variables.module.scss';

type DraggableTimeSlotProps = {
    offsetX: string,
    length: string,
    team: string,
    color: colors,
    warning?: string[],
    confirmWarning: () => void,
    setNewLength: (length: string) => void,
    setNewPosition: (position: string) => void,
}

const DraggableTimeSlot: React.FC<DraggableTimeSlotProps> = ({
    offsetX, length, team, color, warning, confirmWarning, setNewLength, setNewPosition
}) => {
    const { Text } = Typography;
    const teamColor = getAntDesignColor(color);
    const grey = getAntDesignColor(colors.NEUTRAL);

    useEffect(() => {
        let adjustLength = false;
        let adjustPosition = 0;
        const box = document.getElementById('box');
        const boxRect = box?.getBoundingClientRect();
        const cursorBox = document.getElementById('cursorBox');
        if (!box || !boxRect || !cursorBox) return;
        const checkMouseOverRightBorder = (e: MouseEvent) => {
            if (e.clientY > boxRect.top  &&
            e.clientY < boxRect.bottom &&
            e.clientX > boxRect.right - 8 &&
            e.clientX < boxRect.right + 8) {
                return true;
            } return false;
        }
        const handleMouseMove = (e: MouseEvent) => {
            if ( checkMouseOverRightBorder(e) ) {
                cursorBox.style.cursor = 'col-resize';
            } else if (e.target === box) {
                cursorBox.style.cursor = 'move';
            } else {
                cursorBox.style.cursor = 'default';
            }
        }
        const handkeMouseDown = (e: MouseEvent) => {
            if ( checkMouseOverRightBorder(e) ) {
                box.style.borderStyle = 'dashed';
                box.style.borderWidth = '2px';
                adjustLength = true;
            } else if (e.target === box) {
                box.style.boxShadow = `${variables.boxShadowActiveNoColor} ${teamColor[5]}`;
                box.style.borderWidth = '2px';
                adjustPosition = e.clientX;
            }
        }
        const handleMouseUp = (e: MouseEvent) => {
            box.style.borderStyle = 'solid';
            box.style.borderWidth = '1px';
            box.style.boxShadow = 'none';
            if (adjustLength) {
                adjustLength = false;
                setNewLength(roundToFifteen(e.clientX - boxRect.left));
            } else if (adjustPosition !== 0) {
                setNewPosition(roundToFifteen(e.clientX - adjustPosition));
                adjustPosition = 0;
            }
        }
        const roundToFifteen = (num: number) => {
            const remainder = num % 15;
            if (remainder === 0) {
                return `${num}px`;
            }
            return`${num + (15 - remainder)}px`;
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handkeMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
    }, [])

    return (
        <>
            <div id='cursorBox' style={{ paddingRight: variables.paddingStandard, border: 'none' }}>
                <Row
                    style={{
                        boxSizing: 'border-box',
                        transform: `translateX(${offsetX})`,
                        display: 'inline-flex',
                        justifyContent: 'space-between',
                        width: length,
                        height: variables.timeSlotHeight,
                        backgroundColor: teamColor[0],
                        paddingInline: variables.paddingStandard,
                        border: `${variables.thinBorderNoColor} ${teamColor[5]}`,
                        borderRadius: variables.standardBorderRadius,
                        alignItems: 'center',
                        marginRight: '3px',
                    }}
                    id='box'
                >
                    <Space style={{ alignItems: 'center' }}>
                        <TeamIcon team={team} color={color} />
                        <Text style={{ color: `${teamColor[5]}` }}>{team}</Text>
                    </Space>
                    {warning ? (
                        <Space>
                            <Popconfirm
                                title="Warning!"
                                description={warning}
                                onConfirm={confirmWarning}
                                onOpenChange={() => console.log('open change')}
                                okText="open team planning"
                                cancelText="ignore"
                            >
                                <WarningOutlined style={{ color: `${teamColor[5]}` }} />
                            </Popconfirm>
                        </Space>
                    ) :
                        <CheckOutlined style={{ color: `${teamColor[5]}` }} />
                    }
                </Row>
            </div>
        </>
    );
};

export { DraggableTimeSlot };