import { DraggableTimeSlot } from '../../frontend/components/atoms/a-draggable-time-slot';
import { Meta, StoryObj } from '@storybook/react';
import { colors } from '../../frontend/styles/colors';

const meta: Meta<typeof DraggableTimeSlot> = {
    title: 'atoms/DraggableTimeSlot',
    component: DraggableTimeSlot,
    tags: ['autodocs'],
    argTypes: {
        setNewLength: {action: 'setNewLength'},
        setNewPosition: {action: 'setNewPosition'},
    },
};

export default meta;
type Story = StoryObj<typeof DraggableTimeSlot>;

export const normal: Story = {
    args: {
        offsetX: '0',
        length: '300px',
        team: 'research',
        color: colors.LIME,
    },
};

export const warning: Story = {
    args: {
        offsetX: '0',
        length: '300px',
        team: 'research',
        color: colors.LIME,
        warning: [
            'There are no employees working on this project phase yet.',
            'There is still time on this phase yet to be covered by employees of the Team Design.'
        ]
    },
};