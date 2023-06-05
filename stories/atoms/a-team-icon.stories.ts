import { colors } from '../../frontend/styles/colors';
import { TeamIcon } from '../../frontend/components/atoms/a-team-icon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TeamIcon> = {
    title: 'atoms/TeamIcon',
    component: TeamIcon,
    tags: ['autodocs'],
    parameters: {
        team: 'research',
        color: colors.GEEKBLUE,
    },
};
    
export default meta;
type Story = StoryObj<typeof TeamIcon>;

export const primary: Story = {
    args: {
        team: 'research',
        color: colors.GEEKBLUE,
    },
}; 