import { DateRange } from '../../frontend/components/atoms/a-date-range';
import { Meta, StoryObj } from '@storybook/react';

const startDate = new Date('2023-12-17T03:24:00');
const endDate = new Date('2024-01-17T03:24:00');

const meta: Meta<typeof DateRange> = {
    title: 'atoms/DateRange',
    component: DateRange,
    tags: ['autodocs'],
    parameters: {
        startDate,
        endDate,
        primary: true,
    },
};
    
export default meta;
type Story = StoryObj<typeof DateRange>;

export const primary: Story = {
    args: {
        startDate,
        endDate,
        primary: true,
    },
};

export const secondary: Story = {
    args: {
        startDate,
        endDate,
        primary: false,
    },
};  