import React, { useEffect, useState } from 'react';
import { WeekData, WeekRow } from '../molecules/m-week-row';
import { Col, Row, Typography } from 'antd';
import { getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';
import { DraggableTeamCard } from '../molecules/m-draggable-team-card';
import { Timeframe, DayData } from '../molecules/m-timeframe';
import { Colors, Team, Phase, Employee, EmployeeTimeframe } from '@prisma/client';
import { TeamIcon } from '../atoms/a-team-icon';
import { PhaseBar } from '../atoms/a-phase-bar';
import Link from 'next/link';
import { EmployeeCard } from '../molecules/m-employee-card';

type DailyTeamData = Omit<'dayData', 'teamId'> & {
    dayData: DayData[],
    teamId: string,
}

type DailyEmployeeData = Omit<'dayData', 'employeeId'> & {
    dayData: DayData[],
    employeeId: string,
}

export type TeamProps = {
    teamId: string,
    teamName: string,
    teamColor: Colors,
};

type YearWithOffset = {
    year: number,
    offset: number,
};

type CalendarGridProps = {
    isProjectPlanning?: boolean,
    weeks: WeekData[],
    color: Colors,
    teams: Team[],
    selectedTeam: string | undefined,
    employees?: Employee[],
    employeeTimeframes?: EmployeeTimeframe[],
    allPhases?: Phase[],
    startDate?: string,
    onHighlightTeam?: (team: string | undefined) => void,
    onHighlightEmployee?: (employee: string | undefined) => void,
    onDown: (day: string) => void,
    onUp: (day: string) => void,
    editTimeframe: (timeframe: EmployeeTimeframe) => void,
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
    isProjectPlanning, weeks, color, teams, selectedTeam, employees, employeeTimeframes, allPhases, startDate, onHighlightTeam, onHighlightEmployee, onDown, onUp, editTimeframe
}) => {
    const { Title, Text } = Typography;

    const firstYear = new Date(weeks[0].days[0].date).getFullYear();
    const initialYear: YearWithOffset = { year: firstYear, offset: 0 } as YearWithOffset;
    const [years, setyears] = useState<YearWithOffset[]>([initialYear]);

    const [teamDailyData, setTeamDailyData] = useState<DailyTeamData[]>([]);
    const [employeeDailyData, setEmployeeDailyData] = useState<DailyEmployeeData[]>([]);
    const [newPhaseStart, setNewPhaseStart] = useState<string | undefined>(undefined);
    const [newPhaseEnd, setNewPhaseEnd] = useState<string | undefined>(undefined);

    const [phaseTimeframes, setPhaseTimeframes] = useState<EmployeeTimeframe[]>([]);

    useEffect(() => {
        if (isProjectPlanning) {
            const allDailyTeamData: DailyTeamData[] = teams.map((team) => {
                const dailyTeamData: DayData[] = [];
                weeks.forEach((week) => {
                    const weekDays = week.days;
                    weekDays.forEach((day) => {
                        const currentTeamData = day.teamData.find((teamData) => teamData.teamId === team.id);
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
                return { dayData: dailyTeamData, teamId: team.id } as DailyTeamData;
            });
            setTeamDailyData(allDailyTeamData);
        } else {
            if (!employees) return;
            const allDailyEmployeeData: DailyEmployeeData[] = employees.map((employee) => {
                const dailyEmployeeData: DayData[] = [];
                weeks.forEach((week) => {
                    const weekDays = week.days;
                    weekDays.forEach((day) => {
                        const currentTimeframes = phaseTimeframes.filter((timeframe) => timeframe.employee === employee.id);
                        if (!currentTimeframes) return;
                        let worktime = 0;
                        currentTimeframes.forEach((timeframe) => {
                            const timeframeStart = new Date(timeframe.startDate);
                            const timeframeEnd = new Date(timeframe.endDate);
                            const dayDate = new Date(day.date);
                            if (timeframeStart <= dayDate && timeframeEnd >= dayDate) {
                                worktime += timeframe.workweek;
                            }
                        });
                        const newDay: DayData = {
                            date: day.date,
                            worktime: worktime,
                            maxWorktime: employee.workweek,
                            isNonWorkingDay: day.isNonWorkingDay,
                        }
                        dailyEmployeeData.push(newDay);
                    });
                });
                console.log(dailyEmployeeData);
                return { dayData: dailyEmployeeData, employeeId: employee.id } as DailyEmployeeData;
            });
            setEmployeeDailyData(allDailyEmployeeData);
        }
    }, [weeks, employees]);

    useEffect(() => {
        if (!employeeTimeframes || !allPhases) return;
        const timeframes: EmployeeTimeframe[] = employeeTimeframes.filter((employeeTimeframe) => employeeTimeframe.phase === allPhases[0].id);
        setPhaseTimeframes(timeframes)
    }, [employeeTimeframes, allPhases]);

    function calculateDaysInRange(startDate: Date, endDate: Date): number {
        const start = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const end = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
      
        const diffInMs = end - start;
      
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        return diffInDays;
    }

    const handleOnDown = (day: string) => {
        setNewPhaseStart(day);
        onDown(day);
    }

    const handleOnUp = (day: string) => {
        setNewPhaseStart(undefined);
        onUp(day);
    }

    return (
        <div
            style={{
                position: 'relative',
                width: `calc(100vw - ${variables.navOpenWidth} + ${variables.paddingLarge})`,
                height: '100%',
            }}
        >
            <Col
                id='hide-scroll-bar'
                style={{
                    scrollbarWidth: 'none',
                    border: `${variables.thinBorderNoColor} ${getAntDesignColor(Colors.NEUTRAL)[5]}`,
                    borderRadius: variables.xSmallBorderRadius,
                    overflowX: 'scroll',
                    position: 'relative',
                    zIndex: '10',
                    height: 'inherit',
                }}
            >
                <Row style={{ height: variables.yearRowHeight }}>
                {years.map((year, idx) => {
                    return (
                        <div
                            key={year.year}
                            style={{
                                transform: `translateX(${year.offset}px)`,
                                borderLeft: `${idx !== 0 && `${variables.thinBorderNoColor} ${getAntDesignColor(Colors.NEUTRAL)[5]}`}`,
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
                <Row style={{ flexWrap: 'nowrap', height: `calc(100% - ${variables.yearRowHeight})` }}>
                    {allPhases && !isProjectPlanning ? (
                        <>
                            {teams && teams.map((team, idx) => {
                                const daysInPhase = calculateDaysInRange(new Date(allPhases[0].startDate), new Date(allPhases[0].endDate));
                                const offset = calculateDaysInRange(new Date(weeks[0].days[0].date), new Date(allPhases[0].startDate));
                                return <PhaseBar team={team} daysInPhase={daysInPhase} offset={offset} index={idx} passive />
                            })}
                            {phaseTimeframes.map((timeframe, idx) => {
                                const team = teams[0];
                                const employee = employees?.find((employee) => employee.id === timeframe.employee);
                                const daysInPhase = calculateDaysInRange(new Date(timeframe.startDate), new Date(timeframe.endDate));
                                const offset = calculateDaysInRange(new Date(weeks[0].days[0].date), new Date(timeframe.startDate));
                                return (
                                    <div onClick={() => editTimeframe(timeframe)}>
                                        <PhaseBar team={team} employee={employee} daysInPhase={daysInPhase} offset={offset} index={idx + 1} />
                                    </div>
                                )
                            })}
                        </>
                    ) : (
                        <>
                            {allPhases && allPhases.map((phase, idx) => {
                                const team = teams.find((team) => team.id === phase.phaseteam);
                                const daysInPhase = calculateDaysInRange(new Date(phase.startDate), new Date(phase.endDate));
                                const offset = calculateDaysInRange(new Date(weeks[0].days[0].date), new Date(phase.startDate));
                                return (
                                    <Link href={`/phase?phaseId=${phase.id}&projectId=${phase.project}`} key={phase.id}>
                                        <div style={{ cursor: 'pointer' }}>
                                            <PhaseBar team={team!} daysInPhase={daysInPhase} offset={offset} index={idx} />
                                        </div>
                                    </Link>
                                )
                            })}
                        </>
                    )}
                {weeks.map((week, index) => {
                    return (
                        <WeekRow
                            key={week.week}
                            weekData={week}
                            color={color}
                            isStart={week.days.find((day) => day.date === startDate) ? true : false}
                            selectedDay={newPhaseStart}
                            hoveredDay={newPhaseEnd}
                            setNewYear={(year, offsetX) => {
                                setyears([...years, { year, offset: offsetX - 4 }]);
                            }}
                            onOver={setNewPhaseEnd}
                            onDown={handleOnDown}
                            onUp={handleOnUp}
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
                    pointerEvents: 'none',
                }}>
                {isProjectPlanning ? (
                    teams.map((team) => {
                        const thisTeamsDailyData = teamDailyData.find((data) => data.teamId === team.id);
                        if (!thisTeamsDailyData) return;
                        return (
                            <Timeframe dayData={thisTeamsDailyData.dayData} color={team.color} />
                        );
                    })
                ) : (
                    employees && employees.map((employee) => {
                        const thisEmployeesDailyData = employeeDailyData.find((data) => data.employeeId === employee.id);
                        if (!thisEmployeesDailyData) return;
                        return (
                            <Timeframe dayData={thisEmployeesDailyData.dayData} color={teams[0].color} />
                        );
                    })
                )}
                </Col>
            </Col>
            <Col
                style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    bottom: 0,
                    zIndex: '50',
                    marginBottom: variables.paddingLarge,
                }}
            >
            {!employees ? teams.map((team) => {
                return (
                    <DraggableTeamCard team={team.name} color={team.color} isSelected={selectedTeam === team.id} isOpen={true} onSelect={onHighlightTeam} />
                );
            }) : employees.map((employee) => {
                return (
                    <EmployeeCard employee={employee} color={teams[0].color} isSelected={selectedTeam === employee.id} onSelect={onHighlightEmployee} />
                )
            })}
            </Col>
        </ div>
    );
};

export { CalendarGrid };