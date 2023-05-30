import { PhaseCount } from '../../frontend/components/atoms/a-phase-count';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PhaseCount> = {
    title: 'atoms/PhaseCount',
    component: PhaseCount,
    tags: ['autodocs'],
    parameters: {
        phaseCount: 3,
        finishedPhaseCount: 1,
    },
};

export default meta;
type Story = StoryObj<typeof PhaseCount>;

export const primary: Story = {
    args: {
        phaseCount: 3,
        finishedPhaseCount: 1,
    },
};