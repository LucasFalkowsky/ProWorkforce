import { colors } from '../../frontend/styles/colors';
import { DraggableTeamCard } from '../../frontend/components/molecules/m-draggable-team-card';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DraggableTeamCard> = {
    title: 'molecules/DraggableTeamCard',
    component: DraggableTeamCard,
    tags: ['autodocs'],
    parameters: {
        team: 'research',
        color: colors.GEEKBLUE,
        isSelected: false
    },
};
    
export default meta;
type Story = StoryObj<typeof DraggableTeamCard>;

export const normal: Story = {
    args: {
        team: 'research',
        color: colors.GEEKBLUE,
        isSelected: false
    },
}; 