import { WeekRow, WeekData, DailyTeamData } from '../../frontend/components/molecules/m-week-row';
import { Meta, StoryObj } from '@storybook/react';
import { colors } from '../../frontend/styles/colors';

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

const data: WeekData = {
    week: 23,
    days: [
        { day: 1, date: '2023-06-05', teamData: firstDaysTeamData[0] },
        { day: 2, date: '2023-06-06', teamData: firstDaysTeamData[1] },
        { day: 3, date: '2023-06-07', teamData: firstDaysTeamData[2] },
        { day: 4, date: '2023-06-08', teamData: firstDaysTeamData[3] },
        { day: 5, date: '2023-06-09', teamData: firstDaysTeamData[4], isNonWorkingDay: true },
        { day: 6, date: '2023-06-10', teamData: firstDaysTeamData[5], isNonWorkingDay: true },
        { day: 0, date: '2023-06-11', teamData: firstDaysTeamData[6], isNonWorkingDay: true },
    ],
}

const meta: Meta<typeof WeekRow> = {
    title: 'molecules/WeekRow',
    component: WeekRow,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WeekRow>;

export const primary: Story = {
    args: {
        weekData: data,
        color: colors.CYAN,
        rowHeight: '400px',
        isStart: true,
    },
};