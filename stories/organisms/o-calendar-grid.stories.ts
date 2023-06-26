import { colors } from '../../frontend/styles/colors';
import { DailyTeamData, WeekData } from '../../frontend/components/molecules/m-week-row';
import { CalendarGrid } from '../../frontend/components/organisms/o-calendar-grid';
import { Meta, StoryObj } from '@storybook/react';
import { TeamProps } from '../../frontend/components/organisms/o-calendar-grid';

const teams: TeamProps[] = [
    {
        teamId: '1',
        teamName: 'development',
        teamColor: colors.GEEKBLUE,
    },
    {
        teamId: '2',
        teamName: 'design',
        teamColor: colors.MAGENTA,
    }
];

const firstDaysTeamData: DailyTeamData[][] = [
    // Day 1
    [
        { teamId: '1', teamColor: colors.GEEKBLUE, worktime: 6, maxWorktime: 24 },
        { teamId: '2', teamColor: colors.MAGENTA, worktime: 15, maxWorktime: 24 },
    ],
    // Day 2
    [
        { teamId: '1', teamColor: colors.GEEKBLUE, worktime: 23, maxWorktime: 24 },
        { teamId: '2', teamColor: colors.MAGENTA, worktime: 9, maxWorktime: 24 },
    ],
    // Day 3
    [
        { teamId: '1', teamColor: colors.GEEKBLUE, worktime: 10, maxWorktime: 24 },
        { teamId: '2', teamColor: colors.MAGENTA, worktime: 19, maxWorktime: 24 },
    ],
    // Day 4
    [
        { teamId: '1', teamColor: colors.GEEKBLUE, worktime: 13, maxWorktime: 24 },
        { teamId: '2', teamColor: colors.MAGENTA, worktime: 7, maxWorktime: 24 },
    ],
    // Day 5
    [
        { teamId: '1', teamColor: colors.GEEKBLUE, worktime: 9, maxWorktime: 24 },
        { teamId: '2', teamColor: colors.MAGENTA, worktime: 18, maxWorktime: 24 },
    ],
    // Day 6
    [
        { teamId: '1', teamColor: colors.GEEKBLUE, worktime: 14, maxWorktime: 24 },
        { teamId: '2', teamColor: colors.MAGENTA, worktime: 6, maxWorktime: 24 },
    ],
    // Day 7
    [
        { teamId: '1', teamColor: colors.GEEKBLUE, worktime: 8, maxWorktime: 24 },
        { teamId: '2', teamColor: colors.MAGENTA, worktime: 21, maxWorktime: 24 }
    ]
];

const worktime = [8, 14, 20];

const data: WeekData = {
    week: 45,
    days: [
      { day: 1, date: '2023-11-06', teamData: firstDaysTeamData[0] },
      { day: 2, date: '2023-11-07', teamData: firstDaysTeamData[1] },
      { day: 3, date: '2023-11-08', teamData: firstDaysTeamData[2] },
      { day: 4, date: '2023-11-09', teamData: firstDaysTeamData[3] },
      { day: 5, date: '2023-11-10', teamData: firstDaysTeamData[4], isNonWorkingDay: true },
      { day: 6, date: '2023-11-11', teamData: firstDaysTeamData[5], isNonWorkingDay: true },
      { day: 0, date: '2023-11-12', teamData: firstDaysTeamData[6], isNonWorkingDay: true },
    ],
};
  
const weekDataArray: WeekData[] = [];
  
// Helper function to add days to a given date
function addDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}
  
// Helper function to check if a given date is a weekend day (Saturday or Sunday)
function isWeekend(date: Date): boolean {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // 0: Sunday, 6: Saturday
}
  
// Helper function to check if a given date is a national holiday (DE, BY)
function isNationalHoliday(): boolean {
    return Math.random() < 0.1; // Probability of returning true is 1/20 = 0.05
}
  
// Generate 20 WeekData objects
for (let i = 0; i < 20; i++) {
    const previousWeekData = weekDataArray[i - 1];
    const previousDate = previousWeekData ? new Date(previousWeekData.days[6].date) : new Date(data.days[6].date);
    const newWeekData: WeekData = {
        week: data.week + i < 53 ? data.week + i : data.week + i - 52,
        days: [],
    };
  
    for (let j = 0; j < 7; j++) {
        const currentDate = addDays(previousDate, j + 1);
        const day: number = (j + 1) % 7; // Calculate the day number based on the current day index
    
        const daysTeamData = teams.map((team) => {
            return {
                teamId: team.teamId,
                teamColor: team.teamColor,
                worktime: worktime[Math.floor(Math.random()*worktime.length)],
                maxWorktime: 16,
            }
        });

        const isNonWorkingDay: boolean = isWeekend(currentDate) || isNationalHoliday();
    
        newWeekData.days.push({
            day,
            date: currentDate.toISOString().split('T')[0],
            teamData: daysTeamData,
            isNonWorkingDay,
        });
    }
    weekDataArray.push(newWeekData);
}

const meta: Meta<typeof CalendarGrid> = {
    title: 'organisms/CalendarGrid',
    component: CalendarGrid,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CalendarGrid>;

export const primary: Story = {
    args: {
        weeks: weekDataArray,
        color: colors.NEUTRAL,
        assignedTeamsOpen: false,
        teams: teams,
        selectedTeam: null,
    },
};

export const selectedTeam: Story = {
    args: {
        weeks: weekDataArray,
        color: colors.NEUTRAL,
        assignedTeamsOpen: true,
        teams: teams,
        selectedTeam: '1',
    },
};