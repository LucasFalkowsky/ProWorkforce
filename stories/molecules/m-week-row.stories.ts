import { Colors } from '@prisma/client';
import { WeekRow, WeekData } from '../../frontend/components/molecules/m-week-row';
import { Meta, StoryObj } from '@storybook/react';

const data: WeekData = {
    week: 23,
    days: [
        { day: 1, date: '2023-06-05', teamData: [] },
        { day: 2, date: '2023-06-06', teamData: [] },
        { day: 3, date: '2023-06-07', teamData: [] },
        { day: 4, date: '2023-06-08', teamData: [] },
        { day: 5, date: '2023-06-09', teamData: [], isNonWorkingDay: true },
        { day: 6, date: '2023-06-10', teamData: [], isNonWorkingDay: true },
        { day: 0, date: '2023-06-11', teamData: [], isNonWorkingDay: true },
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
        color: Colors.CYAN,
        rowHeight: '400px',
        isStart: true,
    },
};