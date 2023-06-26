import React, { DOMElement, useEffect } from 'react';
import { WeekDisplay } from '../atoms/a-week-display';
import { Col, Row } from 'antd';
import { DayColumn } from '../atoms/a-day-column';
import { colors } from '../../styles/colors';

export type DailyTeamData = {
    teamId: string,
    teamColor: colors,
    worktime: number,
    maxWorktime: number,
}

export type WeekData = {
    week: number,
    days: {
        day: number,
        date: string,
        teamData: DailyTeamData[],
        isNonWorkingDay?: boolean,
    }[],
}

type WeekRowProps = {
    weekData: WeekData,
    color: colors,
    rowHeight: string,
    isStart?: boolean,
    setNewYear: (year: number, offsetX: number) => void,
}

const WeekRow: React.FC<WeekRowProps> = ({
    weekData, color, rowHeight, isStart, setNewYear
}) => {

    return (
        <>
            <Col>
                <WeekDisplay week={weekData.week} isStart={isStart} />
                <Row style={{ height: rowHeight }}>
                    {weekData.days.map((day) => {
                        return (
                            <div key={day.day}>
                                <DayColumn
                                    color={color}
                                    date={day.date}
                                    isNonWorkingDay={day.isNonWorkingDay}
                                    isNewYear={(offset) => setNewYear(new Date(day.date).getFullYear(), offset)}
                                /> 
                            </div>
                        )
                    })}
                </Row>
            </Col>
        </>
    );
};

export { WeekRow };