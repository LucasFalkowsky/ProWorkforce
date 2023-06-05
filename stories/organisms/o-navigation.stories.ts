import { useState } from 'react';
import { Navigation } from '../../frontend/components/organisms/o-navigation';
import { Meta, StoryObj } from '@storybook/react';

let open = true;

const meta: Meta<typeof Navigation> = {
    title: 'organisms/Navigation',
    component: Navigation,
    tags: ['autodocs'],
    parameters: {
        isOpen: open,
        setIsOpen: () => {open = !open},
    },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const openState: Story = {
    args: {
        isOpen: true,
    },
};

export const closedState: Story = {
    args: {
        isOpen: false,
    },
};