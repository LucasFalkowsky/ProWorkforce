import { NavigationSwitch } from '../../frontend/components/atoms/a-navigation-switch';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavigationSwitch> = {
    title: 'atoms/NavigationSwitch',
    component: NavigationSwitch,
    tags: ['autodocs'],
    parameters: {
        isOpen: true,
    },
};

export default meta;
type Story = StoryObj<typeof NavigationSwitch>;

export const open: Story = {
    args: {
        isOpen: true,
    },
};

export const closed: Story = {
    args: {
        isOpen: false,
    },
};