import { AssignedTeamsButton } from '../../frontend/components/atoms/a-assigned-teams-button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AssignedTeamsButton> = {
    title: 'atoms/AssignedTeamsButton',
    component: AssignedTeamsButton,
    tags: ['autodocs'],
    parameters: {
        isOpen: false,
    },
};
    
export default meta;
type Story = StoryObj<typeof AssignedTeamsButton>;

export const primary: Story = {
    args: {
        isOpen: false,
    },
}; 