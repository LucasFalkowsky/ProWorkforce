import { WeekRow, WeekData } from '../../frontend/components/molecules/m-week-row';
import { Meta, StoryObj } from '@storybook/react';
import { colors } from '../../frontend/styles/colors';

const data: WeekData = {
    week: 23,
    days: [
        { day: 1, date: '2023-06-05' },
        { day: 2, date: '2023-06-06' },
        { day: 3, date: '2023-06-07' },
        { day: 4, date: '2023-06-08' },
        { day: 5, date: '2023-06-09', isNonWorkingDay: true },
        { day: 6, date: '2023-06-10', isNonWorkingDay: true },
        { day: 0, date: '2023-06-11', isNonWorkingDay: true },
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
        isStart: true,
    },
};