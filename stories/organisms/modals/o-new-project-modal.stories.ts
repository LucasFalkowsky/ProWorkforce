import { useState } from 'react';
import { NewProjectModal } from '../../../frontend/components/organisms/modals/o-new-project-modal';
import { Meta, StoryObj } from '@storybook/react';

let open = true;
const teams = [
    'research',
    'design',
    'development',
]

const meta: Meta<typeof NewProjectModal> = {
    title: 'organisms/modals/NewProjectModal',
    component: NewProjectModal,
    tags: ['autodocs'],
    parameters: {
        isOpen: open,
        setIsOpen: () => {open = !open},
        teams,
    },
};

export default meta;
type Story = StoryObj<typeof NewProjectModal>;

export const openState: Story = {
    args: {
        isOpen: true,
        teams,
    },
};

export const closedState: Story = {
    args: {
        isOpen: false,
        teams,
    },
};