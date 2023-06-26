import React, { useEffect, useState } from 'react';
import { WeekData, WeekRow } from '../molecules/m-week-row';
import { Col, Row, Typography } from 'antd';
import { colors, getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';
import { DraggableTeamCard } from '../molecules/m-draggable-team-card';
import { EmployeeTimeframe, DayData } from '../molecules/m-employee-timeframe';
import '../../styles/scrollbar.css'

type DailyTeamData = Omit<'dayData', 'teamId'> & {
    dayData: DayData[],
    teamId: string,
}

export type TeamProps = {
    teamId: string,
    teamName: string,
    teamColor: colors,
};

type YearWithOffset = {
    year: number,
    offset: number,
};

type CalendarGridProps = {
    weeks: WeekData[],
    color: colors,
    assignedTeamsOpen: boolean,
    teams: TeamProps[],
    selectedTeam: string | null,
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
    weeks, color, assignedTeamsOpen, teams, selectedTeam,
}) => {
    const { Title } = Typography;

    const firstYear = new Date(weeks[0].days[0].date).getFullYear();
    const initialYear: YearWithOffset = { year: firstYear, offset: 0 } as YearWithOffset;
    const [years, setyears] = useState<YearWithOffset[]>([initialYear]);

    const [teamDailyData, setTeamDailyData] = useState<DailyTeamData[]>([]);

    useEffect(() => {
        const allDailyTeamData: DailyTeamData[] = teams.map((team) => {
            const dailyTeamData: DayData[] = [];
            weeks.forEach((week) => {
                const weekDays = week.days;
                weekDays.forEach((day) => {
                    const currentTeamData = day.teamData.find((teamData) => teamData.teamId === team.teamId);
                    if (!currentTeamData) return;
                    const newDay: DayData = {
                        date: day.date,
                        worktime: currentTeamData.worktime,
                        maxWorktime: currentTeamData.maxWorktime,
                        isNonWorkingDay: day.isNonWorkingDay,
                    }
                    dailyTeamData.push(newDay);
                });
            });
            return { dayData: dailyTeamData, teamId: team.teamId } as DailyTeamData;
        });
        setTeamDailyData(allDailyTeamData);
    }, [weeks]);

    return (
        <div
            style={{
                position: 'relative',
                height: '100%',
            }}
        >
            <Col
                id='hide-scroll-bar'
                style={{
                    scrollbarWidth: 'none',
                    border: `${variables.thinBorderNoColor} ${getAntDesignColor(colors.NEUTRAL)[5]}`,
                    borderRadius: variables.xSmallBorderRadius,
                    overflowX: 'scroll',
                    position: 'relative',
                    zIndex: '10',
                }}
            >
                <Row style={{ height: variables.yearRowHeight }}>
                {years.map((year, idx) => {
                    return (
                        <div
                            key={year.year}
                            style={{
                                transform: `translateX(${year.offset}px)`,
                                borderLeft: `${idx !== 0 && `${variables.thinBorderNoColor} ${getAntDesignColor(colors.NEUTRAL)[5]}`}`,
                            }}
                        >
                            <Title
                                level={3}
                                style={{
                                    paddingLeft: variables.paddingStandard,
                                }}
                            >
                                {year.year}
                            </Title>
                        </div>
                    )
                })}
                </Row>
                <Row style={{ flexWrap: 'nowrap', height: '100%' }}>
                {weeks.map((week, index) => {
                    return (
                        <WeekRow
                            key={week.week}
                            weekData={week}
                            color={color}
                            rowHeight={variables.rowHeight}
                            isStart={index === 10}
                            setNewYear={(year, offsetX) => {
                                setyears([...years, { year, offset: offsetX - 4 }]);
                            }}
                        />
                    );
                })}
                </Row>
                <Col style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    bottom: 0,
                    //pointerEvents: 'none',
                }}>
                {teams.map((team) => {
                    const thisTeamsDailyData = teamDailyData.find((data) => data.teamId === team.teamId);
                    if (!thisTeamsDailyData) return;
                    return (
                        <EmployeeTimeframe dayData={thisTeamsDailyData.dayData} color={team.teamColor} />
                    );
                })}
                </Col>
            </Col>
            <Col
                style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    bottom: 0,
                    zIndex: '50',
                    pointerEvents: 'none',
                }}
            >
            {teams.map((team) => {
                return (
                    <DraggableTeamCard team={team.teamName} color={team.teamColor} isSelected={selectedTeam === team.teamId} isOpen={true} />
                );
            })}
            </Col>
        </ div>
    );
};

export { CalendarGrid };