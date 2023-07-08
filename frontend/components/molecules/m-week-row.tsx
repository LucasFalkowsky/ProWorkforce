import React, { DOMElement, useEffect } from 'react';
import { WeekDisplay } from '../atoms/a-week-display';
import { Col, Row } from 'antd';
import variables from '../../styles/variables.module.scss';
import { DayColumn } from '../atoms/a-day-column';
import { Colors } from '@prisma/client';

export type DailyTeamData = {
    teamId: string,
    teamColor: Colors,
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
    color: Colors,
    isStart?: boolean,
    selectedDay: string | undefined,
    hoveredDay: string | undefined,
    setNewYear: (year: number, offsetX: number) => void,
    onOver: (day: string) => void,
    onDown: (day: string, offestX: number) => void,
    onUp: (day: string) => void,
}

const WeekRow: React.FC<WeekRowProps> = ({
    weekData, color, isStart, selectedDay, hoveredDay, setNewYear, onOver, onDown, onUp,
}) => {
    const isCurrentDayInRange = (startDate: string | undefined, endDate: string | undefined, currentDate: string) => {
        if (!startDate || !endDate) return false;
        const start = new Date(startDate);
        const end = new Date(endDate);
        const current = new Date(currentDate);
    
        // Check if the current date is in between the start and end dates
        if (current >= start && current <= end) {
            return true;
        }
    
        return false;
    };

    return (
        <>
            <Col style={{ height: '100%' }} >
                <WeekDisplay week={weekData.week} firstDay={weekData.days[0].date} lastDay={weekData.days[weekData.days.length - 1].date} isStart={isStart} />
                <Row style={{ height: `calc(100% - ${variables.weekDisplayHeight})` }}>
                    {weekData.days.map((day) => {
                        return (
                            <div key={day.day}>
                                <DayColumn
                                    color={color}
                                    date={day.date}
                                    isNonWorkingDay={day.isNonWorkingDay}
                                    isNewYear={(offset) => setNewYear(new Date(day.date).getFullYear(), offset)}
                                    selected={isCurrentDayInRange(selectedDay, hoveredDay, day.date)}
                                    onOver={onOver}
                                    onDown={onDown}
                                    onUp={onUp}
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