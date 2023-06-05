import { WeekDisplay } from '../../frontend/components/atoms/a-week-display';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WeekDisplay> = {
    title: 'atoms/WeekDisplay',
    component: WeekDisplay,
    tags: ['autodocs'],
    parameters: {
        week: 36,
        isStart: true,
    },
};

export default meta;
type Story = StoryObj<typeof WeekDisplay>;

export const normalWeek: Story = {
    args: {
        week: 36,
        isStart: false,
    },
};

export const projectStartWeek: Story = {
    args: {
        week: 36,
        isStart: true,
    },
};