import React, { DOMElement, useEffect } from 'react';
import { WeekDisplay } from '../atoms/a-week-display';
import { Col, Row } from 'antd';
import { DayColumn } from '../atoms/a-day-column';
import { colors } from '../../styles/colors';

export type WeekData = {
    week: number,
    days: {
        day: number,
        date: string,
        isNonWorkingDay?: boolean,
    }[],
}

type WeekRowProps = {
    weekData: WeekData,
    color: colors,
    isStart?: boolean,
    setNewYear: (year: number, offsetX: number) => void,
}

const WeekRow: React.FC<WeekRowProps> = ({
    weekData, color, isStart, setNewYear
}) => {

    return (
        <>
            <Col>
                <WeekDisplay week={weekData.week} isStart={isStart} />
                <Row style={{ height: '400px' }}>
                    {weekData.days.map((day, idx) => {
                        console.log(new Date(day.date).getFullYear());
                        return (
                            <DayColumn
                                key={day.day}
                                color={color}
                                date={day.date}
                                isNonWorkingDay={day.isNonWorkingDay}
                                isNewYear={(offset) => setNewYear(new Date(day.date).getFullYear(), offset)}
                            /> 
                        )
                    })}
                </Row>
            </Col>
        </>
    );
};

export { WeekRow };