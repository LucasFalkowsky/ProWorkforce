import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { DailyTeamData, WeekData } from "../../frontend/components/molecules/m-week-row";
import fetch from 'node-fetch';
import { DatePickRef } from "antd/es/date-picker/generatePicker/interface";
import { Colors, EmployeeTimeframe } from "@prisma/client";
import { time } from "console";
import { DayData } from "@/frontend/components/molecules/m-timeframe";
import { colors } from "@/frontend/styles/colors";

type PublicHolidayType = {
    date: Date,
    localName: string,
    name: string,
    countryCode: string,
    fixed: boolean,
    global: boolean,
    counties: string[],
    launchYear: number,
    type: string,
}

type DaysData = {
    day: number,
    date: string,
    teamData: DailyTeamData[],
    isNonWorkingDay?: boolean,
}

type Work = {
    maxWork: number,
    work: number,
}

const getCalendarService = async (
    projectId: string,
    countryCode: string,
    res: NextApiResponse<WeekData[]>,
): Promise<void> => {
    const project = await prisma.project.findUnique({
        where: { id: projectId },
    });
    // FETCH PUBLIC HOLIDAYS
    const url = 'https://date.nager.at'
    const apiEndpoint = 'api/v3/PublicHolidays'
    const year = project?.startdate ? project.startdate.getFullYear() : new Date().getFullYear()

    async function fetchPublicHolidays(year: number, countryCode: string): Promise<any[]> {
        try {
            const response = await fetch(`${url}/${apiEndpoint}/${year}/${countryCode}`);
            const data = await response.json();
            return data as any[];
        } catch (error) {
            console.error('Error fetching public holidays:', error);
            throw error;
        }
    }

    const pubilcHolidays: PublicHolidayType[] = await fetchPublicHolidays(year, countryCode)
    if (!pubilcHolidays) {
        return void res.status(400).end();
    }
    const publicHolidayDates = pubilcHolidays.map((holiday) => {return new Date(holiday.date).toDateString()})

    const projectPhases = await prisma.phase.findMany({
        where: { project: projectId },
    });
    const allTeams = await prisma.team.findMany({});
    const allProjectTeams = await prisma.projectTeam.findMany({});
    const allEmployeeTeams = await prisma.employeeTeam.findMany({});
    const allEmployees = await prisma.employee.findMany({});

    const employeeTimeframes = await prisma.employeeTimeframe.findMany({});

    // GENERATE YEARS DAYS
    function getDates(startDate: Date, endDate: Date) {
        const dates = [];
        let currentDate = startDate;
    
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
    
        return dates;
    }
    
    
    const dates = getDates(new Date(year, 0, 1), new Date(year, 11, 31))

    async function getWeekData(dates: Date[]): Promise<WeekData[]> {
        const weekData: WeekData[] = [];
        const weeks: { [week: number]: Date[] } = {};
      
        for (const date of dates) {
            const week = getCalendarWeek(date);
            if (!(week in weeks)) {
                weeks[week] = [];
            }
            weeks[week].push(date);
        }

        for (const week of Object.keys(weeks)) {
            const weekNumber = Number(week);
            const weekDates = weeks[weekNumber];
            
            if (weekDates.length > 7) {
                const lastDay = weekDates.pop(); 
                
                if (lastDay) {
                    const nextWeek = weekNumber + 1;
                    
                    if (!(nextWeek in weeks)) {
                        weeks[nextWeek] = [];
                    }
                    
                    weeks[nextWeek].unshift(lastDay);
                }
            }
        }
      
        for (const week in weeks) {
            const days: DaysData[] = await Promise.all(weeks[week].map(async (day) => {
                const projectTeams = allProjectTeams.filter((projectTeam) => projectTeam.project === projectId);
                const teams = allTeams.filter((team) => projectTeams.some((projectTeam) => projectTeam.team === team.id));
                const teamData = await Promise.all(teams.map(async (team) => {
                    const phases = projectPhases.filter((phase) => phase.phaseteam === team.id);
                    
                    const phaseIds = phases.map((phase) => phase.id);
                    const timeframes = employeeTimeframes.filter((timeframe) => phaseIds.includes(timeframe.phase));
                    let work: Work = {maxWork: 0, work: 0}
                    const employeeTeams = allEmployeeTeams.filter((employeeTeam) => employeeTeam.team === team.id);
                    const employeeIds = employeeTeams.map((employeeTeam) => employeeTeam.employee);
                    const employees = allEmployees.filter((employee) => employeeIds.includes(employee.id));
                    employees.forEach((employee) => {
                        work.maxWork += employee.workweek || 0;
                    })
                    timeframes.forEach(async (timeframe) => {
                        if (timeframe.startDate <= day && timeframe.endDate >= day) {
                            work.work += timeframe.workweek;
                        }
                    });
                    return {
                        teamId: team.id,
                        teamColor: team.color as Colors,
                        worktime: work.work,
                        maxWorktime: work.maxWork,
                    }
                }));
                return {
                    day: day.getDay(),
                    date: day.toDateString(),
                    teamData: teamData,
                    isNonWorkingDay: publicHolidayDates.includes(day.toDateString()) || day.getDay() === 0 || day.getDay() === 6,
                }
            }));
            weekData.push({
                week: parseInt(week) + 1,
                days: days,
            });
        }
      
        return weekData;
    }
    
    function getCalendarWeek(date: Date): number {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const daysOffset = firstDayOfYear.getDay() - 1; // Adjust for different starting day of the week
        const startOfYear = new Date(date.getFullYear(), 0, 1 - daysOffset);
        const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
        const diffMilliseconds = date.getTime() - startOfYear.getTime();
        const week = Math.floor(diffMilliseconds / millisecondsPerWeek);
      
        return week;
    }
    const weekData = await getWeekData(dates);
    return void res.status(200).json(weekData);
}

export {
    getCalendarService,
}